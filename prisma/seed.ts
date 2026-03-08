import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Hash passwords
  const adminPassword = await bcrypt.hash("admin@track.com", 12);
  const issamPassword = await bcrypt.hash("ISS@2026", 12);

  // Create/update admin user
  const admin = await prisma.user.upsert({
    where: { email: "admin@track.com" },
    update: {
      password: adminPassword,
      name: "Admin",
    },
    create: {
      email: "admin@track.com",
      password: adminPassword,
      name: "Admin",
    },
  });

  // Create/update issam user
  const issam = await prisma.user.upsert({
    where: { email: "issam@track.com" },
    update: {
      password: issamPassword,
      name: "Issam",
    },
    create: {
      email: "issam@track.com",
      password: issamPassword,
      name: "Issam",
    },
  });

  console.log("Created/updated users:");
  console.log(`  - admin@track.com (ID: ${admin.id})`);
  console.log(`  - issam@track.com (ID: ${issam.id})`);

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
