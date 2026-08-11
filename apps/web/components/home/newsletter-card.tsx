"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@hobblitt/ui/lib/utils";
import { panelStyles } from "@/components/ui/panel";
import { newsletter } from "@/content/front-page";

type Status = "idle" | "submitting" | "success" | "error";

/**
 * Newsletter sign-up.
 *
 * TODO: point `subscribe()` at the real list provider (a Route Handler at
 * `app/api/subscribe/route.ts` or a Server Action). The optimistic UI and
 * validation below are already wired for it.
 */
async function subscribe(email: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 600));
  if (!email.includes("@")) throw new Error("Invalid address");
}

export function NewsletterCard({ className }: { className?: string }) {
  const [status, setStatus] = React.useState<Status>("idle");
  const [message, setMessage] = React.useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = String(new FormData(form).get("email") ?? "").trim();

    if (!email) {
      setStatus("error");
      setMessage("An address is required to run the presses.");
      return;
    }

    setStatus("submitting");

    try {
      await subscribe(email);
      setStatus("success");
      setMessage("You're on the list. First dispatch ships Monday.");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("That address didn't take. Try again.");
    }
  }

  return (
    <div
      className={cn(
        panelStyles({ tone: "newsprint", shadow: "md" }),
        "p-6",
        className,
      )}
    >
      {/* Speech-bubble callout with an ink tail. */}
      <p
        className={cn(
          "absolute -top-10 end-4 border-2 border-ink bg-paper px-4 py-2 font-stamp text-stamp uppercase",
          "after:absolute after:-bottom-[10px] after:end-6 after:border-l-[10px] after:border-r-[10px] after:border-t-[10px]",
          "after:border-l-transparent after:border-r-transparent after:border-t-ink after:content-['']",
        )}
      >
        {newsletter.callout}
      </p>

      <h3 className="text-center font-display text-subtitle uppercase">
        {newsletter.title}
      </h3>
      <div className="mx-auto mb-4 mt-2 w-1/2 border-b-2 border-ink" />
      <p className="mb-6 text-center font-serif text-copy italic text-ink-muted">
        {newsletter.blurb}
      </p>

      <form onSubmit={onSubmit} className="relative z-10 flex flex-col gap-4">
        <div>
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            aria-invalid={status === "error"}
            aria-describedby={message ? "newsletter-status" : undefined}
            placeholder={newsletter.placeholder}
            className={cn(
              "w-full border-0 border-b-4 border-ink bg-transparent px-0 py-2",
              "font-stamp text-stamp uppercase text-ink placeholder:text-ink-faint",
              "transition-colors focus:border-highlight-dim focus:outline-none",
            )}
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className={cn(
            "inline-flex w-full items-center justify-center gap-2 border-2 border-ink bg-ink py-4",
            "font-stamp text-stamp uppercase text-paper shadow-ink",
            "transition-[transform,box-shadow,background-color] duration-150 ease-out",
            "hover:translate-x-1 hover:translate-y-1 hover:bg-highlight hover:text-highlight-ink hover:shadow-none",
            "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
            "disabled:pointer-events-none disabled:opacity-70",
          )}
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Setting type...
            </>
          ) : (
            newsletter.submitLabel
          )}
        </button>

        <p
          id="newsletter-status"
          role="status"
          aria-live="polite"
          className={cn(
            "min-h-[1rem] font-stamp text-stamp uppercase",
            status === "error" ? "text-destructive" : "text-ink-muted",
          )}
        >
          {message}
        </p>
      </form>

      <div
        className="pointer-events-none absolute inset-0 halftone opacity-10"
        aria-hidden="true"
      />
    </div>
  );
}
