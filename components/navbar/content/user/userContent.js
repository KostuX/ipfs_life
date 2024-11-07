import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
export const UserContent = (prop) => {
  const router = useRouter();

  let user = prop.user;

  const handleSelect = async (e) => {
    if (e == "logout") {
      const response = await fetch("../api/session/session_logout");
      const result = await response.json();
      await signOut({ callbackUrl: "/" });

      if (result.ok) {
        router.push("/");
      }
    } else if (e == "settings") {
      router.push("/settings");
    }
  };

  return (
    <>
      <div className=" gap-4 ">
        <Dropdown placement="bottom-ends">
          <DropdownTrigger>
            <User
              as="button"
              name={user?.name}
              description={user.email}
              avatarProps={{
                src: user?.image,
              }}
            />
          </DropdownTrigger>
          <DropdownMenu
            aria-label="User Actions"
            variant="flat"
            onAction={(actionKey) => {
              handleSelect(actionKey);
            }}
          >
            <DropdownItem
              key="profile"
              className="h-14 gap-2"
              textValue="textValue"
            >
              <p className="font-bold">Signed in as</p>
              <p className="font-bold">{user?.name}</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>

            <DropdownItem key="logout" withDivider color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      {/*}
      <div className="flex items-center gap-4">
        <Dropdown placement="bottom-start">
          <DropdownTrigger>
            <User
              as="button"
              avatarProps={{
                src: user?.image,
              }}
            />
          </DropdownTrigger>
          <DropdownMenu
            aria-label="User Actions"
            variant="flat"
            onAction={(actionKey) => {
              handleSelect(actionKey);
            }}
          >
            <DropdownItem
              key="profile"
              className="h-14 gap-2"
              textValue="textValue"
            >
              <p className="font-bold">Signed in as</p>
              <p className="font-bold">{user?.name}</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>

            <DropdownItem key="logout" withDivider color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      {*/}
    </>
  );
};
