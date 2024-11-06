import {
  NavbarContent,
  NavbarItem,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Dropdown,
  DropdownTrigger,
  Avatar,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react";
import React, { useState } from "react";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  GithubSignInButton,
  GoogleSignInButton,
} from "@/components/navbar/content/OAuth/authButtons";

export function ButtonsContent(props) {
  let user_session = props.user_session;
  const [errMsg, setErrMsg] = useState([]);
  const [registerInput, setRegisterInput] = useState({});
  const [visible_Login, setVisible_Login] = React.useState(false);
  const handler_Login = () => setVisible_Login(true);
  const closeHandler_Login = () => {
    setVisible_Login(false);
    setErrMsg([]);
  };

  const [visible_Reg, setVisible_Reg] = React.useState(false);
  const handler_Reg = () => setVisible_Reg(true);
  const closeHandler_Reg = () => {
    setVisible_Reg(false);
    setErrMsg([]);
  };

  function userButtons(user) {
    if (user) {
      return (
        <div>
          <div className="flex items-center gap-4">
            <Dropdown placement="bottom-start">
              <DropdownTrigger>
                <User
                  as="button"
                  avatarProps={{
                    src: user.image,
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
                  <p className="font-bold">{user.name}</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>

                <DropdownItem key="logout" withDivider color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>

          {}
        </div>
      );
    } else {
      return (
        <NavbarItem className="hidden md:flex">
          <Button size="sm" onPress={handler_Login}>
            Log in
          </Button>
          <Modal
            isOpen={visible_Login}
            onOpenChange={closeHandler_Login}
            placement="top-center"
            backdrop="blur"
          >
            <ModalContent>
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Log in
                </ModalHeader>
                <ModalBody>
                  <GoogleSignInButton />
                  <GithubSignInButton />
                  <div>OR</div>
                  <Input
                    autoFocus
                    label="Username"
                    placeholder="Enter your username"
                    variant="bordered"
                    isClearable
                    onChange={(e) => {
                      setLoginInput((x) => ({
                        ...x,
                        username: validator.clean(e.target.value),
                      }));
                    }}
                  />
                  <Input
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    variant="bordered"
                    onChange={(e) => {
                      setLoginInput((x) => ({
                        ...x,
                        password: validator.clean(e.target.value),
                      }));
                    }}
                  />

                  <div style={{ color: "red" }}>
                    {errMsg.map((item, index) => (
                      <div key={index}>{item}</div>
                    ))}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="danger"
                    variant="flat"
                    onPress={closeHandler_Login}
                  >
                    Close
                  </Button>
                  <Button color="primary" onPress={handleLogin}>
                    Log in
                  </Button>
                </ModalFooter>
              </>
            </ModalContent>
          </Modal>

          <Button size="sm" onClick={handler_Reg} variant="ghost">
            Register
          </Button>
          <Modal
            aria-labelledby="modal-title_Reg"
            isOpen={visible_Reg}
            onClose={closeHandler_Reg}
            placement="top-center"
            backdrop="blur"
          >
            <ModalContent>
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Register
                </ModalHeader>
                <ModalBody>
                  <Input
                    autoFocus
                    label="Username"
                    placeholder="Enter username"
                    variant="bordered"
                    onChange={(e) => {
                      setRegisterInput((x) => ({
                        ...x,
                        username: validator.clean(e.target.value),
                      }));
                    }}
                    minLength="2"
                    maxLength="64"
                    isClearable
                  />
                  <Input
                    label="Email"
                    placeholder="Enter your email"
                    variant="bordered"
                    onChange={(e) => {
                      setRegisterInput((x) => ({
                        ...x,
                        email: validator.clean(e.target.value),
                      }));
                    }}
                    minLength="2"
                    maxLength="64"
                    pattern="[a-z0-9\@]{1,20}"
                  />
                  <Input
                    color={
                      registerInput.password == registerInput.password_r
                        ? "success"
                        : "danger"
                    }
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                    variant="bordered"
                    onChange={(e) => {
                      setRegisterInput((x) => ({
                        ...x,
                        password: validator.clean(e.target.value),
                      }));
                    }}
                    minLength="2"
                    maxLength="64"
                  />
                  <Input
                    color={
                      registerInput.password == registerInput.password_r
                        ? "success"
                        : "danger"
                    }
                    label="Password"
                    placeholder="Repeat your password"
                    type="password"
                    variant="bordered"
                    onChange={(e) => {
                      setRegisterInput((x) => ({
                        ...x,
                        password_r: validator.clean(e.target.value),
                      }));
                    }}
                    minLength="2"
                    maxLength="64"
                  />
                  <div style={{ color: "red" }}>
                    {errMsg.map((item, index) => (
                      <div key={index}>{item}</div>
                    ))}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="danger"
                    variant="flat"
                    onClick={closeHandler_Reg}
                  >
                    Close
                  </Button>
                  <Button color="primary" onPress={handleRegister}>
                    Register
                  </Button>
                </ModalFooter>
              </>
            </ModalContent>
          </Modal>
        </NavbarItem>
      );
    }
  }
  const handleRegister = async (e) => {
    let err = [];
    let password = registerInput.password;
    let password_r = registerInput.password_r;
    let username = registerInput.username;
    let email = registerInput.email;

    let valid_pass = validator.text(password, 6, 64, "Password", true).err;
    let valid_username = validator.text(username, 4, 64, "Username", true).err;
    let valid_email = validator.isEmail(email).err;

    err = err.concat(valid_pass).concat(valid_username).concat(valid_email);

    if (!(password === password_r)) {
      err.push("Password Missmatch");
    }

    if (err.length > 0) {
      setErrMsg(err);
    } else {
      setErrMsg([]);

      let data = {};
      data.username = username;
      data.email = email;
      data.password = password;

      let endpoint = "api/registerAPI";
      let response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({ data: data }),
        headers: { "Content-type": "application/json;charset=utf-8" },
      });

      let res = await response.json();

      if (res.ok) {
        router.push(window.location.href);
        //setVisible_Reg(false)
      } else {
        setErrMsg(res.data);
      }
    }
  };

  const handleLogin = async (e) => {
    let err = [];
    let password = loginInput.password;
    let username = loginInput.username;

    let valid_username = validator.text(username, 4, 64, "Username", true).err;
    let valid_pass = validator.text(password, 6, 64, "Password", true).err;

    err = err.concat(valid_pass).concat(valid_username);

    if (err.length > 0) {
      setErrMsg(err);
    } else {
      setErrMsg([]);

      let data = {};
      data.username = username;
      data.password = password;

      let endpoint = "api/loginAPI";

      let response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({ data: data }),
        headers: { "Content-type": "application/json;charset=utf-8" },
      });

      let res = await response.json();

      if (res.ok) {
        //	window.location.reload();
        router.push(window.location.href);
      } else {
        setErrMsg([res.data]);
      }
    }
  };

  return (
    <NavbarContent
      className="hidden sm:flex basis-1/5 sm:basis-full"
      justify="end"
    >
      {userButtons(user_session)}
      <NavbarItem className="hidden sm:flex gap-2">
        <ThemeSwitch />
      </NavbarItem>
    </NavbarContent>
  );
}
