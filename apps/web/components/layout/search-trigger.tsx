"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { cn } from "@hobblitt/ui/lib/utils";
import { IconButton } from "@/components/ui/icon-button";

/**
 * Masthead search. Expands an inline archive-search field beneath the
 * masthead rather than covering the page with a modal.
 */
export function SearchTrigger({ className }: { className?: string }) {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const router = useRouter();

  React.useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    setOpen(false);
  }

  return (
    <>
      <IconButton
        className={className}
        aria-expanded={open}
        aria-controls="masthead-search"
        aria-label={open ? "Close search" : "Search the archive"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? (
          <X className="size-5" aria-hidden="true" />
        ) : (
          <Search className="size-5" aria-hidden="true" />
        )}
      </IconButton>

      <form
        id="masthead-search"
        role="search"
        onSubmit={onSubmit}
        hidden={!open}
        className={cn(
          "order-last mt-4 flex w-full items-center gap-3 border-2 border-ink bg-paper-bright px-4 py-3",
        )}
      >
        <Search className="size-4 shrink-0 text-ink-muted" aria-hidden="true" />
        <label className="sr-only" htmlFor="masthead-search-input">
          Search the archive
        </label>
        <input
          id="masthead-search-input"
          ref={inputRef}
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="SEARCH THE ARCHIVE..."
          className={cn(
            "w-full bg-transparent font-stamp text-stamp uppercase text-ink",
            "placeholder:text-ink-faint focus:outline-none",
          )}
        />
        <button
          type="submit"
          className="border-2 border-ink bg-ink px-3 py-1.5 font-stamp text-stamp uppercase text-paper transition-colors hover:bg-highlight hover:text-highlight-ink"
        >
          Go
        </button>
      </form>
    </>
  );
}
