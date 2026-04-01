
const fs = require('fs-extra');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VU3bKiRhB+l7nFWkVBwKpTFcQfEH9AQNRULkYYYJQ/ZwYVt8575CpXqX2RZCuvlcJzzp69SDYnXA093f193f31fAZ5gSkyUQ0Gn0FJ8AUy1BxZXSIwAMMqihABLRBCBsEAnHRu6EvX3X4kER1389vFPUyH9FZgv8BC0BO8/dbL7M1Mj5/AcwuU1SHFwQ8S4lC4c3ShLWwX+1zgbMaWgCShHF7QRC6He+UsatJ9Ip86pyfw3GSEmOA8HpcJyhCBqYlqC2LyMfrVSqmVg+xm/npOKq2dtNM0E7SIxuah66J2cVqOJivKWG/3MfpEQSOu4+0Xcy/hAu5G+q4zIjCW72MOhn02StdU6Jv18Oa90Kc4zlFohChnmNUf7vvCbMvd+fB+GSLXWqa6E56rGeJ5SVSWV67rx3FmyKIWbbbCx4j3vQJP62hexmWmnzC0zbqQd51odFfHkUMmRlmka3JXoG18T9wib1o5/Z++X1VpEUGl72TSyoksN+T5IqzXx7K/k7h9ZBvr0W6k3DxjevoY/ci2t1SZ7oJNSHBp+dLE5u1qr4eypt07xnEymh5E5ewnJ/WdPmQV+RHLzax/S3ZFrXiz7uW0Vx1lF2xiaXf0d4c9v/Ws2SQYeiTU+aU+vAcGxPf5Ppdvh+4lKdd7LjmlftVbclqpydeLKd7slRvbT4+KTqg2QjDgn1uAoBhTRiDDRf6wCS0Aw4uDAoLYo7uAHctrXVgx1+bHuwo6OTe2p4e5ejQXnk/XC+7kLFUXrc6O/QRaoCRFgChFoY4pK0i9QJTCGFEw+PmXFsjRjb3MrUHr8S0QYUKZl1dlWsDwbahvlzAIiipnTp0HWnNABAw672bEGM5j2rSxyiEJEnxBWgIZBYMIphR9KxARFL7avkU3USFiEKcUDIC2uEfHmTAdm3lGZWE6VcexqsUqeEd7m9pLW7JIrvmRHZm3oPZpB+qFKYmrrSgpWMylpBfPBetGBEvoXJ/+IQkYAH9U+B1z3j6vUnG5mPp5/wzp2URRF20nu5nr3rNk3V0f2nZsb939XrqoRDuHpV2buw2Lgpnj1oZ/XuvCOBG4Y0rYnGrqU4MWogsO0PdgXpzziXEMa2zZd904LLSy6HDWmqkrf2SK482x1IuiZq5yj8qzkHi3zZKbkKG2qjknmbhbJQqHK1qsDdtc3iy00dpeHL/oKXsIGYdgALqiIIl9Ren2hM6A7/9EP12becCy/JQjBlogfbjxgqB0xX5P5Pv9XlduPJuLFshhkwz89fufX/749etvX7+At31JX98p/JBSA9f8Rhg91v417j/hXxrTyKvz3Poux+tD8i/LONzn7QWzO3pNt4uULKdJX6s4N+VQe1ftOSEUNG4kQ27ELRfg+fmXFihTyKKCZGAAYB6S4lEcKapGr0YeFT8A01TDGMex0VSeQsrU9x1wcYYog1kJBrwkiZ2e0pXlFy+LFKUOaQIGoJel/NEBLZDValk6DLK3lQJq803pGTz/DdHaMdhtBwAA';
const dev = process.env.OWNER_NUMBER || '254748387615';

const autostatusAutoviewStatus = process.env.AUTOVIEW_STATUS || 'true';
const autostatusAutoLikeStatus = process.env.AUTOLIKE_STATUS || 'true';
const autostatusAutoReplyStatus = process.env.AUTOREPLY_STATUS || 'false';
const autostatusStatusReplyText = process.env.STATUS_REPLY_TEXT || '✅ Status Viewed By ǤĦØŞŦ';
const autostatusStatusLikeEmojis = process.env.STATUS_LIKE_EMOJIS || '💛,❤️,💜,🤍,💙';

const botPrefix = process.env.PREFIX || "V";
const botAuthor = process.env.AUTHOR || "ǤĦØŞŦ";
const botexpiration = process.env.BOT_EXPIRATION_DATE || "11/03/2027";
const botUrl = process.env.BOT_PIC || "https://files.catbox.moe/9zqj7g.jpg";
const botGurl = process.env.BOT_GURL || "https://github.com/Keithkeizzah/KEITH-MD";
const botTimezone = process.env.BOT_TIMEZONE || "Africa/Nairobi";
const botBotname = process.env.BOTNAME || "ǤĦØŞŦ";
const botPackname = process.env.BOT_PACKNAME || "ǤĦØŞŦ";
const botMode = process.env.BOT_MODE || "private";
const botSessionName = process.env.BOT_SESSION_NAME || "keith-md";

const { Sequelize } = require('sequelize'); 
const DATABASE_URL = process.env.DATABASE_URL || './database.db'; 

const database = DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {  
  database,
  dev,
  session, 
  autostatusAutoviewStatus,
  autostatusAutoLikeStatus,
  autostatusAutoReplyStatus,
  autostatusStatusReplyText,
  autostatusStatusLikeEmojis,
  botPrefix,
  botAuthor,
  botUrl,
  botGurl,
  botTimezone,
  botBotname,
  botexpiration,
  botPackname,
  botMode,
  botSessionName
};
