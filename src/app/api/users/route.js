import { getUsers } from "@/repositories/user.repository";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const page = Math.max(1, Number(searchParams.get("page")) || 1);
    const limit = Math.min(
      100,
      Math.max(1, Number(searchParams.get("limit")) || 1),
    );
    const search = searchParams.get("search") || "";

    const result = await getUsers({
      page,
      limit,
      search,
    });

    return Response.json({
      success: true,
      message: "Users retrieved successfully",
      ...result,
    });
  } catch (error) {
    console.error("Get users error:", error);

    return Response.json(
      {
        success: false,
        message: "Failed to retrieve users",
      },
      { status: 500 },
    );
  }
}
