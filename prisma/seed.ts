import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt-ts";

const prisma = new PrismaClient();

const admin = [
  {
    username: "admin",
    password: "gerakinklusif24",
  },
];

async function main() {
  const admins = await prisma.admin.findMany();
  if (admins.length > 0) {
    admins.forEach(async (admin) => {
      await prisma.admin.delete({
        where: {
          id: admin.id,
        },
      });
    });
  }
  admin.forEach(async (admin) => {
    await prisma.admin.create({
      data: {
        username: admin.username,
        passwordHash: await hash(admin.password, 10),
      },
    });
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
