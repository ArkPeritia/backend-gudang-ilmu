import { PrimaryKey, Property, t, Entity } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

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