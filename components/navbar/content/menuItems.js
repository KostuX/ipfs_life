import { Link, NavbarMenuItem } from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { IsLoggedIn } from "@/lib/isLoggedIn";
import { IsAdmin } from "@/lib/isAdmin";

export function MenuItems(prop) {
  let menuArray = siteConfig.navMenuItems;
  if (IsLoggedIn(prop.user_session)) {
    menuArray = menuArray.concat(siteConfig.userNavItems);
  }

  return (
    <>
      {menuArray.map((item, index) => (
        <NavbarMenuItem key={`${item}-${index}`}>
          <Link
            color={"foreground"}
            href={item.href}
            size="lg"
            className="text-justify text-center group transition-all duration-300 ease-in-out"
          >
            <p className="bg-left-bottom bg-gradient-to-r from-green-500 to-orange-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              {item.label}
            </p>
          </Link>
        </NavbarMenuItem>
      ))}
    </>
  );
}
