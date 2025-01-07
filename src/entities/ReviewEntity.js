import { PrimaryKey, Property, t, Entity } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

// template buat semua table
@Entity()
export class Review extends BaseEntity {
  @Property({type: 'string'})
  comment;

  @Property({type: 'number'})
  star;

  constructor(data) {
    this.comment = data.comment;
    this.star = data.star;
  }
}