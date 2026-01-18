import {connection} from "../connection.js"

export async function Load(userId){
    const command = `
        select User.id_user, User.username, ClickGame.totalClicks, ClickGame.clicks from ClickGame
        inner join User on User.id_user = ClickGame.id_user
        where User.id_user = ?;
    `
    
    const [dados] = await connection.query(command, userId)
    return dados;
}

export async function Save(userId, totalClicks, clicks){
    const command = `
        UPDATE ClickGame
            SET totalClicks = ?,
                clicks = ?
            WHERE id_user = ?;
    `
    
    const [info] = await connection.query(command,[
        totalClicks,
        clicks,
        userId
    ]);
    
    return info;
}

export async function Persons(){
    const command = `
        SELECT * FROM Persons;
    `
    
    const [person] = await connection.query(command);
    return person;
}

export async function SavePerson(dados){
    const command = `
        INSERT INTO Persons (img, name, description, points, rarity)
        VALUES (?,?,?,?,?);
    `
    
    const [info] = await connection.query(command, [
        dados.img,
        dados.name,
        dados.description,
        dados.points,
        dados.rarity
    ])
    return info;
}