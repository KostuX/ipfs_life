// @ts-nocheck
import Image from "next/image";
import googleLogo from "@/public/google.png";
import githubLogo from "@/public/github.png";
import { useSession, signOut } from "next-auth/react";
import { MenuItems } from "@/components/navbar/content/menuItems";
import { LogoContent } from "./content/logoContent";
import { MenuContent } from "@/components/navbar/content/menuContent";
import { ButtonsContent } from "@/components/navbar/content/buttonsContent";
import { SmMenuContent } from "@/components/navbar/content/smMenuContent";
import { UserContent } from "./content/user/userContent";
import {
  CredentialsSignInButton,
  GithubSignInButton,
  GoogleSignInButton,
} from "@/components/navbar/content/OAuth/authButtons";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

import { getCsrfToken } from "next-auth/react";

import { useRouter } from "next/router";

import {
  Button,
  Kbd,
  Link,
  Input,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Checkbox,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react";
//var validator = require('validator');
import React, { useState } from "react";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";

import { Logo } from "@/components/icons";

import myValidator from "../../pages/api/classes/myValidator";
import Google from "next-auth/providers/google";

export const Navbar = (session) => {
  const validator = new myValidator();
  const router = useRouter();

  const user_session = session?.session?.user;


  return (
    <NextUINavbar isBordered maxWidth="xl" position="sticky">
      <LogoContent />
      <MenuContent user_session={user_session} />
      <ButtonsContent user_session={user_session} />

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">

        <NavbarMenuToggle />
        {user_session && <UserContent user={user_session} />}

        <ThemeSwitch />

      </NavbarContent>

      <SmMenuContent user_session={user_session} />
    </NextUINavbar>
  );
};
