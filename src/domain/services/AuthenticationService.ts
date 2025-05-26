import { User, UserName } from "@/domain/model/user";

export interface AuthenticationService {
  auth(name: UserName, email: Email): Promise<User>;
}
