"use client";

import { Suspense, useState } from "react";

import Countdown from "./countdown";
import People from "./people";
import WaitlistForm from "./form";

function WaitlistFormFallback() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full max-w-md animate-pulse">
      <div className="h-12 w-full rounded-md bg-muted" />
      <div className="h-10 w-24 rounded-md bg-muted" />
    </div>
  );
}

export default function Hero({ waitlistPeople }: { waitlistPeople: number }) {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      {/* <div className="flex flex-col items-center justify-center gap-2 max-w-2xl">
        <h2 className="text-4xl font-bold text-foreground">
          {isSuccess ? "You're on the waitlist" : "Get early Access"}
        </h2>
        <p className="text-base text-muted-foreground text-center max-w-md">
          {isSuccess
            ? "You've successfully secured your spot.We’ll hit you up the moment it’s your turn to dive in"
            : "Be among the first to experience the future of AI-powered productivity. Join the waitlist to get notified when we launch."}
        </p>
      </div> */}
      <div className="flex flex-col items-center justify-center gap-2 w-full max-w-md">
        <Suspense fallback={<WaitlistFormFallback />}>
          <WaitlistForm onSuccessChange={setIsSuccess} />
        </Suspense>
      </div>
      <div className="flex items-center justify-center gap-2">
        <People count={waitlistPeople + 128} />
      </div>
      {/* <Countdown period={new Date("2026-04-07")} /> */}
    </div>
  );
}
