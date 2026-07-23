import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

/** Enquiry messages submitted from the Contact page. */
export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  phone: varchar("phone", { length: 32 }).notNull(),
  courseInterest: varchar("course_interest", { length: 255 }),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
