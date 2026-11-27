import { pgTable, uuid, varchar, date, boolean } from "drizzle-orm/pg-core";
// DEPARTMENTS
export const departments = pgTable("departments", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name").notNull(),
  isDelete: date("is_delete", { mode: "string" }),
});

// EMPLOYEES
export const employees = pgTable("employees", {
  id: uuid("id").defaultRandom().primaryKey(),
  fullname: varchar("fullname"),
  address: varchar("address"),
  gender: varchar("gender"),
  phone: varchar("phone"),
  email: varchar("email"),
  departmentId: uuid("department_id")
    .notNull()
    .references(() => departments.id),
  dateJoin: date("date_join", { mode: "string" }),
  status: boolean("status").default(true),
  isDelete: varchar("is_delete"),
});

// ROLES
export const roles = pgTable("roles", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name").notNull(),
  isDelete: date("is_delete", { mode: "string" }),
});

// USERS
export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name"),
  username: varchar("username").notNull(),
  password: varchar("password"),
  roleId: uuid("role_id").references(() => roles.id),
  isDelete: date("is_delete", { mode: "string" }),
});
