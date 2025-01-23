import { PrimaryKey, Property, t, Entity, ManyToOne } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";
import { Course } from "./CourseEntity.js";

// template buat semua table
@Entity()
export class CourseSchedule extends BaseEntity {
  @Property({type: 'string'})
  link;

  @Property({type: 'string'})
  chapter;

  @Property({type: 'timestamp'})
  duration;

  @Property({type: 'timestamp'})
  date;

  @ManyToOne(() => Course)
  course;

  constructor(data) {
    this.link = data.link;
    this.chapter = data.chapter;
    this.duration = data.duration;
    this.date = data.date;
  }
}