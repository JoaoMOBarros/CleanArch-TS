import { PlansType } from "../../domain/entities/enums/plans-type";
import { Plan, PlanProps } from "../../domain/entities/plans";

describe("Testing plan entity", () => {
  test("constructor", () => {
    const planProps: PlanProps = {
      type: PlansType.BASIC,
      quantity: 3,
      price: 0,
    };

    const basicPlan = new Plan(planProps);

    expect(basicPlan.props).toStrictEqual(planProps);
  });
});
