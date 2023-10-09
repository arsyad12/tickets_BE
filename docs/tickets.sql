-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS cinemas_id_seq;

-- Table Definition
CREATE TABLE "public"."cinemas" (
    "id" int4 NOT NULL DEFAULT nextval('cinemas_id_seq'::regclass),
    "movie_id" int8,
    "name" varchar,
    "city" varchar,
    "address" varchar,
    "show_times" json,
    "price" int8,
    "logo" text
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS months_id_seq;

-- Table Definition
CREATE TABLE "public"."months" (
    "id" int4 NOT NULL DEFAULT nextval('months_id_seq'::regclass),
    "name" varchar
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS untitled_table_216_id_seq;

-- Table Definition
CREATE TABLE "public"."movies" (
    "id" int4 NOT NULL DEFAULT nextval('untitled_table_216_id_seq'::regclass),
    "name" varchar,
    "realese_date" date,
    "duration" varchar,
    "genres" json,
    "directed_by" varchar,
    "casts" json,
    "synopsis" text,
    "posters" text
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS order_history_id_seq;

-- Table Definition
CREATE TABLE "public"."order_history" (
    "id" int4 NOT NULL DEFAULT nextval('order_history_id_seq'::regclass),
    "user_id" json,
    "created_at" date,
    "movie_started" date,
    "seat" json,
    "barcode_url" text,
    "movie_id" json,
    "cinema_id" json
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS payments_id_seq;

-- Table Definition
CREATE TABLE "public"."payments" (
    "id" int4 NOT NULL DEFAULT nextval('payments_id_seq'::regclass),
    "name" varchar,
    "logo" text
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS seats_id_seq;

-- Table Definition
CREATE TABLE "public"."seats" (
    "id" int4 NOT NULL DEFAULT nextval('seats_id_seq'::regclass),
    "seats_a" json,
    "seats_b" json,
    "seats_c" json,
    "seats_d" json,
    "seats_e" json,
    "seats_f" json,
    "seats_g" json
);

-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS untitled_table_211_id_seq;

-- Table Definition
CREATE TABLE "public"."users" (
    "id" int4 NOT NULL DEFAULT nextval('untitled_table_211_id_seq'::regclass),
    "first_name" varchar,
    "last_name" varchar,
    "phone_number" varchar,
    "email" varchar,
    "password" varchar,
    "photo_profile" text
);

INSERT INTO "public"."cinemas" ("id", "movie_id", "name", "city", "address", "show_times", "price", "logo") VALUES
(2, 2, 'cinepolis', 'medan', 'jl.soekarno hatta', '["7:45","9:45","11:45"]', 85000, 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Cinepolis_Nuevo_Logo_2019.jpg');
INSERT INTO "public"."cinemas" ("id", "movie_id", "name", "city", "address", "show_times", "price", "logo") VALUES
(2, 3, 'XX1', 'Pekanbaru', 'Jl. Soekarno Hatta', '["6:45","8:45","10:45"]', 80000, 'https://webnwp.blob.core.windows.net/wpmedia/Cinema_XXI.png');
INSERT INTO "public"."cinemas" ("id", "movie_id", "name", "city", "address", "show_times", "price", "logo") VALUES
(3, 5, 'XX1', 'Jakarta', 'Jl. Soekarno Hatta', '["6:45","8:45","10:45"]', 80000, 'https://webnwp.blob.core.windows.net/wpmedia/Cinema_XXI.png');
INSERT INTO "public"."cinemas" ("id", "movie_id", "name", "city", "address", "show_times", "price", "logo") VALUES
(4, 9, 'cinepolis', 'Jakarta', 'Jl. Soekarno Hatta', '["6:45","8:45","10:45"]', 80000, 'https://webnwp.blob.core.windows.net/wpmedia/Cinema_XXI.png'),
(7, 42, 'Holiday Square', 'Jakarta', 'Jl. Soekarno Hatta', '["6:45","8:45","10:45"]', 80000, 'https://webnwp.blob.core.windows.net/wpmedia/Cinema_XXI.png');



INSERT INTO "public"."movies" ("id", "name", "realese_date", "duration", "genres", "directed_by", "casts", "synopsis", "posters") VALUES
(19, 'The Hobbits Holiday 2qw', '2021-08-08', '2 h 12 min', '["adventure","action","comedy"]', 'James B', '["dwayne Jhonson","Emma","Kevin H"]', 'Bla bla bla', 'https://cdn0-production-images-kly.akamaized.net/zduBJnIwVqPxuvwEkK7Hpwe_WgE=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2984036/original/034006400_1575278238-Jumanji_The_Next_Level_Headline.jpg');
INSERT INTO "public"."movies" ("id", "name", "realese_date", "duration", "genres", "directed_by", "casts", "synopsis", "posters") VALUES
(12, 'Danarys Targaryan', '2021-08-08', '2 h 12 min', '["adventure","action","comedy"]', 'James B', '["dwayne Jhonson","Emma","Kevin H"]', 'Bla bla bla', 'https://cdn0-production-images-kly.akamaized.net/zduBJnIwVqPxuvwEkK7Hpwe_WgE=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2984036/original/034006400_1575278238-Jumanji_The_Next_Level_Headline.jpg');
INSERT INTO "public"."movies" ("id", "name", "realese_date", "duration", "genres", "directed_by", "casts", "synopsis", "posters") VALUES
(20, 'The Hobbits Holiday 2qws', '2021-08-08', '2 h 12 min', '["adventure","action","comedy"]', 'James B', '["dwayne Jhonson","Emma","Kevin H"]', 'Bla bla bla', 'https://cdn0-production-images-kly.akamaized.net/zduBJnIwVqPxuvwEkK7Hpwe_WgE=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2984036/original/034006400_1575278238-Jumanji_The_Next_Level_Headline.jpg');
INSERT INTO "public"."movies" ("id", "name", "realese_date", "duration", "genres", "directed_by", "casts", "synopsis", "posters") VALUES
(21, 'Loli M', '2021-08-08', '2 h 12 min', '["adventure","action","comedy"]', 'James B', '["dwayne Jhonson","Emma","Kevin H"]', 'Bla bla bla', 'https://cdn0-production-images-kly.akamaized.net/zduBJnIwVqPxuvwEkK7Hpwe_WgE=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2984036/original/034006400_1575278238-Jumanji_The_Next_Level_Headline.jpg'),
(22, 'Loli Metro', '2021-08-08', '2 h 12 min', '["adventure","action","comedy"]', 'James B', '["dwayne Jhonson","Emma","Kevin H"]', 'Bla bla bla', 'https://cdn0-production-images-kly.akamaized.net/zduBJnIwVqPxuvwEkK7Hpwe_WgE=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2984036/original/034006400_1575278238-Jumanji_The_Next_Level_Headline.jpg'),
(13, 'The Hobbits', '2021-08-08', '2 h 12 min', '["adventure","action","comedy"]', 'James B', '["dwayne Jhonson","Emma","Kevin H"]', 'Bla bla bla', 'https://cdn0-production-images-kly.akamaized.net/zduBJnIwVqPxuvwEkK7Hpwe_WgE=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2984036/original/034006400_1575278238-Jumanji_The_Next_Level_Headline.jpg'),
(23, 'Loli Metro 2', '2021-08-08', '2 h 12 min', '["adventure","action","comedy"]', 'James B', '["dwayne Jhonson","Emma","Kevin H"]', 'Bla bla bla', 'https://cdn0-production-images-kly.akamaized.net/zduBJnIwVqPxuvwEkK7Hpwe_WgE=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2984036/original/034006400_1575278238-Jumanji_The_Next_Level_Headline.jpg'),
(14, 'The Hobbits', '2021-08-08', '2 h 12 min', '["adventure","action","comedy"]', 'James B', '["dwayne Jhonson","Emma","Kevin H"]', 'Bla bla bla', 'https://cdn0-production-images-kly.akamaized.net/zduBJnIwVqPxuvwEkK7Hpwe_WgE=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2984036/original/034006400_1575278238-Jumanji_The_Next_Level_Headline.jpg'),
(15, 'The Hobbits sad', '2021-08-08', '2 h 12 min', '["adventure","action","comedy"]', 'James B', '["dwayne Jhonson","Emma","Kevin H"]', 'Bla bla bla', 'https://cdn0-production-images-kly.akamaized.net/zduBJnIwVqPxuvwEkK7Hpwe_WgE=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2984036/original/034006400_1575278238-Jumanji_The_Next_Level_Headline.jpg'),
(16, 'The Hobbits Holiday', '2021-08-08', '2 h 12 min', '["adventure","action","comedy"]', 'James B', '["dwayne Jhonson","Emma","Kevin H"]', 'Bla bla bla', 'https://cdn0-production-images-kly.akamaized.net/zduBJnIwVqPxuvwEkK7Hpwe_WgE=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2984036/original/034006400_1575278238-Jumanji_The_Next_Level_Headline.jpg'),
(17, 'The Hobbits Holiday 2', '2021-08-08', '2 h 12 min', '["adventure","action","comedy"]', 'James B', '["dwayne Jhonson","Emma","Kevin H"]', 'Bla bla bla', 'https://cdn0-production-images-kly.akamaized.net/zduBJnIwVqPxuvwEkK7Hpwe_WgE=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2984036/original/034006400_1575278238-Jumanji_The_Next_Level_Headline.jpg'),
(18, 'The Hobbits Holiday 2', '2021-08-08', '2 h 12 min', '["adventure","action","comedy"]', 'James B', '["dwayne Jhonson","Emma","Kevin H"]', 'Bla bla bla', 'https://cdn0-production-images-kly.akamaized.net/zduBJnIwVqPxuvwEkK7Hpwe_WgE=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2984036/original/034006400_1575278238-Jumanji_The_Next_Level_Headline.jpg');







INSERT INTO "public"."users" ("id", "first_name", "last_name", "phone_number", "email", "password", "photo_profile") VALUES
(19, 'POPOL ', 'Starlight', '08938239839', 'fany@gmail.com', '$2b$10$1cT/f2vfdFOLYZhIXeYSS.fd4lw6J53DVR16axD2S0df1i3mfKG6a', 'https://static.wikia.nocookie.net/violet-evergarden/images/a/ae/Violet_Evergarden.png/revision/latest/thumbnail/width/360/height/360?cb=20180209195829');
INSERT INTO "public"."users" ("id", "first_name", "last_name", "phone_number", "email", "password", "photo_profile") VALUES
(12, 'Tigreal', 'Baron', '08938239839', 'Tigreal@gmail.com', '$2b$10$UJ8Wh8AXCduPLd0LLV/Eu.gcRMKQ3lpXXCJKcXfyLuKkHpKoj18KO', 'https://static.wikia.nocookie.net/violet-evergarden/images/a/ae/Violet_Evergarden.png/revision/latest/thumbnail/width/360/height/360?cb=20180209195829');
INSERT INTO "public"."users" ("id", "first_name", "last_name", "phone_number", "email", "password", "photo_profile") VALUES
(13, 'Helcurt', 'Balck', '08938239839', 'helcurt@gmail.com', '$2b$10$LvPbgz.Rxn7EP0fsxVsBdekBrx53d6D7mwawRLRyhzhBt0qLv75r2', 'https://static.wikia.nocookie.net/violet-evergarden/images/a/ae/Violet_Evergarden.png/revision/latest/thumbnail/width/360/height/360?cb=20180209195829');
INSERT INTO "public"."users" ("id", "first_name", "last_name", "phone_number", "email", "password", "photo_profile") VALUES
(14, 'Hayabusa', 'Summer', '08938239839', 'hb@gmail.com', '$2b$10$3oaZ3P5kZ.GngOzi.mH3OuKRPNggVK.tbL4c3ELQh22RQh6/aRCly', 'https://static.wikia.nocookie.net/violet-evergarden/images/a/ae/Violet_Evergarden.png/revision/latest/thumbnail/width/360/height/360?cb=20180209195829'),
(18, 'Gord', 'Starlight', '08938239839', 'ling@gmail.com', '$2b$10$N0x1XrLnseimrCZIIdCIzOyzm9.poPIR7Bpkaw2qCqmkHPODfTgzm', 'https://static.wikia.nocookie.net/violet-evergarden/images/a/ae/Violet_Evergarden.png/revision/latest/thumbnail/width/360/height/360?cb=20180209195829'),
(17, 'Vexana', 'Starlight', '08938239839', 'vexana@gmail.com', '$2b$10$iKAj0VJzASbnVvxDeAxDfeWkC.0MLA8o2Ku3QLn9iCkMojp204ury', 'https://static.wikia.nocookie.net/violet-evergarden/images/a/ae/Violet_Evergarden.png/revision/latest/thumbnail/width/360/height/360?cb=20180209195829'),
(15, 'Hanabis', 'Starlight', '08938239839', 'hana@gmail.com', '$2b$10$gQbvtnkPl7aVMuDgxCePaOmvMebRPLZGV7KG9pKaQCbQRyyfwnYk6', 'https://static.wikia.nocookie.net/violet-evergarden/images/a/ae/Violet_Evergarden.png/revision/latest/thumbnail/width/360/height/360?cb=20180209195829');
