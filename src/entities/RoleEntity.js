import { PrimaryKey, Property, t, Entity } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

// template buat semua table
@Entity()
export class Role extends BaseEntity {
  @PrimaryKey({ type: t.uuid })
  id;

  @Property({type: 'string'})
  name;

  constructor(name) {
    this.name = name;
  }
}