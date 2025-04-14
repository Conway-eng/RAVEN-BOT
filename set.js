/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNElRTWxudC9vL1h6TzV0cFp5eVFsblZMYjZ4R3dnOXBQZDhkWnVWYlAxND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZlU2UUhnRmJYUjdmVmxsUmkzcW1POGx4Y2FYcGgrNEozRkJJTDJ5YWdpMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTlhCNEU0ODJ4UXZGanpJcXNaZnVYV1FYM01KNDZrOFU2a0hLb0U2YjNBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXK0JkTTN0LzlnVDhXb3dNZEtzVGNxNHZjNG1MbDJodzVURjBraGM2WkhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhOUW1iNEdCcUQ3SjhZNWlzdm4vV3d5dDUySHM0VzVYOGJ1Rk1CYm4wVkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZIbWNXQ0lTMWtIVFpOaFR4MDh6KzUxaElDTGZvTXgydG1RVXY0dDBmV1k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaURJOWZSejIwMlR1MGxzY3BxWGpKWktNRGUyVzU0bnVqek5BaXk4QUxWcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1d3SUQ2R2R6c3U1OGJwR01Id0dQSmVHMXRKU0ZXTWtiMDZvdU0waUIyRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBSelJHNUdqV2lTYmJndjljSUhZUVRuSElnbUh2bHM3REhUSlQ4cXp1WWgzd09wckUveVlzdUdEeitTNWpMOHlqYTRjVnVya1ViTzA4bVdES2o3cGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA1LCJhZHZTZWNyZXRLZXkiOiJyZ0tmYXk0VTRDSmF0V1NXR1pHcmhDeWxHREwwTitlMm0xMjBvakVjN0xFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc4ODQwOTEwNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI3MEZFNUQwNkJCREI0NkRDRDYwNUYzMjk0OUI1MEI3RiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ0NjI0NjUxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3ODg0MDkxMDVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODgwM0RDNERBQTc5M0E5NjY5NjRFQjIxRDE2ODFFMTEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NDYyNDY2NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiamNfSjNGckJTNVdydzZYdDI2bkQ3QSIsInBob25lSWQiOiJmYTA5MmMzMS05MTAxLTRjNDctODQ2Ni1kMWVjYTQyMTEzMWQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWk5V2hwREVNTlNPMGhJYzlyZ2xMNitkWWlrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNTNS9zRUxFbFFra2JabnJLQUJSeGRDbHVFND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI3OU00VzQ3NiIsIm1lIjp7ImlkIjoiMjU0Nzg4NDA5MTA1OjUxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlPDrmd0cnlnZ3IgRXlzdGVpbm4gU2lndXLDsGFyc29uIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOcTdwN01DRVBPMzg3OEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWN1dMOGNrU05SSEh6WnVoUml6bVVJRS8vODdka1RBekhUdHJyYTlQd3lvPSIsImFjY291bnRTaWduYXR1cmUiOiJhc3FXbWNycEpMbXdyNlBuKzc0ZUwySjhaaTlLeFRhTHErSmI3MlAvSzZNMXU5MTAvZ1cwcmM1TzhTT1pXSS84b3NTajNBN0ttbFVGOTQ2cDBKY2tEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWnNGa2hnMmZuT3BTSUU0bitRbE9TQStpSWxpOXNTS2ZNVTRrNlBDNVdQc3V3VHhDZDc5Tng4ODJ4eFF5NXg3bjBVMTdta0hzS3ZyME1uMXpYaTdXamc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTQ3ODg0MDkxMDU6NTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVmUxaS9ISkVqVVJ4ODJib1VZczVsQ0JQLy9PM1pFd014MDdhNjJ2VDhNcSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NDYyNDY0MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDd24ifQ==';
const autobio = process.env.AUTOBIO || 'TRUE';
const autolike = process.env.AUTOLIKE_STATUS || 'FALSE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || '*';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PRIVATE';
const anticall = process.env.AUTOREJECT_CALL || 'TRUE';
const botname = process.env.BOTNAME || 'EMINEM-𝗕𝗢𝗧';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || 'EMINEM';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '254718835933';
const menu = process.env.MENU_TYPE || 'VIDEO';
const DevRaven = dev.split(",");
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'TRUE';
const antidel = process.env.ANTIDELETE || 'TRUE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || 'rada ghasia hii!';
const NotOwner = process.env.NOT_OWNER_MSG || 'nini inakuwasha umbwaaaa hii!';
const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const antiforeign = process.env.ANTIFOREIGN || 'TRUE';
const port = process.env.PORT || 10000;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = { session, sessionName, autobio, author, packname, dev, DevRaven, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
