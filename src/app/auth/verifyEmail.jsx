import { useState, useEffect } from "react";
import mod from "../../assets/mod.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import { LoadingToRedirect } from "../../routes/LoadingToRedirect";

export function EmailVerify() {
  const [validUrl, setValidUrl] = useState(false);
  const params = useParams();
  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `https://modnae-m7lm.onrender.com/api/users/${params.id}/verify/${params.tokens}`;
        const { data } = await axios.get(url);
        console.log(data);
        setValidUrl(true);
      } catch (err) {
        console.log(err);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [params]);
  return (
    <>
      {validUrl ? (
        <div>
          <h3>Email verified successfully</h3>
        </div>
      ) : (
        <h1>404 not found</h1>
      )}
    </>
  );
}
