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
  }, [])
  async function handleAuthChange(event, session) {
    await fetch('/api/auth', {
      method: 'POST'
      headers: new Headers({'Content-Type': 'application/json '}),
      credentials: 'same-origin',
      body: JSON.stringify({event, session }),
    })
  }
  async function checkUser() {
    /* when the component loads, checks user to show or hide sign in link */
      const user =  await supabase.auth.user()
      if (user) {
        setAuthenticatedState('authenticated')
      }
  }
  return (
    <div>
      <nav></nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
