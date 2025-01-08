import { NavbarContent, NavbarItem } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { IsAdmin } from "@/lib/isAdmin";
import { IsLoggedIn } from "@/lib/isLoggedIn";

export function MenuContent(props) {
  function adminPanel() {
    if (IsAdmin()) {
      return siteConfig.adminNavItems.map((item) => (
        <NavbarItem key={item.href}>
          <NextLink href={item.href}>{item.label}</NextLink>
        </NavbarItem>
      ));
    }
  }

  function userPanel(props) {
    if (IsLoggedIn(props)) {
      return siteConfig.userNavItems.map((item) => (
        <NavbarItem key={item.href}>
          <NextLink href={item.href}>{item.label}</NextLink>
        </NavbarItem>
      ));
    }
  }

  return (
    <>
      <NavbarContent justify="center" className="hidden sm:flex">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <NextLink href={item.href}>{item.label}</NextLink>
          </NavbarItem>
        ))}

        {userPanel(props)}
        {adminPanel(props)}
      </NavbarContent>
    </>
  );
}
