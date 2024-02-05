import { createTRPCRouter } from "~/server/api/trpc";
import { voteRouter } from "./router/voteTools";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    voteTools: voteRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
