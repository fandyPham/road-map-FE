"use client";

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
  Divider,
} from "@mui/material";
import { BlogPostData } from "@/types/interface";
import dayjs from "dayjs";
import { getRandomColor } from "@utils/common";
import Comments from "./comment";

interface Props {
  data: BlogPostData;
}

const BlogContent: React.FC<Props> = ({ data }) => {
  const theme = useTheme();
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
        <Typography sx={{ cursor: "pointer" }} variant="h1">
          {data.title}
        </Typography>
        <>
          <div dangerouslySetInnerHTML={{ __html: data.body }} />
        </>
        <Box display="flex" gap={1} flexWrap="wrap" marginTop={2}>
          {data.tags?.map((tag) => (
            <Chip
              sx={{
                cursor: "pointer",
                ":hover": {
                  background: theme.palette.grey[300],
                },
              }}
              key={tag.id}
              label={`#${tag.title}`}
              variant="outlined"
            />
          ))}
        </Box>
      </CardContent>
      <Comments />
    </Card>
  );
};

export default React.memo(BlogContent);
