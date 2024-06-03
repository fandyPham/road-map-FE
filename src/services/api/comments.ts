import { Filter } from "@/types/interface";
import { instance } from "./axios";
import querystring from "qs";

const getBlogComments = async (blogId: string, filter: Filter) => {
  const params = querystring.stringify(filter);
  const response = await instance.get(`/blogs/${blogId}/comments?${params}`);
  return response;
};

const addBlogComment = async (blogId: string, comment: string) => {
  const response = await instance.post(`/blogs/${blogId}/comment`, {
    comment,
  });
  return response;
};

export default { getBlogComments, addBlogComment };
