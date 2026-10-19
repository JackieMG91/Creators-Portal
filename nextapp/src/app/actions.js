"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function startSession() {
  if (process.env.NODE_ENV === "production") {
    throw new Error("Placeholder auth must be replaced before production.");
  }
  const jar = await cookies();
  jar.set("session", "dev-session", {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
}

export async function login(formData) {
  // TODO: call the Laravel login endpoint with formData.get("email") / "password"
  await startSession();
  redirect("/dashboard");
}

export async function signup(formData) {
  // TODO: call the Laravel register endpoint
  await startSession();
  redirect("/questionnaire");
}

export async function saveQuestionnaire(answers) {
  // TODO: send answers to Laravel so they can drive the plan recommendation
  const jar = await cookies();
  jar.set("onboarding", JSON.stringify(answers), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
  redirect("/dashboard");
}

export async function logout() {
  const jar = await cookies();
  jar.delete("session");
  redirect("/");
}