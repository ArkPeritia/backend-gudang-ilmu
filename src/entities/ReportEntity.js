import { PrimaryKey, Property, t, Entity, OneToOne } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";
import { Order } from "./OrderEntity.js";

// template buat semua table
@Entity()
export class Report extends BaseEntity {
  @Property({type: 'string'})
  reason;

  @Property({type: 'boolean'})
  isActive;

  @OneToOne(() => Order)
  order;

  constructor(data) {
    this.reason = data.reason;
    this.isActive = data.isActive;
  }
}