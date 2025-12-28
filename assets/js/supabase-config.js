// Supabase Configuration
const SUPABASE_URL = "https://rueashsermwrcioivvhp.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_Oa-YfoB6k7eZYqo-n5jq7g_QpGEsBZG";

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

window.supabaseClient = _supabase;

console.log("Supabase client initialized");
