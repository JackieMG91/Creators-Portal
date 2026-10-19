import { cookies } from "next/headers";

// Reads the questionnaire answers saved at signup (swap for an API call later)
export async function getAnswers() {
  const jar = await cookies();
  const raw = jar.get("onboarding")?.value;
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}