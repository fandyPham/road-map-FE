"use client";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  useTheme,
  TextField,
  Button,
  Box,
  Avatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useGoogleLogin } from "@react-oauth/google";
import { AuthService } from "@/services";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Cookies from "js-cookie";
import { LocalStorageUserKey } from "@utils/common";

const Header: React.FC = () => {
  const theme = useTheme();
  const login = useGoogleLogin({
    onSuccess: async (codeResponse: any) => {
      // Handle successful login
      const response = await AuthService.loginWithGoogle(codeResponse);
      localStorage?.setItem(LocalStorageUserKey, JSON.stringify(response.data));
    },
    onError: (error) => {
      // Handle login error
      console.error(error);
    },
  });
  return (
    <AppBar
      position="sticky"
      sx={{
        color: theme.palette.common.white,
        background: theme.palette.primary.contrastText,
      }}
    >
      <Toolbar sx={{ gap: 2, flexWrap: "wrap" }}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5">
            <Link
              href={"/"}
              style={{
                textDecoration: "none",
                color: theme.palette.common.white,
              }}
            >
              Fandy Blog
            </Link>
          </Typography>
        </Box>
        <TextField
          variant="standard"
          placeholder="Search..."
          sx={{
            flexGrow: 1,
            maxWidth: 500,
            marginX: 2,
            input: {
              color: theme.palette.common.white,
            },
          }}
        />
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        {localStorage?.getItem(LocalStorageUserKey) ? (
          <Avatar
            sx={{ cursor: "pointer" }}
            src={
              JSON.parse(localStorage.getItem(LocalStorageUserKey) || "{}")
                ?.avatar || ""
            }
          />
        ) : (
          <Button
            variant="outlined"
            size="small"
            onClick={() => login()}
            sx={{ color: theme.palette.primary.contrastText }}
          >
            Sign in with Google{" "}
            <Icon
              style={{ marginLeft: "10px" }}
              width={20}
              height={20}
              icon="devicon:google"
            />
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
