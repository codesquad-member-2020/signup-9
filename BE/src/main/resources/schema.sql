CREATE TABLE user
(
    id             int identity,
    user_id        varchar(64),
    name           varchar(64),
    password       varchar(64),
    birth_date     varchar(64),
    gender         int,
    email          varchar(100),
    phone_number   varchar(64),
    favorite_one   varchar(64),
    favorite_two   varchar(64),
    favorite_three varchar(64)
);

insert into user
values (1, 'guswns1659', 'jack', '1234', '19930810', 1,
        'zmdk1127@naver.com', '01012341234', '수영', '밥', '축구');

