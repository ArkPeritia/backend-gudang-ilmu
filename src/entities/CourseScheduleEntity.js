// import { PrimaryKey, Property, t, Entity, ManyToOne } from "@mikro-orm/core";
// import { BaseEntity } from "../utils/BaseEntity.js";
// import { Course } from "./CourseEntity.js";

// // template buat semua table
// @Entity()
// export class CourseSchedule extends BaseEntity {
//   @Property({type: 'string'})
//   link;

//   @Property({type: 'string'})
//   chapter;

//   @Property({type: 'timestamp'})
//   duration;

//   @Property({type: 'timestamp'})
//   date;

//   @ManyToOne(() => Course)
//   course;

//   constructor(data) {
//     this.link = data.link;
//     this.chapter = data.chapter;
//     this.duration = data.duration;
//     this.date = data.date;
//   }
// }

import { EntitySchema } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

export const CourseSchedule = new EntitySchema({
  name: "CourseSchedule",
  tableName: "coureSchedule",
  extends: BaseEntity,
  properties: {
    link: { type: "string" },
    chapter: { type: "string" },
    duration: { type: "timestamp" },
    date: { type: "timestamp" },
    course: { kind: "m:1", type: "Course" },
  },
  relations: {
    course: { reference: "m:1", entity: "Course" },
  },
});
