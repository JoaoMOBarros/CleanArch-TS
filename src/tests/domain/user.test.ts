import { PlansType } from "../../domain/entities/enums/plans-type";
import { User, UserProps } from "../../domain/entities/user";

describe("Testing user entity", () => {
  test("constructor without reminders", () => {
    const userProps: UserProps = {
      name: "Joao",
      email: "joao@test.com",
      plan: PlansType.BASIC,
    };

    const user: User = new User(userProps);
    expect(user.props).toStrictEqual({ ...userProps, reminders: [] });
  });
});
