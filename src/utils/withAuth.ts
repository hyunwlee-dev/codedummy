import { info } from "@constants/info";

type WithAuthCallback = (options: Partial<RequestInit>) => Promise<any>;

export async function withAuth(callback: WithAuthCallback) {
  return callback({
    headers: {
      Authorization: `Bearer ${info.github.accessToken}`,
    },
  });
}
