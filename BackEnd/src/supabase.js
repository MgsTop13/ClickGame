import { createClient } from '@supabase/supabase-js'
import fetch from "node-fetch"
import dotenv from "dotenv"
dotenv.config()

const url = process.env.SupaBaseUrL;
const key = process.env.SupaBaseKey;

export const connection = createClient(url, key, {
    global: {
        fetch: fetch
    }
})
