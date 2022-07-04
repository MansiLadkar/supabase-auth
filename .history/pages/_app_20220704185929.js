import "../styles/globals.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { supabase } from "../client";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav></nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
