import { User } from "../entities/user";

export interface UserRepository {
  create(user: User): Promise<User>;
  update(user: User): Promise<User>;
  findById(id: number): Promise<User>;
}
