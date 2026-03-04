"use client";

import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { useSearchParams } from "next/navigation";
import { useWaitlistSubmit } from "~/hooks/use-waitlist-submit";

interface FormProps {
  onSuccessChange?: (success: boolean) => void;
}

export default function WaitlistForm({ onSuccessChange }: FormProps) {
  const searchParams = useSearchParams();
  const refCode = searchParams.get("ref");

  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [shareLink, setShareLink] = useState("");
  const { submit, loading } = useWaitlistSubmit();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const result = await submit(email, refCode ?? undefined);
    if (!result) return;

    const link = `${window.location.origin}/?ref=${result.code}`;
    setShareLink(link);
    setSuccess(true);
    onSuccessChange?.(true);

    setTimeout(() => {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: [
          "#ff0000",
          "#00ff00",
          "#0000ff",
          "#ffff00",
          "#ff00ff",
          "#00ffff",
        ],
      });
    }, 150);

    setEmail("");
  };

  const resetForm = () => {
    setEmail("");
    setSuccess(false);
    setShareLink("");
    onSuccessChange?.(false);
  };

  const copyLink = () => {
    navigator.clipboard.writeText(shareLink);
    toast.success("Link copied!");
  };

  return (
    <div className="w-full relative">
      {success ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <p className="text-lg font-medium text-mist-950 dark:text-white">
            Share your link to skip the line!
          </p>
          <div className="flex items-center gap-2 max-w-sm mx-auto">
            <input
              value={shareLink}
              readOnly
              className="flex-1 px-3 py-2 border border-mist-300 dark:border-mist-700 rounded-full text-sm text-mist-950 dark:text-white bg-white dark:bg-mist-900"
            />
            <button
              type="button"
              onClick={copyLink}
              className="inline-flex shrink-0 items-center justify-center rounded-full px-4 py-2 text-sm font-medium bg-mist-950/10 text-mist-950 hover:bg-mist-950/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
            >
              Copy
            </button>
          </div>
          <button
            type="button"
            onClick={resetForm}
            className="text-sm text-mist-500 dark:text-mist-400 underline hover:text-mist-700 dark:hover:text-mist-300"
          >
            Join with another email
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="relative">
          <div className="flex relative">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="flex-grow bg-white dark:bg-mist-900 border border-mist-300 dark:border-mist-700 text-mist-950 dark:text-white placeholder:text-mist-500 px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-mist-950/20 dark:focus:ring-white/20"
              disabled={loading}
              required
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 bottom-1.5 rounded-full px-5 font-medium text-sm bg-mist-950 text-white hover:bg-mist-800 dark:bg-mist-300 dark:text-mist-950 dark:hover:bg-mist-200 disabled:opacity-50 inline-flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4"
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
                  Joining...
                </>
              ) : (
                "Join the Waitlist"
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
