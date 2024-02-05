import { string, z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";


export const voteRouter = createTRPCRouter({
    create: protectedProcedure.input(z.string()).mutation(async({ctx, input})=>{
        return ctx.db.vote.create({
            data: {
                NIM: ctx.session.user.nim,
                calonK3MId: input,
                calonMWAWMId: input
            }
        })
    })
})