import { getDepartments } from "@/repositories/departmnet.repository";

export async function GET() {
  try {
    const data = await getDepartments();
    return Response.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Get departments error:", error);
    return Response.json(
      {
        success: false,
        message: "Failed to retrieve departments",
      },
      { status: 500 },
    );
  }
}
