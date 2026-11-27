import { db } from "@/db";
import { departments } from "@/db/schema";
import { isNull } from "drizzle-orm";

const getDepartments = async () => {
  return await db
    .select()
    .from(departments)
    .where(isNull(departments.isDelete));
};

export { getDepartments };
