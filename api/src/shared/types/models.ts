export type CreateUserInput = {
  fullname: string;
  email: string;
  password: string;
  userType: string;
};

export type LoginUserInput = {
  email: string;
  password: string;
};

export type CreateWantedPosterInput = {
  title: string;
  description: string;
  phone: string;
  user: any;
};
