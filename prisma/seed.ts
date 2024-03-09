import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt-ts";

const prisma = new PrismaClient();

const admin = [
  {
    username: "admin",
    password: "gerakinklusif24",
  },
];

const mahasiswa = [
  {
    nim: "13122080",
    token: "AS67DD",
  },
  {
    nim: "13122081",
    token: "AS2162",
  },
  {
    nim: "13122082",
    token: "123SAD",
  },
]

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

  const mahasiswas = await prisma.mahasiswa.findMany();
  if (mahasiswas.length > 0) {
    mahasiswas.forEach(async (mahasiswa) => {
      await prisma.mahasiswa.delete({
        where: {
          id: mahasiswa.id,
        },
      });
    });
  }
  mahasiswa.forEach(async (mahasiswa) => {
    await prisma.mahasiswa.create({
      data: {
        nim: mahasiswa.nim,
        token: mahasiswa.token,
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
