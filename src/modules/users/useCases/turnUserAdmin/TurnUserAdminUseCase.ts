import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    const userFound = this.usersRepository.findById(user_id);
    if (!userFound) {
      throw new Error("User not found!");
    }
    userFound.admin = true;

    return userFound;
  }
}

export { TurnUserAdminUseCase };
