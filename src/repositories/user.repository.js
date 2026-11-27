import { db } from "@/db";
import { users } from "@/db/schema";
import { isNull, desc, or, ilike } from "drizzle-orm";

const getUsers = async ({ page = 1, limit = 10, search = "" } = {}) => {
  const offset = (page - 1) * limit;

  const conditions = [isNull(users.isDelete)];

  if (search) {
    conditions.push(
      or(
        ilike(users.name, `%${search}%`),
        ilike(users.username, `%${search}%`)
      )
    );
  }

  const data = await db
    .select({
      id: users.id,
      name: users.name,
      username: users.username,
      roleId: users.roleId,
      isDelete: users.isDelete,
    })
    .from(users)
    .where(
      conditions.length > 1
        ? conditions[0] && conditions[1]
        : conditions[0]
    )
    .orderBy(desc(users.id))
    .limit(limit + 1)
    .offset(offset);

  const hasNext = data.length > limit;

  if (hasNext) {
    data.pop();
  }

  return {
    data,
    pagination: {
      page,
      limit,
      hasNext,
      hasPrevious: page > 1,
    },
  };
};

export { getUsers };