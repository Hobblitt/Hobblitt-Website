import type { SummonFormValues } from "@/lib/summon-form";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

export type SummonApiResult =
  | {
      ok: true;
      message: string;
      lead: {
        id: string;
        createdAt: string;
      };
    }
  | {
      ok: false;
      message: string;
      errors?: Record<string, string>;
    };

export async function submitSummonLead(
  values: SummonFormValues,
): Promise<SummonApiResult> {
  try {
    const response = await fetch(`${API_URL}/api/summon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      return {
        ok: false,
        message:
          data?.message ??
          "Something went wrong on our end. Please try again or email us directly.",
        errors: data?.errors,
      };
    }

    return {
      ok: true,
      message: data?.message ?? "Lead received successfully.",
      lead: data.lead,
    };
  } catch {
    return {
      ok: false,
      message:
        "Couldn't reach the server. Check your connection and try again.",
    };
  }
}
