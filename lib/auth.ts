// @ts-nocheck
import { NextAuthOptions, User, getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
const bcrypt = require("bcrypt");
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

const getUser = require("@/pages/api/database/queries/getUserFromEmail");
const getKeys = require("@/pages/api/database/queries/getUserKeys");
const  addUser_db =  require('@/pages/api/database/queries/createUser')
//const userInit = require("../pages/api/classes/newUserInit");

import cryptoRandomString from 'crypto-random-string';

const clientId_google= process.env.GOOGLE_CLIENT_ID
const clientSecret_google= process.env.GOOGLE_CLIENT_SECRET

const clientId_git= process.env.GITHUB_CLIENT_ID
const clientSecret_git= process.env.GITHUB_CLIENT_SECRET

export const authOptions: NextAuthOptions = {
   
  providers: [          
    GoogleProvider({
      clientId: clientId_google as string,
      clientSecret: clientSecret_google as string,
      
    }),
    GithubProvider({
      clientId: clientId_git as string,
      clientSecret: clientSecret_git as string,
    })
  ],
  callbacks:{
      async signIn({user, account, profile}){
        
        

       
        let user_id = ''
       let user_name = ''
       let user_email = ''
      let  avatar = ''
        if(account){
       
         
         
        /*
          if(account.provider == 'github'){
            if(profile?.providerAccountId){
              user_id = profile?.providerAccountId
            }

            if(profile?.login){
              user_name = profile?.login
            }
            if(profile?.email){
              user_email = profile?.email
            }
            if(profile?.avatar_url){
              avatar = profile?.avatar_url
            }             
            
          }
          if(account.provider == 'google'){
            if(profile?.providerAccountId){
              user_id = profile?.providerAccountId
            }
            if(profile?.given_name){
              user_name = profile?.given_name
            }
            if(profile?.email){
              user_email = profile?.email
            }
            if(profile?.picture){
              avatar = profile?.picture
            }  
          }
         */
        }

    
          return true
      },
      session: async ({ session, token }) => {

        
        
        let user = await getUser(session.user.email);

        if(user.rowCount>0){        
        let keys = await getKeys(user.rows[0], () => {});
        session.user.user_id = user.rows[0].user_id
        session.keys = keys.rows;
        }
        else{
          let password = cryptoRandomString({length: 32})
          let pass = bcrypt.hashSync(password, 5)
          
          //await addUser_db(session.user.name, session.user.email, pass, async (resp) => {   console.log(resp)  });

          let data = {};
			data.username = session.user.name
			data.email = session.user.email
			data.password = pass

      let endpoint = "http://localhost:18888/api/registerAPI"
			let response = await fetch(endpoint, {
			  method: "POST",
			  body: JSON.stringify( {data: data}),
			  headers: { "Content-type": "application/json;charset=utf-8" },
			});

			let res = await response.json();
         // await userInit(session.user);
        }
       

        
        
        return session
      },

      
      
  },
  
  
};

export async function loginIsRequiredServer() {
  const session = await getServerSession(authOptions);


  if (!session) return redirect("/");
}
/*
export function loginIsRequiredClient() {
 
  if (typeof window !== "undefined") {
    //const session = useSession();
    //const router = useRouter();
    if (!session) router.push("/");
  }
}
*/
