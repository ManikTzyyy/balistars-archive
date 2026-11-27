import { getRoles } from "@/repositories/role.repository";

export async function GET() {
  try {
    const data = await getRoles();
    return Response.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Get roles error:", error);
    return Response.json(
      {
        success: false,
        message: "Failed to retrieve roles",
      },
      { status: 500 },
    );
  }
}
