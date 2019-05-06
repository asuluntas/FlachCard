DROP DATABASE IF EXISTS flashcard;

CREATE DATABASE flashcard;

USE flashcard;


CREATE TABLE dictionary (
  id int NOT NULL AUTO_INCREMENT,
  english varchar(50) NOT NULL,
  turkish varchar(50) NOT NULL,
  PRIMARY KEY(ID)
);


INSERT INTO dictionary (english, turkish) VALUES ('Friday', 'Cuma');
INSERT INTO dictionary (english, turkish) VALUES ('Shoe', 'Ayakkabı');
INSERT INTO dictionary (english, turkish) VALUES ('Thursday', 'Perşembe');
INSERT INTO dictionary (english, turkish) VALUES ('Flower', 'Çiçek');
INSERT INTO dictionary (english, turkish) VALUES ('Book', 'Kitap');
INSERT INTO dictionary (english, turkish) VALUES ('Computer', 'Bilgisayar');
INSERT INTO dictionary (english, turkish) VALUES ('Saturday', 'Cumartesi');
INSERT INTO dictionary (english, turkish) VALUES ('Sunday', 'Pazar');
INSERT INTO dictionary (english, turkish) VALUES ('Hat', 'Şapka');
INSERT INTO dictionary (english, turkish) VALUES ('Pink', 'Pembe');
INSERT INTO dictionary (english, turkish) VALUES ('Red', 'Kırmızı');
INSERT INTO dictionary (english, turkish) VALUES ('Yellow', 'Sarı');
INSERT INTO dictionary (english, turkish) VALUES ('Food', 'Yemek');
INSERT INTO dictionary (english, turkish) VALUES ('Car', 'Araba');
INSERT INTO dictionary (english, turkish) VALUES ('Plane', 'Uçak');
INSERT INTO dictionary (english, turkish) VALUES ('House', 'Ev');
INSERT INTO dictionary (english, turkish) VALUES ('Black', 'Siyah');
INSERT INTO dictionary (english, turkish) VALUES ('Rain', 'Yağmur');
INSERT INTO dictionary (english, turkish) VALUES ('Blue', 'Mavi');
INSERT INTO dictionary (english, turkish) VALUES ('Art', 'Sanat');
INSERT INTO dictionary (english, turkish) VALUES ('Hello', 'Merhaba');
INSERT INTO dictionary (english, turkish) VALUES ('Good Bye', 'Hoşçakal');
INSERT INTO dictionary (english, turkish) VALUES ('Five', 'Beş');
INSERT INTO dictionary (english, turkish) VALUES ('Two', 'İki');
INSERT INTO dictionary (english, turkish) VALUES ('Ten', 'On');
INSERT INTO dictionary (english, turkish) VALUES ('Music', 'Müzik');
INSERT INTO dictionary (english, turkish) VALUES ('After', 'Sonra');
INSERT INTO dictionary (english, turkish) VALUES ('Before', 'Önce');
INSERT INTO dictionary (english, turkish) VALUES ('Althoug', 'Rağmen');
INSERT INTO dictionary (english, turkish) VALUES ('Another', 'Diğer');
INSERT INTO dictionary (english, turkish) VALUES ('Lemon', 'Limon');
INSERT INTO dictionary (english, turkish) VALUES ('Cherry', 'Kiraz');
INSERT INTO dictionary (english, turkish) VALUES ('Orange', 'Portakal');
INSERT INTO dictionary (english, turkish) VALUES ('Watermelon', 'Karpuz');
INSERT INTO dictionary (english, turkish) VALUES ('Animal', 'Hayvan');
INSERT INTO dictionary (english, turkish) VALUES ('Cat', 'Kedi');
INSERT INTO dictionary (english, turkish) VALUES ('Dog', 'Köpek');
INSERT INTO dictionary (english, turkish) VALUES ('Black', 'Siyah');



-- mysql -u root < schema.sql
