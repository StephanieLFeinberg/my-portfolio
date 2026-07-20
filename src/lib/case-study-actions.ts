"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { passwordEnvVar, unlockCookieName } from "@/lib/case-study-access";

const UNLOCK_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export async function unlockCaseStudy(formData: FormData) {
  const slug = String(formData.get("slug") ?? "");
  const password = String(formData.get("password") ?? "");

  if (!slug) {
    redirect("/work");
  }

  const expectedPassword = process.env[passwordEnvVar(slug)];

  if (!expectedPassword || password !== expectedPassword) {
    redirect(`/work/${slug}?error=1`);
  }

  const cookieStore = await cookies();
  cookieStore.set(unlockCookieName(slug), "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: UNLOCK_MAX_AGE,
  });

  redirect(`/work/${slug}`);
}
