import { PrimaryKey, Property, t, Entity } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

// template buat semua table
@Entity()
export class Order extends BaseEntity {
  @Property({type: 'number'})
  tax;

  @Property({type: 'boolean'})
  isActive;

  @Property({type: 'number'})
  subtotal;

  @Property({type: 'number'})
  totalAmount;

  constructor(data) {
    this.tax = data.tax;
    this.isActive = data.isActive;
    this.subtotal = data.subtotal;
    this.totalAmount = data.totalAmount;
  }
}