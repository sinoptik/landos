import { clsx } from "clsx/lite";
import type { ComponentProps, ReactNode } from "react";
import { ChevronIcon } from "../icons/chevron-icon";

export function AnnouncementBadge({
  text,
  href,
  cta = "Learn more",
  variant = "normal",
  className,
  ...props
}: {
  text: ReactNode;
  href: string;
  cta?: ReactNode;
  variant?: "normal" | "overlay";
} & Omit<ComponentProps<"div">, "children">) {
  return (
    <div
      {...props}
      data-variant={variant}
      className={clsx(
        "group relative inline-flex max-w-full gap-x-3 overflow-hidden rounded-md px-3.5 py-2 text-sm/6 max-sm:flex-col sm:items-center sm:rounded-full sm:px-3 sm:py-0.5",
        variant === "normal" &&
          "bg-mist-950/5 text-mist-950 dark:bg-white/5 dark:text-white dark:inset-ring-1 dark:inset-ring-white/5",
        variant === "overlay" &&
          "bg-mist-950/15 text-white dark:bg-mist-950/20",
        className,
      )}
    >
      <span className="text-pretty sm:truncate">{text}</span>
    </div>
  );
}
