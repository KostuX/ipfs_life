import { NavbarContent, NavbarItem } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import { IsAdmin } from "@/lib/isAdmin";

export function MenuContent(props) {
  function adminPanle() {
    if (IsAdmin()) {
      return siteConfig.adminNavItems.map((item) => (
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

        {adminPanle(props)}
      </NavbarContent>
    </>
  );
}
