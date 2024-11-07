import { NavbarMenu } from "@nextui-org/react";
import { MenuItems } from "@/components/navbar/content/menuItems";
import { OAuth } from "@/components/navbar/content/OAuth/OAuth";
import { UserContent } from "@/components/navbar/content/user/userContent";
export const SmMenuContent = (props) => {
  let user_session = props?.user_session;

  return (
    <NavbarMenu>
      <div className=" flex flex-col gap-4  text-center   place-content-center">
        <MenuItems />
      </div>
      <div className=" mt-10  text-center px-10 place-content-center">
        {user_session ? (
          <UserContent user={user_session} />
        ) : (
          <div>
            <OAuth />
          </div>
        )}
      </div>
    </NavbarMenu>
  );
};
