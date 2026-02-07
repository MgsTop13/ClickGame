import { connection } from "../src/supabase.js"

export async function Load(userId) {
    const data = await connection
        .from("clickgame")
        .select("*")
        .eq("id_user", userId);
    return data;
}

export async function Save(userId, totalClicks, clicks) {
    const data = await connection
        .from("clickgame")
        .update([{
            totalclicks: totalClicks,
            clicksatual: clicks
        }])
        .eq("id_user", userId)
    return data;
}

export async function Persons() {
    const data = await connection
        .from("clickgamepersonagens")
        .select("*")
    return data;
}

export async function SavePerson(dados) {
    const data = await connection
        .from("clickgamepersonagens")
        .insert([{
            img: dados.img,
            name: dados.name,
            description: dados.description,
            points: dados.points,
            rarity: dados.rarity
        }])
    return data;
}