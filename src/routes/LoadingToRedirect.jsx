import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function LoadingToRedirect() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    //Redirect
    count === 0 && navigate("/login");
    return () => clearInterval(interval);
  }, [count]);
  return (
    <>
      <h3> กรุณาเข้าสู่ระบบ กำลังย้อนกลับใน {count}</h3>
    </>
  );
}
