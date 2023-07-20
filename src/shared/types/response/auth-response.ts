import { IUser } from "../user-type";

export interface AuthResponse {
  refreshToken: string;
  accessToken: string;
  user: IUser;
}
