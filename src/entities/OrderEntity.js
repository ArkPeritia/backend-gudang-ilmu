// import { PrimaryKey, Property, t, Entity, OneToOne, Cascade, Collection, ManyToOne } from "@mikro-orm/core";
// import { BaseEntity } from "../utils/BaseEntity.js";
// import { Payment } from "./PaymentEntity.js";
// import { Course } from "./CourseEntity.js";
// import { Report } from "./ReportEntity.js";

// // template buat semua table
// @Entity()
// export class Order extends BaseEntity {
//   @Property({type: 'number'})
//   tax;

//   @Property({type: 'boolean'})
//   isActive;

//   @Property({type: 'number'})
//   subtotal;

//   @Property({type: 'number'})
//   totalAmount;

//   @OneToOne(() => Payment, (b) => b.order, { cascade: [Cascade.ALL] })
//   payment = new Collection() < Payment > this;

//   @ManyToOne(() => Course)
//   course;

//   @OneToOne(() => Report, (b) => b.order, { cascade: [Cascade.ALL] })
//   Report = new Collection() < Report > this;

//   constructor(data) {
//     this.tax = data.tax;
//     this.isActive = data.isActive;
//     this.subtotal = data.subtotal;
//     this.totalAmount = data.totalAmount;
//   }
// }

import { EntitySchema } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

;

export const Order = new EntitySchema({
  name: "Order",
  tableName: "order",
  extends: BaseEntity,
  properties: {
    tax: { type: "number" },
    isActive: { type: "boolean" },
    subtotal: { type: "number" },
    totalAmount: { type: "number" }
  },
});