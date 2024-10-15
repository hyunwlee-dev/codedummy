import { info } from '@constants/info';

type WithAuthCallback<T> = (options: Partial<RequestInit>) => Promise<T>;

export async function withAuth<T>(callback: WithAuthCallback<T>) {
  return callback({
    headers: {
      Authorization: `Bearer ${info.github.accessToken}`,
    },
  });
}
