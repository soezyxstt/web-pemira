import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const inputNimRouter = createTRPCRouter({
  createMahasiswa: protectedProcedure
    .input(z.object({ nim: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.mahasiswa.create({
        data: {
          NIM: input.nim,
          token: Math.random().toString(36).substring(7),
        },
      });
    }),

  getInfoMahasiswa: protectedProcedure
    .input(z.object({ nim: z.string() }))
    .query(async ({ ctx, input }) => {
      return await ctx.db.mahasiswa.findFirst({
        where: {
          NIM: input.nim,
        },
      });
    }),

  changeState: protectedProcedure
    .input(z.object({ nim: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.mahasiswa.update({
        where: {
          NIM: input.nim,
        },
        data: {
          state: true,
        },
      });
    }),

  changeToken: protectedProcedure
    .input(z.object({ nim: z.string() }))
    .mutation(({ ctx, input }) => {
      return ctx.db.mahasiswa.update({
        where: {
          NIM: input.nim,
        },
        data: {
          token: Math.random().toString(36).substring(7),
        },
      });
    }),
});
