import { PrimaryKey, Property, t, Entity } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

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

  @Property({type: 'string'})
  subject;



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