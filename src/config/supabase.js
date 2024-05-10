// src/config/db.js
const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "your-supabase-url";
const supabaseKey = "your-supabase-key";
const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = { supabase };
