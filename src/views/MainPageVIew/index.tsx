"use client";

// libraries
import { useCallback, useEffect, useState } from "react";
import Web3, { EthExecutionAPI, SupportedProviders } from "web3";

//store
import { useDispatch, useSelector } from "react-redux";
import { asyncLogOut } from "@/store/slices/user-slice/requests";
import { AppDispatch, RootState } from "@/store";
import { asyncGetUsers } from "@/store/slices/all-users-slice/requests";

//styles
import { PreloaderBody } from "@/components/Authorization/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  CircularProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { MainMainPage } from "./styles";
import Header from "@/components/Header";
import SwapWindow from "./components/swap-window";

const MainPageView = () => {
  const allUsers = useSelector((state: RootState) => state.allUsers);
  const { users } = allUsers;
  const dispatch = useDispatch<AppDispatch>();

  // const providedUrl = process.env.WEB3_URL;

  if (allUsers.isLoading) {
    return (
      <PreloaderBody>
        <CircularProgress />
      </PreloaderBody>
    );
  }

  return (
    <MainMainPage>
      <div className=" m-10 flex flex-col items-center justify-center gap-y-3 max-w-[1200px] w-full h-full mx-auto">
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

        <SwapWindow />
      </div>
    </MainMainPage>
  );
};

export default MainPageView;
