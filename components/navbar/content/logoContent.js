import { NavbarContent, NavbarBrand } from "@nextui-org/react";

import NextLink from "next/link";
import { Logo } from "@/components/icons";

export function LogoContent() {
  return (
    <>
      {/*  
      ===================================================================
      Navbar LOGO
      ===================================================================
      */}
      <NavbarContent justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
      {/** end of logo */}
    </>
  );
}
