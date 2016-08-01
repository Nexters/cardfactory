insert into user (id, nickname, email, password) values (1, 'testNickname', 'test@test.com', 'test');
insert into card_type (id, name, defaultImg, defaultFont) values (1, 'cardname','defaultImg', 'defaultFont');
insert into card (id, img, source, font, content, hitsCount, likesCount, userId, cardTypeId) values (1, 'testImg', 'testSource', 'testFont', 'testContent', 1, 1, 1, 1);