"use client";

import { clsx } from "clsx/lite";
import { useState, type FormEvent, type ReactNode } from "react";
import { useWaitlistSubmit } from "~/hooks/use-waitlist-submit";
import { ArrowNarrowRightIcon } from "../icons/arrow-narrow-right-icon";

export function FooterWaitlistForm({
  headline,
  subheadline,
  className,
}: {
  headline: ReactNode;
  subheadline: ReactNode;
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const { submit, loading } = useWaitlistSubmit();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const result = await submit(email);
    if (result) {
      setEmail("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={clsx("flex max-w-sm flex-col gap-2", className)}
    >
      <p>{headline}</p>
      <div className="flex flex-col gap-4 text-mist-700 dark:text-mist-400">
        {subheadline}
      </div>
      <div className="flex items-center border-b border-mist-950/20 py-2 has-[input:focus]:border-mist-950 dark:border-white/20 dark:has-[input:focus]:border-white">
        <input
          type="email"
          placeholder="Email"
          aria-label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          className="flex-1 text-mist-950 focus:outline-hidden dark:text-white disabled:opacity-50"
        />
        <button
          type="submit"
          aria-label="Join waitlist"
          disabled={loading}
          className="relative inline-flex size-7 items-center justify-center rounded-full after:absolute after:-inset-2 hover:bg-mist-950/10 dark:hover:bg-white/10 after:pointer-fine:hidden disabled:opacity-50"
        >
          {loading ? (
            <svg
              className="animate-spin size-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <title>Loading</title>
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          ) : (
            <ArrowNarrowRightIcon />
          )}
        </button>
      </div>
    </form>
  );
}
