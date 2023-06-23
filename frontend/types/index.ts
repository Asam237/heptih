export type FooterLinkType = {
  icon: any;
  path: string;
};

export type FooterLinkConditionType = {
  name: string;
  path: string;
};

export type HeaderItemType = {
  name: string;
  path: string;
};

export type AuthLoginType = {
  email: string;
  password: string;
};

export type AuthCreateType = {
  fullname: string;
  email: string;
  password: string;
  userType: string;
};

export type ItemType = {
  icon: any;
  title: string;
  description: string;
};

export type WantedPosterType = {
  _id: any;
  title: string;
  description: string;
  phone: string;
  find: boolean;
  user?: string;
  date?: any
};
