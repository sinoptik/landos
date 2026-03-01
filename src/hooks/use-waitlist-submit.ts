"use client";

import { useState } from "react";
import { toast } from "sonner";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useWaitlistSubmit() {
  const [loading, setLoading] = useState(false);

  const submit = async (
    email: string,
    refCode?: string,
  ): Promise<{ code: string } | null> => {
    if (!email || !EMAIL_REGEX.test(email)) {
      toast.error("Please enter a valid email address");
      return null;
    }

    const payload = {
      email,
      referredBy: refCode || undefined,
    };

    try {
      setLoading(true);

      const notionRes = await fetch("/api/notion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!notionRes.ok) {
        const errData = await notionRes.json();
        if (notionRes.status === 409) {
          toast.error(errData.error || "You're already on the waitlist!");
          return null;
        }
        throw new Error(notionRes.status === 429 ? "Rate limited" : "Notion failed");
      }

      const { code, notionId } = await notionRes.json();

      const mailRes = await fetch("/api/mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, unsubscribeId: notionId }),
      });

      if (!mailRes.ok) {
        throw new Error(mailRes.status === 429 ? "Rate limited" : "Email failed");
      }

      toast.success("You're on the waitlist!");
      return { code };
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(
          error.message === "Rate limited"
            ? "Too many attempts. Try again later."
            : "Something went wrong. Try again.",
        );
      }
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading };
}
