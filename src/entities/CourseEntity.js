import { PrimaryKey, Property, t, Entity, ManyToOne, OneToMany, Cascade, Collection } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";
import { User } from "./UserEntity.js";
import { CourseSchedule } from "./CourseScheduleEntity.js";
import { Subject } from "./SubjectEntity.js";
import { Order } from "./OrderEntity.js";

// template buat semua table
@Entity()
export class Course extends BaseEntity {

  @Property({type: 'string'})
  name;

  @Property({type: 'number'})
  price;

  @Property({type: 'number'})
  capacity;

  @Property({type: 'string'})
  language;

  @Property({type: 'string'})
  poster;

  @Property({type: 'number'})
  totalSchedule;

  @Property({type: 'string'})
  level;

  @Property({type: 'string'})
  desc;

  @Property({type: 'boolean'})
  status;

  @ManyToOne(() => User)
  user;

  @OneToMany(() => CourseSchedule, (b) => b.course, { cascade: [Cascade.ALL] })
  CourseSchedules = new Collection() < CourseSchedule > this;

  @ManyToOne(() => Subject)
  subject;

  @OneToMany(() => Order, (b) => b.course, { cascade: [Cascade.ALL] })
  Order = new Collection() < Order > this;

  constructor(data) {
    this.name = data.name;
    this.price = data.price;
    this.capacity = data.language;
    this.poster = data.poster;
    this.totalSchedule = data.totalSchedule;
    this.level = data.level;
    this. desc = data.desc;
    
  }
}