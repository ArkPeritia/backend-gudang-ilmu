import { PrimaryKey, Property, t, Entity, OneToMany, Cascade, Collection } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";
import { Course } from "./CourseEntity.js";

// template buat semua table
@Entity()
export class Subject extends BaseEntity {
  @Property({type: 'string'})
  name;

  @OneToMany(() => Course, (b) => b.subject, { cascade: [Cascade.ALL] })
  Course = new Collection() < Course > this;

  constructor(data) {
    this.name = data.name;
  }
}