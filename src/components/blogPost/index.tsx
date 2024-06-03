import React from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  Box,
  Chip,
  useTheme,
} from "@mui/material";
import { BlogPostData } from "@/types/interface";
import dayjs from "dayjs";
import { getRandomColor } from "@utils/common";
import { useRouter } from "next/navigation";

interface BlogPostProps {
  data: BlogPostData;
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
  const theme = useTheme();
  const route = useRouter();
  return (
    <Card sx={{ px: 3, pt: 3, borderRadius: "16px" }} elevation={6}>
      <CardHeader
        avatar={
          <Avatar sx={{ backgroundColor: getRandomColor(), cursor: "pointer" }}>
            {data.first_name?.[0] || "" + data.last_name?.[0] || ""}
          </Avatar>
        }
        title={data.first_name || "" + data.last_name}
        titleTypographyProps={{
          onClick: () => {},
          sx: {
            cursor: "pointer",
          },
          variant: "h6",
        }}
        sx={{ p: 0 }}
        subheader={dayjs(data.created_at).format("DD/MM/YYYY HH:mm")}
        subheaderTypographyProps={{
          onClick: () => {},
          sx: {
            cursor: "pointer",
          },
        }}
      />
      <CardContent
        sx={{
          p: 0,
          mt: 2,
          "&:last-child": {
            paddingBottom: 0,
          },
        }}
      >
        <Typography
          sx={{ cursor: "pointer", width: "fit-content" }}
          onClick={() => route.push(`/blog/${data.id}`)}
          variant="h5"
        >
          {data.title}
        </Typography>
        <Box display="flex" gap={1} flexWrap="wrap" marginTop={2}>
          {data.tags?.map((tag) => (
            <Chip
              sx={{
                cursor: "pointer",
                ":hover": {
                  background: theme.palette.grey[200],
                },
              }}
              key={tag.id}
              label={`#${tag.title}`}
              variant="outlined"
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogPost;
