
import { db } from "@/db";
import { employees } from "@/db/schema";

export async function GET() {
  try {
    const data = await db
      .select()
      .from(employees)
      .limit(5);

    return Response.json({
      success: true,
      message: "Database connected!",
      data,
    });

  } catch (error) {
    console.error("Database error:", error);

    return Response.json({
      success: false,
      message: "Database connection failed",
    }, {
      status: 500,
    });
  }
}
