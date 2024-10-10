import type { UserType } from "@/types/github";

export async function getUserInfo(
  owner: string,
  fetchOptions: RequestInit = {},
) {
  return (await fetch(`https://api.github.com/users/${owner}`, {
    headers: {
      "Content-Type": "application/json",
      ...fetchOptions.headers,
      cache: "no-store",
    },
    ...fetchOptions,
  }).then((data) => data.json())) as UserType;
}
