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

  updateName(param: string) {
    this.name = param;
  }

  private set name(param: string) {
    this.props.name = param;
  }

  get name(): string {
    return this.props.name;
  }

  /////

  updateEmail(param: string) {
    this.email = param;
  }

  private set email(param: string) {
    this.props.email = param;
  }

  get email(): string {
    return this.props.email;
  }

  /////

  updatePlan(param: PlansType) {
    this.name = param;
  }

  private set plan(param: PlansType) {
    this.props.plan = param;
  }

  get plan(): PlansType {
    return this.props.plan;
  }

  /////

  updateReminders(param: string[]) {
    this.reminders = param;
  }

  private set reminders(param: string[]) {
    this.props.reminders = param;
  }

  get reminders(): string[] {
    return this.props.reminders;
  }
}
