import { PrimaryKey, Property, t, Entity } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

// template buat semua table
@Entity()
export class Review extends BaseEntity {
  @Property({type: 'string'})
  link;

  @Property({type: 'string'})
  chapter;

  @Property({type: 'timestamp'})
  duration;

  @Property({type: 'timestamp'})
  date;

  constructor(data) {
    this.link = data.link;
    this.chapter = data.chapter;
    this.duration = data.duration;
    this.date = data.date;
  }
}