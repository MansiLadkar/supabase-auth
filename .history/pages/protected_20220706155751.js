import { supabase } from "../client";

export default function Profile() {
  return (
    <div style={{ maxwidth: "420px", margin: "96px auto" }}>
      <h2>Hello from Protected route</h2>
    </div>
  );
}

export async function getServerSideProps({ req }) {}
