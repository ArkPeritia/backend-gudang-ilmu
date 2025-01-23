import { PrimaryKey, Property, t, Entity, OneToOne } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";
import { Order } from "./OrderEntity.js";

// template buat semua table
@Entity()
export class Payment extends BaseEntity {
  @Property({type: 'string'})
  type;

  @Property({type: 'boolean'})
  isActive;

  @Property({type: 'string'})
  proofOfPayment;

  @OneToOne(() => Order)
  order;

  constructor(data) {
    this.type = data.type;
    this.isActive = data.isActive;
    this.proofOfPayment = data.proofOfPayment;
  }
}