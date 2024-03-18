import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';

export default NextAuth({
  providers: [
    EmailProvider({
      // Konfiguriere deinen E-Mail-Provider
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      const allowedDomains = ['iu-study.org', 'iubh-fernstudium.de'];
      if (user.email) {
        const domain = user.email.split('@')[1]; // Teilt die E-Mail-Adresse am @ und nimmt den Domain-Teil
        if (allowedDomains.includes(domain)) {
          return true; // Erlaubt die Anmeldung
        }
      }
      return false; // Verweigert die Anmeldung, wenn die Domain nicht übereinstimmt
    },
  },
})