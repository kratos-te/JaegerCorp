import NextAuth from "next-auth";
import TwitterProvider from 'next-auth/providers/twitter';


export default NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        // OAuth authentication providers
        TwitterProvider({
            clientId: process.env.TWITTER_CONSUMER_KEY,
            clientSecret: process.env.TWITTER_CONSUMER_SECRET,
        }),
    ],
    callbacks: {
        async signIn(user, account, profile) {
            console.log("===> sigin data")
            console.dir({ user, account, profile }, { depth: null })
            return true
        },
        async session(session, user) {
            console.log("===> session data")
            console.dir({ session, user }, { depth: null })
            // user.image = user.picture;
            // user.email = user.id;
            // user.name = user.name;
            let token = session.token;
            while (token.token !== undefined) token = token.token;
            console.log("token", token)
            session.user = {
                name: token.name,
                image: token.picture,
            };
            return session;
        },
        async jwt(token, user, account, profile, isNewUsers) {
            console.log("===> jwt data")
            console.dir({ token, user, account, profile }, { depth: null })

            if (user) {
                token.id = user.id
            }
            if (account) {
                token.twitter = account;
            }

            return token
        }

    }
})