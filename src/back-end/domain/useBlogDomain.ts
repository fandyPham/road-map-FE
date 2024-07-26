import { getHomeBlogsFilter } from "@back-end/data-access/blog";

export const getHomePageBlogs = async (page: string, limit: string) => {
  const take = +limit || 10;
  const skip = take * (+page || 0);
  const result = await getHomeBlogsFilter(skip, take);
  return result;
};
