import { PrimaryKey, Property, t, Entity } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

// template buat semua table
@Entity()
export class Report extends BaseEntity {
  @Property({type: 'string'})
  reason;

  @Property({type: 'boolean'})
  isActive;

  constructor(data) {
    this.reason = data.reason;
    this.isActive = data.isActive;
  }
}