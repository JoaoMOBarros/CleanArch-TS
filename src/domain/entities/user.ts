import { PlansType } from "./enums/plans-type";

export type UserProps = {
  name: string;
  email: string;
  reminders?: string[];
  plan: PlansType;
};

export class User {
  public props: Required<UserProps>;
  constructor(props: UserProps) {
    this.props = { ...props, reminders: props.reminders || [] };
  }
}
