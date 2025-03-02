import { EntitySchema } from "@mikro-orm/core";
import { BaseEntity } from "../utils/BaseEntity.js";

// template buat semua table
export const Subject = new EntitySchema({
  name: "Subject",
  tableName: "subject",
  extends: BaseEntity,
  properties: {
    name: { type: "string" },
    courses: {
      kind: "1:m",
      entity: () => "Course",
      mappedBy: (course) => course.subject,
    },
  },
});
