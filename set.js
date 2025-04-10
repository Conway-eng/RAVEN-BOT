/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVBEejBoa2RNY1E3VmpZaml1VjlzUEtSRUYwaGlBZFhLYzJRc0tOc1luaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibDh3Q3ZPY2dnYjQ5emZwbzlrV1M5RldFRHdqRXRZTVBnZFE4MWR0QWttND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBT0Zzc2NkTFRQN0ZINkt6V3JqV1EyeVQyVFZFUTJQRnhVWVp1UGo0OEVVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaWlEwQyswOXB2a3p0eHRVM0hEWHhjdVcxMFVWNVVFMEUwTTQreXFPRnl3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndIYkl0YkpkUDNnYm9PZFFNYUhCSzU2WlFYbHZ0dm5sdy9LUmIrQzM1VmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjgxYWxQRnJGelN1NDNaQWNWQUJyMWJHeW4xeFpBYUFwYzVacVRFYWprMVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia05WbEF1N0k2U3MxbzM5RXZLRkVCUkpCR2pLNEEzSXBtMTB2enVhVUltRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMzcra2Q2b0pMbEUyVEMwOFZrNmpYbWM3alI1d3JOSkpQVEFjdFJBSGQyOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNwWFlNQkhiUVhWNHN3cTFKV1VWK1JLL0YyNWFhenZhL3JGcWU0Zk80SDBxb09OWFVBUkd3WnpSZzlVY3czY3ZOVk92eVQvYitzazdrQTlXLysvM0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODMsImFkdlNlY3JldEtleSI6InV2WkNJL2RINUJUeklIMFdNZWRIQ285eTcyZUUxRmVlVGlXSXp2WnFzRVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzE4ODM1OTMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkU3ODFCRDZEODlDQzM1QUFBMzgxMjgzQjdGRDM0RjJDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDQyOTk2MDV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcxODgzNTkzM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyRUM5NkEzM0Y4OENDODFGMjgzNzdDQjg5QUFCODZDNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ0Mjk5NjA2fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3MTg4MzU5MzNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiOTIwQTNCNEQxMkIxMTE0M0JBN0RCN0YzQzU0ODQ2NjkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NDI5OTYzOH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzE4ODM1OTMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQyQzRGMUZDOTVENUQ0MkFGMDBCNkMxNTNEQ0QyNkE5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDQyOTk2NDl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcxODgzNTkzM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCMUFEMTRENDQwNDNFRTBFNjkyRjJDMzlGMjdBRjRFRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ0Mjk5NjQ5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJZTldCTm5TRVJOT3RyZjEyVWRrTHF3IiwicGhvbmVJZCI6IjE3ZGVmZmY2LTYwNTEtNGRjMi1hYjE5LTMzNjcxNTNiYWRiOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVMDJ0a3g1cGJ1RzBBM21mbVhZV2dUYzRxZjg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQU9qMForOVhyR2pTeUw3L1Mzb3hybXNBN09zPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik41WThYQjVFIiwibWUiOnsiaWQiOiIyNTQ3MTg4MzU5MzM6NDhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVW5rbm93biJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSXJ3dXNFQkVMN00zNzhHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZTRCMUFuTDZuTVFZckxQNDBKVjl3YWdtb2xZVjlOQXRGVjRlZXZSK1BDbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNWc2V05rYkdIcW4xblYwZmNBSWRtUVVMZ0M1dURoUGRnYXpqcFJIQWhMVDdPOWFQT2tESWl5Ukhud21JQm4yVzJsUFJUNnBCRUU4aUtVTzhDSm9qRFE9PSIsImRldmljZVNpZ25hdHVyZSI6Ik8yckxIcFFqSkQ3ZmZIM2l2NUV1ZFV3ak1BYzN3TFhYMjNraEUrOTZOS3grNlRQWnVBYmV0YTMvRlBacHYrZ3hBUTdGWnlabUFMZGgvTDloMlNaVUN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzE4ODM1OTMzOjQ4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlh1QWRRSnkrcHpFR0t5eitOQ1ZmY0dvSnFKV0ZmVFFMUlZlSG5yMGZqd3EifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDQyOTk1OTcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSWR2In0=';
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
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const antiforeign = process.env.ANTIFOREIGN || 'TRUE';
const port = process.env.PORT || 10000;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = { session, sessionName, autobio, author, packname, dev, DevRaven, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
