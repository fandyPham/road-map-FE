import { BlogsService } from "@/services";
import Content from "../../../components/blogDetail/content";
import { NextResponse } from "next/server";

async function fetchBlogDetail(id: string) {
  // Fetch data from your server action
  const res = await BlogsService.getBlogDetail(id);

  return res.data;
}

export default async function BlogDetail({ params }: any) {
  const data: any = await fetchBlogDetail(params.id);

  return (
    <>
      <Content data={data} />
    </>
  );
}
