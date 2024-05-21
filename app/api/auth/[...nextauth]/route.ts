
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'
import NextAuth from "next-auth/next"
import { withIronSessionApiRoute } from "iron-session/next";
import { ironOptions } from "@/pages/api/session/session_config";

import { NextAuthOptions, User, getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
const clientId= process.env.GOOGLE_CLIENT_ID
const clientSecret= process.env.GOOGLE_CLIENT_SECRET
import { redirect, useRouter } from "next/navigation";
import {authOptions} from '@/lib/auth'





  const handler = NextAuth(authOptions)
  export { handler as GET,handler as POST}