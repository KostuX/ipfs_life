export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "IPFS Gateway",

  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Upload",
      href: "/upload",
    },
    {
      label: "Public Wall",
      href: "/pWall",
    },

    {
      label: "Media",
      href: "/media",
    },
  ],

  adminNavItems: [
    {
      label: "History",
      href: "/history",
    },
    {
      label: "Stats",
      href: "/stats",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Upload",
      href: "/upload",
    },
    {
      label: "Public Wall",
      href: "/pWall",
    },

    {
      label: "Media",
      href: "/media",
    },
  ],
  links: {
    docs: "http://ip-fs.cloud/",
  },
};
