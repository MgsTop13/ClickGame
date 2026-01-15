create database ClickGame;
use ClickGame;

create table User(
    id_user int primary key auto_increment,
    username varchar(150) not null,
    email varchar(150) not null,
    password varchar(255) not null,
    pass varchar(100) not null
);

create table ClickGame(
    id_user int,
    username varchar(150),
    totalClicks int,
    clicks int,
    foreign key (id_user) references User(id_user)
);

create table Persons(
    id_person int primary key auto_increment,
    img text,
    name varchar(255),
    description varchar(255),
    points int,
    rarity varchar(150),
);