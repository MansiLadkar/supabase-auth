import { supabase } from "../client";

export default function Profile() {
  return (
    <div style={{ maxwidth: "420px", margin: "96px auto" }}>
      <h2>Hello from Protected route</h2>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserbyCookie(req);

  if (!user) {
    return { props: {}, redirect: { destination: "/sign-in" } };
  }
  //do something with the user
  return { props: { user } };
}
