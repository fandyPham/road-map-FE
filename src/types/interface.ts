export interface BlogPost {
  id: number;
  title: string;
  author: string;
  authorAvatar: string;
  content: string;
  createdAt: string;
}

export interface Filter {
  page: number;
  limit: number;
}

export interface BlogPostData {
  body: string;
  created_at: string;
  created_by: number;
  id: number;
  last_modified: string | null;
  first_name: string | null;
  last_name: string | null;
  avatar: string | null;
  tags: { title: string; id: string }[] | null;
  status: string;
  title: string;
  username: string;
  description?: string;
}

export interface Comment {
  author: string;
  blog_id: number;
  content: string;
  created_at: string;
  created_by: number;
  id: number;
  last_modified: string | null;
}
