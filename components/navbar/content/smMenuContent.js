import { NavbarMenu } from "@nextui-org/react";
import { MenuItems } from "@/components/navbar/content/menuItems";
import { OAuth } from "@/components/navbar/content/OAuth/OAuth";
import { User } from "@/components/navbar/content/user/user";
export const SmMenuContent = (props) => {
  let loggedIn = props?.user_session;
  return (
    <NavbarMenu>
      <div className=" flex flex-col gap-4  text-center   place-content-center">
        <MenuItems />
      </div>
      <div className=" mt-10  text-center px-10 place-content-center">
        {loggedIn ? (
          <User />
        ) : (
          <div>
            <OAuth />
          </div>
        )}
      </div>
    </NavbarMenu>
  );
};
