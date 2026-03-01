"use client";

import { useState } from "react";

export function UnsubscribeButton({ id }: { id: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUnsubscribe = async () => {
    setStatus("loading");
    try {
      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (res.ok) {
        setStatus("done");
      } else {
        const data = await res.json();
        if (res.status === 404) {
          setErrorMessage("This link is invalid or has expired.");
        } else {
          setErrorMessage(data.error || "Something went wrong. Please try again.");
        }
        setStatus("error");
      }
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="rounded-2xl bg-mist-100 dark:bg-mist-800 px-8 py-6 text-center">
        <p className="text-lg font-semibold text-mist-950 dark:text-white">
          You&apos;ve been unsubscribed.
        </p>
        <p className="mt-2 text-sm text-mist-600 dark:text-mist-400">
          You won&apos;t receive any further emails from us. Thank you for your time.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {status === "error" && (
        <p className="text-sm text-red-500">{errorMessage}</p>
      )}
      <button
        type="button"
        onClick={handleUnsubscribe}
        disabled={status === "loading"}
        className="rounded-full bg-mist-950 text-white dark:bg-mist-300 dark:text-mist-950 px-8 py-3 font-semibold text-sm hover:bg-mist-800 dark:hover:bg-mist-200 disabled:opacity-50 transition-colors"
      >
        {status === "loading" ? "Unsubscribing…" : "Unsubscribe"}
      </button>
      <p className="text-xs text-mist-500 dark:text-mist-500">
        This action cannot be undone.
      </p>
    </div>
  );
}
