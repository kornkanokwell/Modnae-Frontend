import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { LoadingToRedirect } from "./LoadingToRedirect";
import { currentAdmin } from "../app/function/auth";

export function AdminRoute({ children }) {
  // const { user } = useSelector((state) => ({ ...state }));
  // const [ok, setOk] = useState(false);

  // useEffect(() => {
  //   if (user && user.token) {
  //     currentAdmin(user.token)
  //       .then((res) => {
  //         setOk(true);
  //       })
  //       .catch((err) => {
  //         setOk(false);
  //       });
  //   }
  // }, [user]);

  // return user && user.token ? (
  //   children
  // ) : (
  //   <LoadingToRedirect></LoadingToRedirect>
  // );
}
