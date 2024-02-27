import NextAuth from "next-auth";
import TwitterProvider from "next-auth/providers/twitter";

export default NextAuth({
  providers: [
    TwitterProvider({      
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
  ],
//   callbacks: {   
//     async jwt({ token, account, profile, session }) {
//       console.log("token", token);
//       console.log("profile",profile);
//       console.log("account", account);
//       console.log("session", session);
//       if (account) {
//         if (account.provider === 'twitter') {
//           token["userProfile"] = {
//             twitterHandle: profile.name,
//             userID: profile.id,
//           };
//         }

//         token["credentials"] = {
//           accessToken: account.provider ==='twitter' ? account.oauth_token : account.access_token,
//           refreshToken: account.provider ==='twitter' ? account.oauth_token_secret: account.refresh_token,
//         };
//       }
//       if (!token.credentials.accessToken || !token.credentials.refreshToken) {
//         token.userProfile = {};
//         token.credentials = {};
//       }
//       return token;
//     },
//   },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    error: "/", // Error code passed in query string as ?error=
  },
});