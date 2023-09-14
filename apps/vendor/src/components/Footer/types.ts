export type LinkT = {
  name: string;
  path: string;
};

export type FooterLinkT = {
  title: string;
  links: {
    name: string;
    path: string;
  }[];
};
export type FooterLinkPropsT = {
  footerLinks: FooterLinkT[];
};
