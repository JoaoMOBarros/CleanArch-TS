import { PlansType } from "./enums/plans-type";

export type PlanProps = {
  type: PlansType;
  quantity: number;
  price: number;
};

export class Plan {
  public props: Required<PlanProps>;
  constructor(props: PlanProps) {
    this.props = { ...props };
  }
}
