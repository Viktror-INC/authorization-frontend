"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { MainMainPage } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { asyncLogOut } from "@/store/slices/user-slice/requests";
import { AppDispatch, RootState } from "@/store";
import { asyncGetUsers } from "@/store/slices/all-users-slice/requests";
import { PreloaderBody } from "@/components/Authorization/styles";
import {
  CircularProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const MainPageView = () => {
  const allUsers = useSelector((state: RootState) => state.allUsers);
  const { users } = allUsers;
  const dispatch = useDispatch<AppDispatch>();

  if (allUsers.isLoading) {
    return (
      <PreloaderBody>
        <CircularProgress />
      </PreloaderBody>
    );
  }

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Users
          </Typography>
          <Button onClick={() => dispatch(asyncLogOut())} color="inherit">
            LogOut
          </Button>
        </Toolbar>
      </AppBar>
      <MainMainPage>
        <div className=" m-10 flex flex-col justify-center gap-y-3">
          <Button
            className="mt-10"
            variant="outlined"
            onClick={() => dispatch(asyncGetUsers())}
          >
            Get All users
          </Button>

          {users && (
            <List dense={false}>
              {users.map((user, index) => (
                <ListItem key={`${user.id}_${index}`}>
                  <ListItemIcon>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary={user.email} />
                </ListItem>
              ))}
            </List>
          )}
        </div>
      </MainMainPage>
    </div>
  );
};

export default MainPageView;
