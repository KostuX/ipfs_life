export const ironOptions = {
  cookieName: "ipfs_cookie",
  password: "7IkDqh^Ks4z@&wZK1qm8f0DZIEbcAY1MkDR", //process.env.SESSION_KEY,

  cookieOptions: {
    secure: process.env.NODE_ENV === "production",

    maxAge: 36000,
  },
};
