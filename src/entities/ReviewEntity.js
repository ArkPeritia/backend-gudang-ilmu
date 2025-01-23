import { PrimaryKey, Property, t, Entity, OneToOne, ManyToOne } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";
import { Order } from "./OrderEntity.js";
import { User } from "./UserEntity.js";

// template buat semua table
@Entity()
export class Review extends BaseEntity {
  @Property({type: 'string'})
  comment;

  @Property({type: 'number'})
  star;

  @OneToOne(() => Order)
  order;
  
  @ManyToOne(() => User)
  user;

  constructor(data) {
    this.comment = data.comment;
    this.star = data.star;
  }
}