import { DeliveryMethods } from "./enums/delivery-methods";
import { ReminderFrequency } from "./enums/reminder-frequency";

export type AlarmTime = {
  hour: number;
  minute: number;
};

export type ReminderProps = {
  time: AlarmTime;
  frequency: ReminderFrequency;
  active: Boolean;
  deliveredBy: DeliveryMethods[];
};

export class Reminder {
  public props: Required<ReminderProps>;
  constructor(props: ReminderProps) {
    this.props = { ...props };
  }

  /////

  updateTime(param: AlarmTime) {
    this.time = param;
  }

  private set time(param: AlarmTime) {
    this.props.time = param;
  }

  get time(): AlarmTime {
    return this.props.time;
  }
  /////

  updateFrequency(param: ReminderFrequency) {
    this.frequency = param;
  }

  private set frequency(param: ReminderFrequency) {
    this.props.frequency = param;
  }

  get frequency(): ReminderFrequency {
    return this.props.frequency;
  }
  /////

  deactivateAlarm(param: Boolean) {
    this.active = false;
  }

  activateAlarm(param: Boolean) {
    this.active = true;
  }

  private set active(param: Boolean) {
    this.props.active = param;
  }

  get active(): Boolean {
    return this.props.active;
  }

  //////

  updateDeliveryMethods(param: DeliveryMethods[]) {
    this.deliveredBy = param;
  }

  private set deliveredBy(param: DeliveryMethods[]) {
    this.props.deliveredBy = param;
  }

  get deliveredBy(): DeliveryMethods[] {
    return this.props.deliveredBy;
  }
}
