import { cookies } from "next/headers";

export function unlockCookieName(slug: string) {
  return `case-study-unlock-${slug}`;
}

export function passwordEnvVar(slug: string) {
  return `CASE_STUDY_PASSWORD_${slug.toUpperCase().replace(/-/g, "_")}`;
}

export async function isCaseStudyUnlocked(slug: string) {
  const cookieStore = await cookies();
  return cookieStore.get(unlockCookieName(slug))?.value === "1";
}
