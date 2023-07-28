"use client";

import { PreloaderBody } from "@/components/Authorization/styles";
import { AppDispatch, RootState } from "@/store";
import { asyncGetUsers } from "@/store/slices/all-users-slice/requests";
import { asyncGetCoins } from "@/store/slices/coins-slice/requests";
import MainPageView from "@/views/MainPageVIew";
import { CircularProgress } from "@mui/material";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const { allUsers, coins } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  const getAllUsers = useCallback(() => {
    dispatch(asyncGetUsers());
  }, []);

  useEffect(() => {
    dispatch(asyncGetCoins());
  }, []);

  if (allUsers.isLoading || coins.isLoading) {
    return (
      <PreloaderBody>
        <CircularProgress />
      </PreloaderBody>
    );
  }

  return (
    <MainPageView allUsers={allUsers} coins={coins} getAllUsers={getAllUsers} />
  );
}
