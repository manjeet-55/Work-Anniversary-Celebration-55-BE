const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://onhohcgcotpgrdmtczcg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9uaG9oY2djb3RwZ3JkbXRjemNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwMzU3OTUsImV4cCI6MjAyNzYxMTc5NX0.-WoqzyAqaFbfYFHm7E6Ha78vwLDw06VDvEfTimk5stY";

const supabase = createClient(supabaseUrl, supabaseKey);
module.exports = supabase;
