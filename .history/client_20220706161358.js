import { createClient } from '@supabase/supabase-js'

const supabase = createClient {
    processenvNEXT_PUBLIC_SUPABASE_URL,
    processenvNEXT_PUBLIC_SUPABASE_ANON_KEY
}

export { supabase }