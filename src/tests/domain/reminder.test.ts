import { DeliveryMethods } from "../../domain/entities/enums/delivery-methods";
import { ReminderFrequency } from "../../domain/entities/enums/reminder-frequency";
import { Reminder, ReminderProps } from "../../domain/entities/reminder";

describe("Testing reminder entity", () => {
  test("constructor", () => {
    const reminderProps: ReminderProps = {
      time: {
        hour: 22,
        minute: 30,
      },
      frequency: ReminderFrequency.DAILY,
      active: true,
      deliveredBy: [DeliveryMethods.PHONE],
    };

    const reminder = new Reminder(reminderProps);

    expect(reminder.props).toStrictEqual(reminderProps);
  });
});
