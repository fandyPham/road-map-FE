// components/Comments.jsx
"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Avatar,
  Divider,
  useTheme,
  IconButton,
} from "@mui/material";
import { Comment, Filter } from "@/types/interface";
import { CommentsService } from "@/services";
import { useParams } from "next/navigation";
import { LocalStorageUserKey, getRandomColor } from "@utils/common";
import { Icon } from "@iconify/react";

const fetchBlogComments = async (id: string, filter: Filter) => {
  return await CommentsService.getBlogComments(id, filter);
};

const Comments = () => {
  const theme = useTheme();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [filter, setFilter] = React.useState<Filter>({
    page: 0,
    limit: 10,
  });
  const params = useParams();
  const handleCommentChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setComment(event.target.value);
  };

  const handleSubmitComment = async () => {
    try {
      if (comment.trim() !== "") {
        // setComments([comment, ...comments]);
        await CommentsService.addBlogComment(
          (params?.id as string) || "",
          comment
        );
        setComment("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    fetchBlogComments(params.id as string, filter).then((response) => {
      setComments(response.data);
    });
  }, []);

  return (
    <Box my={3}>
      <Divider sx={{ color: theme.palette.primary.main, opacity: 1 }} />

      <Typography variant="h4">Comments</Typography>
      {!localStorage?.getItem(LocalStorageUserKey) ? (
        <Typography color={theme.palette.warning.light}>
          Please login before write comment
        </Typography>
      ) : null}
      <Box display="flex" gap={2} alignItems="end" mb={3}>
        <TextField
          label="Add a comment"
          value={comment}
          onChange={handleCommentChange}
          fullWidth
          multiline
          rows={3}
          variant="filled"
          margin="normal"
          InputProps={{
            endAdornment: (
              <IconButton
                disabled={
                  !comment.trim() || !localStorage?.getItem(LocalStorageUserKey)
                }
                sx={{
                  mt: 2,
                  ml: 2,
                  border: `1px solid ${theme.palette.common.white}`,
                }}
                onClick={() => handleSubmitComment()}
              >
                <Icon
                  color={
                    !comment.trim() ||
                    !localStorage?.getItem(LocalStorageUserKey)
                      ? theme.palette.grey[200]
                      : theme.palette.primary.main
                  }
                  width={26}
                  height={26}
                  icon="mingcute:send-fill"
                />
              </IconButton>
            ),
          }}
        />
      </Box>
      <Box display="flex" flexDirection="column" gap={2}>
        {comments.map((comment: Comment, index) => (
          <Grid key={index} container spacing={2} alignItems="center">
            <Grid item>
              <Avatar
                sx={{ backgroundColor: getRandomColor(), cursor: "pointer" }}
              >
                {comment.author
                  .split(" ")
                  .map((part) => part.charAt(0).toUpperCase())
                  .join("")}
              </Avatar>{" "}
            </Grid>
            <Grid item xs>
              <Typography fontWeight="bold" variant="subtitle1">
                {comment.author}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {new Date(comment.created_at).toLocaleString()}
              </Typography>
              <Typography variant="body1">{comment.content}</Typography>
            </Grid>
          </Grid>
        ))}
      </Box>
    </Box>
  );
};

export default Comments;
