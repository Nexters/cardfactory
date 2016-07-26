insert into user (id, nickname, email, password) values (1, 'testNickname', 'test@test.com', 'test');
insert into card_type (id, defaultHtml,thumbnailHtml,name) values (1, '<div>defaultHtml</div>','<div>defaultImg</div>', 'defaultName');
insert into card (html, hitsCount, likesCount, userId, cardTypeId) values ('<div>testHtml</div>',1,1,1,1);