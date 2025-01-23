import { PrimaryKey, ManyToOne, Property, t, Entity, OneToMany, Cascade, Collection } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";
import { Role } from "./RoleEntity.js";
import { Course } from "./CourseEntity.js";
import { Review } from "./ReviewEntity.js";

// template buat semua table
@Entity()
export class User extends BaseEntity {
    @Property({type: 'string'})
    name;

    @Property({type: 'string'})
    email;

    @Property({type: 'string'})
    gender;

    @Property({type: 'string'})
    phoneNumber;

    @Property({type: 'string'})
    photo;

    @Property({type: 'string'})
    experience;

    @Property({type: 'string'})
    title;

    @Property({type: 'string'})
    desc;

    @Property({type: 'boolean'})
    isActive;

    @Property({type: 'string'})
    region;

    @ManyToOne(() => Role)
    role;

    @OneToMany(() => Course, (b) => b.user, { cascade: [Cascade.ALL] })
    Courses = new Collection() < Course > this;

    @OneToMany(() => Review, (b) => b.user, { cascade: [Cascade.ALL] })
    Review = new Collection() < Review > this;
    
    constructor(data) {
        this.name = data.name;
        this.email = data.email;
        this.gender = data.gender;
        this.phoneNumber = data.phoneNumber;
        this.photo = data.photo;
        this.experience = data.experience;
        this.title = data.title;
        this.desc = data.desc;
        this.isActive = data.isActive;
        this.region = data.region;
    }
}