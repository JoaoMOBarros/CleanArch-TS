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

  updatePrice(param: number) {
    this.price = param;
  }

  private set price(param: number) {
    this.props.price = param;
  }

  get price(): number {
    return this.props.price;
  }
  /////

  updateQuantity(param: number) {
    this.quantity = param;
  }

  private set quantity(param: number) {
    this.props.quantity = param;
  }

  get quantity(): number {
    return this.props.quantity;
  }
}
