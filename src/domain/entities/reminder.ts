import { DeliveryMethods } from "./enums/delivery-methods";
import { ReminderFrequency } from "./enums/reminder-frequency";

export type ReminderProps = {
  time: Date;
  frequency: ReminderFrequency;
  active: Boolean;
  deliveredBy: DeliveryMethods[];
};

export class Reminder {
  public props: Required<ReminderProps>;
  constructor(props: ReminderProps) {
    this.props = { ...props };
  }
}
