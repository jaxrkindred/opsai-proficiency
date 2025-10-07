import NextAuth, { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";

export const authOptions: NextAuthOptions = {
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER || "smtp://dummy:dummy@smtp.example.com:587",
      from: process.env.EMAIL_FROM || "OpsAI Proficiency <noreply@example.com>",
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET || "dummy-secret-for-demo",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };


