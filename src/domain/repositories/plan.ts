import { Plan } from "../entities/plan";

export interface PlanRepository {
  create(user: Plan): Promise<Plan>;
  update(user: Plan): Promise<Plan>;
  findByType(type: PlanRepository): Promise<Plan>;
}
