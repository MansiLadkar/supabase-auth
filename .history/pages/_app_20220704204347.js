import "../styles/globals.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "../client";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [authenticatedState, setAuthenticatedState] =
    useState("not-authenticated");
  const router = useRouter();
  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        handleAuthChange(event, session);
        if (event === "SIGNED_OUT") {
          setAuthenticatedState("authenticated");
          router.push("/profile");
        }
        if (event === "SIGNED_IN") {
          setAuthenticatedState("non-authenticated");
        }
      }
    );
    checkUser();
    return () => {
      authListener.unsubscribe();
    };
  }, []);
  return (
    <div>
      <nav></nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
