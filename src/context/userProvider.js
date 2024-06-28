"use client";
import UserContext from "./userContext";
import { httpAxios } from "@/helper/httpHelper";
import { currentUser } from "@/services/userServices";
import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    async function load() {
      try {
        //httpAxios.get("/api/current");
        const logUser = await currentUser();
        console.log(logUser);
        setUser({ ...logUser });
      } catch (error) {
        console.log(error);
        toast.error("Error Loading the Current User!");
        //setUser(undefined);
      }
    }
    if (!user) load();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
