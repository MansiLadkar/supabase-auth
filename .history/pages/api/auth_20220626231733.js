import { supabase } from "../../client";

export default function handler(req, res) {
  supabase.auth.api.aetAuthCookies(req, res);
}
