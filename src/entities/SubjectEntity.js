import { PrimaryKey, Property, t, Entity } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

// template buat semua table
@Entity()
export class Review extends BaseEntity {
  @Property({type: 'string'})
  name;

  constructor(data) {
    this.name = data.name;
  }
}