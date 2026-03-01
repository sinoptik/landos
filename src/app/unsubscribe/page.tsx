import Link from "next/link";
import { UnsubscribeButton } from "./unsubscribe-button";

export const metadata = {
  title: "Unsubscribe – Sinope AI",
};

export default async function UnsubscribePage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-24">
      <div className="w-full max-w-md text-center">
        <Link href="/" className="inline-block mb-8">
          <span className="text-xl font-bold text-mist-950 dark:text-white">
            Sinope AI
          </span>
        </Link>

        {id ? (
          <>
            <h1 className="text-3xl font-bold text-mist-950 dark:text-white mb-4">
              Unsubscribe from waitlist
            </h1>
            <p className="text-mist-600 dark:text-mist-400 mb-10">
              You&apos;re about to unsubscribe from the Sinope AI waitlist. You
              won&apos;t receive any further emails from us.
            </p>
            <UnsubscribeButton id={id} />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-mist-950 dark:text-white mb-4">
              Invalid unsubscribe link
            </h1>
            <p className="text-mist-600 dark:text-mist-400 mb-8">
              This unsubscribe link is missing an identifier. Please use the
              link from your original waitlist confirmation email.
            </p>
            <p className="text-sm text-mist-500 dark:text-mist-500">
              Need help?{" "}
              <a
                href="mailto:nikita@sinope.ai"
                className="underline text-mist-950 dark:text-white"
              >
                Contact us
              </a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
