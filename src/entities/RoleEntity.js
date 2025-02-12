// import { PrimaryKey, Property, t, Entity, Cascade, Collection, OneToMany } from "@mikro-orm/core";
// import { BaseEntity } from "../utils/BaseEntity.js";
// import { User } from "./UserEntity.js"

// // template buat semua table
// @Entity()
// export class Role extends BaseEntity {
//   @PrimaryKey({ type: t.uuid })
//   id;

//   @Property({type: 'string'})
//   name;

//   @OneToMany(() => User, (b) => b.role, { cascade: [Cascade.ALL] })
//   users = new Collection() < User > this;

//   constructor(name) {
//     this.name = name;
//   }
// }

import { EntitySchema } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

export const Role = new EntitySchema({
  name: "Role",
  tableName: "role",
  extends: BaseEntity,
  properties: {
    name: { type: "string" },
  },
});