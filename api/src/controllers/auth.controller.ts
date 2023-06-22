import { Request, Response } from "express";
import { CreateUserInput, LoginUserInput } from "../shared/types/models";
import * as bcrypt from "bcryptjs";
import authService from "../domain/services/auth.service";
import { TokenPayload } from "../shared/types/common";
import * as jwt from "jsonwebtoken";
import { EXPIRES, JWT_SECRET } from "../shared/core/config";

const registerController = async (req: Request, res: Response) => {
  const { email, fullname, userType }: CreateUserInput = req.body;
  const password: string = bcrypt.hashSync(req.body.password, 10);
  const createUser = await authService.registerService({
    email,
    fullname,
    password,
    userType,
  });
  return res.status(200).json({
    user: createUser,
  });
};

const loginController = async (req: Request, res: Response) => {
  const { email, password }: LoginUserInput = req.body;
  const user = await authService.findByEmail(email);
  if (!user) {
    return res.status(400).json({ message: "Login failed!" });
  }
  const isMatch: boolean = bcrypt.compareSync(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Login failed!" });
  }
  const { _id }: any = user;
  const tokenPayload: TokenPayload = {
    id: _id,
  };
  const token: string = jwt.sign(tokenPayload, JWT_SECRET!!, {
    expiresIn: EXPIRES!!,
  });
  return res.status(200).json({ user, token });
};

export { registerController, loginController };

