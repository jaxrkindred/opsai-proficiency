import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";

const handler = NextAuth({
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER || "smtp://dummy:dummy@smtp.example.com:587",
      from: process.env.EMAIL_FROM || "OpsAI Proficiency <noreply@example.com>",
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET || "dummy-secret-for-demo",
});

export { handler as GET, handler as POST };


