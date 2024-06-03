import { Filter } from "@/types/interface";
import { instance } from "./axios";
import querystring from "qs";

const getHomeBlogs = async (filter: Filter) => {
  const params = querystring.stringify(filter);
  const response = await instance.get(`/blogs?${params}`);
  return response;
};

const getBlogDetail = async (blogId: string) => {
  const response = await instance.get(`/blogs/${blogId}/detail`);
  return response;
};

export default { getHomeBlogs, getBlogDetail };
