import { PrismaClient, DomainTag, QuestionType, Role } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const org = await prisma.org.upsert({
    where: { name: "Kindred Facilities" },
    update: {},
    create: { name: "Kindred Facilities" },
  });

  const assessment = await prisma.assessment.upsert({
    where: { title: "OpsAI Proficiency — Official" },
    update: {},
    create: {
      title: "OpsAI Proficiency — Official",
      description: "40-question assessment across AI domains for operations.",
      isOfficial: true,
    },
  });

  // Seed a few example questions; full seed would include 40
  const seedQuestions = [
    {
      order: 1,
      prompt: "Which AI technique is best for predicting asset failures?",
      type: QuestionType.multiple_choice,
      domain: DomainTag.predictive_maintenance,
      content: {
        choices: ["Clustering", "Time-series forecasting", "Rule-based systems", "Reinforcement learning"],
        correct: 1,
      },
      weight: 1,
    },
    {
      order: 2,
      prompt: "Select valid best practices for prompt engineering in CMMS triage.",
      type: QuestionType.multi_select,
      domain: DomainTag.prompt_engineering,
      content: {
        choices: [
          "Provide structured examples",
          "Avoid schema",
          "Specify output format",
          "Use vague language",
        ],
        correct: [0, 2],
      },
      weight: 1,
    },
  ];

  for (const q of seedQuestions) {
    await prisma.question.upsert({
      where: { assessmentId_order: { assessmentId: assessment.id, order: q.order } },
      update: {},
      create: { ...q, assessmentId: assessment.id },
    });
  }

  // Demo users
  const users = await Promise.all(
    Array.from({ length: 5 }).map((_, i) =>
      prisma.user.upsert({
        where: { email: `demo${i + 1}@kindredfacilities.com` },
        update: {},
        create: { email: `demo${i + 1}@kindredfacilities.com`, name: `Demo User ${i + 1}` },
      })
    )
  );

  // Memberships
  await prisma.membership.upsert({
    where: { userId_orgId: { userId: users[0].id, orgId: org.id } },
    update: {},
    create: { userId: users[0].id, orgId: org.id, role: Role.owner },
  });
  for (const u of users.slice(1)) {
    await prisma.membership.upsert({
      where: { userId_orgId: { userId: u.id, orgId: org.id } },
      update: {},
      create: { userId: u.id, orgId: org.id, role: Role.member },
    });
  }

  console.log("Seed complete");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


