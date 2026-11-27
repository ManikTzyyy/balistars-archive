import { db } from "@/db";
import { roles } from "@/db/schema";
import { isNull } from "drizzle-orm";

const getRoles = async () => {
  return await db.select().from(roles).where(isNull(roles.isDelete));
};

export { getRoles };
