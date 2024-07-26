import { getHomePageBlogs } from "@back-end/domain/useBlogDomain";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const searchParamsUrl = new URLSearchParams(request.nextUrl.searchParams);
    const page = searchParamsUrl.get("page") || "";
    const limit = searchParamsUrl.get("limit") || "";

    const filteredBlogs = await getHomePageBlogs(page, limit);
    return NextResponse.json(filteredBlogs, {
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message || "Failed to get Blogs",
        name: error.name,
      },
      {
        status: error.statusCode,
      }
    );
  }
}
