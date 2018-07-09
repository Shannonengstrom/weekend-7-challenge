CREATE TABLE "feedback" (
  "id" serial primary key,
  "q1" INT not null,
  "q2" INT not null,
  "q3" INT not null,
  "q4" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

INSERT INTO "feedback" ("q1", "q2", "q3", "q4")
VALUES (4, 4, 5, 'Doing Great!');

DELETE FROM "feedback" WHERE id=12;