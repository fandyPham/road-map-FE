import prisma from "@back-end/prisma/prisma";

export const getHomeBlogsFilter = async (
  skip: number,
  take: number,
  search?: string
) => {
  const result = await prisma.blogs.findMany({
    where: {
      title: {
        contains: search,
      },
    },
    skip,
    take,
  });
  return result;
};
