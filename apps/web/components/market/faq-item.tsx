import type { Faq } from "@/content/market";

/**
 * A reader's letter and the editor's reply.
 *
 * The question sits in a `speech-bubble` (the shared utility in
 * `globals.css`, which draws the ink tail); the answer runs beneath it,
 * indented behind a column rule like a printed response.
 */
export function FaqItem({ faq }: { faq: Faq }) {
  return (
    <div className="flex flex-col">
      <div className="speech-bubble mb-6 p-4 shadow-ink">
        <h3 className="font-display text-subtitle text-ink">
          &ldquo;{faq.question}&rdquo;
        </h3>
      </div>

      <p className="ms-8 border-s-2 border-ink ps-4 font-serif text-copy text-ink-soft">
        <strong className="font-display uppercase">Editor&rsquo;s note:</strong>{" "}
        {faq.answer}
      </p>
    </div>
  );
}
