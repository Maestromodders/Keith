
const fs = require('fs-extra');
const path = require('path');

if (fs.existsSync('set.env')) {
    require('dotenv').config({ path: __dirname + '/set.env' });
}

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VUyZKjRhD9l7qiGLEJhCI6wjRCEkJoRwsOH0pQoEJsqioQaKL/wyefHPMj9oR/y0Ev03Owx21ORVZmvpeZL+szyHJMkY0aMPgMCoIryFB7ZE2BwAA8lmGICOiAADIIBuBm9E7RJB0v0kKfzjjc7TdIxFdDSW1+yMU1vXpN7TXx0NUfwFMHFOUpwf4PEvZFRZFWu4UnW5v7cOH2sqs9yXaTbv9aGCpX+7hoYo/nfcl8AE9tRogJziKzOKMUEZjYqFlCTD5GP5+k3eVOoWp/HZ5WW/9ii1c93kfm7l5F0JICLpMUmYvDi/Ux+henDqcbf+32xkfaPZC1cXaFaCnhQtFGgaVODsEwhTNY8dYLfYqjDAVWgDKGWfPhvjv23oKj8uZa/WgX2PPtzH287NHlFNbwNDyJM3O4tGfwlEnyx4ifXSUoNGt9fIzjsyRG93XmTDlxjgNtf+wmQ8KP2byeRUmcf098Sd60cvk/fW+Wq53SiK7YLOuwZ1b6QmWPF1KrRlDRUKv0S7eWStcyJf5j9NEx0Nz0nDiYl+/2OLHwUHNOl41Ph8jGasnxp+I+79Y74/JOH7KS/IjlMHdujY1LfrzIsKeRUCv6UIZuszGrywhSPR8qwqy8SpvEv5f3ZG3D+XVU+6ueGPFKHeRTzO8fK29kXyg+K8IyxyzWH54ruqDGCsBAeOoAgiJMGYEM51lrE4V+B8Cg2iCfIPbcXqCsG6Jub3pUmeve1ZzKuiAcROwxbuQa51oR8tluuugtZWI+gA4oSO4jSlEwwZTlpHEQpTBCFAx+/qUDMlSzl8G1cJLQASEmlLlZWSQ5DN6m+nYJfT8vM7ZpMt9oD4iAAf9uRozhLKJtH8sMEv+MK2ScIaNgEMKEom8VIoKCV9u36DYqQAzihIIBMBwpjKfy2HS2akPl8Vg3I92IdPCO9ja2l7akYb8RhqvQrv1mT3k4yW21tzj0VA33MvUsRTN5WRN5KfO3h39IAgZAI+MDowwuNBO7OYzW19tROI7i0NgvPXt6JrNxOJdCQz2nTex4CnZPx0gLHX+48Ncu9swjskTfO3jJ9q4FFV88upx+e2jRAlRhH30PptZVkk4Ot2NBZ7fKWzlKXIkjd1tS6+ax2l7Lk7Th0Ugxrbk+ms+wtJ+uCy6VN+vKoQ6upqEcJ+P+ji125MQRY+2s4tuLoNJnJeMADIDYk9WeommiJPMDQf2Jfrq184BF8SlDDHRA8uwmyLIm9hSpJyiKJPZbz/aiAzLYJgN//f7nlz9+/frb1y/gbWGS14cKP0uphWt/Q4ye9/417j/hXxrTyot/6nyX4/Ul+ZdtfPSyrsNW/KShBych8/FZMUpum3Coeyw9Tg5kgxv2ITfk5g54evqlA4oEsjAnKRgAmAUkfy6O5GWrVysL8x+AGbplmVFktZUnkDL9fQe2OEWUwbQAA0FVe7LQ70vKi9eS5MUE0jMYAClNhHgDOiBt9KLYMMjeVgro7bf0ZPD0Ny4JhLJuBwAA';
const dev = process.env.OWNER_NUMBER || '254756992340';

const autostatusAutoviewStatus = process.env.AUTOVIEW_STATUS || 'true';
const autostatusAutoLikeStatus = process.env.AUTOLIKE_STATUS || 'true';
const autostatusAutoReplyStatus = process.env.AUTOREPLY_STATUS || 'false';
const autostatusStatusReplyText = process.env.STATUS_REPLY_TEXT || '✅ Status Viewed By ǤĦØŞŦ';
const autostatusStatusLikeEmojis = process.env.STATUS_LIKE_EMOJIS || '💛,❤️,💜,🤍,💙';

const botPrefix = process.env.PREFIX || "V";
const botAuthor = process.env.AUTHOR || "ǤĦØŞŦ";
const botexpiration = process.env.BOT_EXPIRATION_DATE || "11/03/2027";
const botUrl = process.env.BOT_PIC || "https://files.catbox.moe/cv6t5y.jpeg";
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
