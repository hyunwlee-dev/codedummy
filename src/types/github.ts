import type { Endpoints } from "@octokit/types";

export type UserType = Endpoints["GET /users/{username}"]["response"]["data"];
