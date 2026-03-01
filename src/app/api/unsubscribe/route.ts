import { NextResponse } from "next/server";
import { notion, NOTION_DB_ID } from "~/lib/notion";

const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function POST(request: Request) {
  try {
    const { id } = await request.json();

    if (!id || typeof id !== "string") {
      return NextResponse.json({ error: "Missing id" }, { status: 400 });
    }

    const normalizedId = id.includes("-") ? id : id.replace(
      /^([0-9a-f]{8})([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{4})([0-9a-f]{12})$/i,
      "$1-$2-$3-$4-$5",
    );

    if (!UUID_REGEX.test(normalizedId)) {
      return NextResponse.json({ error: "Invalid id format" }, { status: 400 });
    }

    let page: Awaited<ReturnType<typeof notion.pages.retrieve>>;
    try {
      page = await notion.pages.retrieve({ page_id: normalizedId });
    } catch {
      return NextResponse.json({ error: "Page not found" }, { status: 404 });
    }

    if (
      !("parent" in page) ||
      page.parent.type !== "database_id" ||
      page.parent.database_id.replace(/-/g, "") !== NOTION_DB_ID.replace(/-/g, "")
    ) {
      return NextResponse.json({ error: "Page not found" }, { status: 404 });
    }

    const properties = "properties" in page ? page.properties : {};
    const unsubProp = properties["Unsubscribed At"];
    if (
      unsubProp &&
      unsubProp.type === "date" &&
      unsubProp.date?.start
    ) {
      return NextResponse.json({ success: true, alreadyUnsubscribed: true }, { status: 200 });
    }

    await notion.pages.update({
      page_id: normalizedId,
      properties: {
        "Unsubscribed At": {
          date: { start: new Date().toISOString() },
        },
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: unknown) {
    console.error("Unsubscribe error:", error);
    return NextResponse.json(
      { error: "Failed to process unsubscribe request" },
      { status: 500 },
    );
  }
}
