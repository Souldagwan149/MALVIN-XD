const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Zokou-MD-WHATSAPP-BOT;;;=>eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUMvdTZtWmVEQWQ3K0hyNEpxWmhabmpKVGlSbkErdEJkdVhUQWZQdWwwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicEpoeVF1dTIyMzFRNU1oRkx5RngzV3g0Ri94V2NuT1VHMlF6eHpVYlJXcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhT08zV0FCUGpVSGpSYVVEMXoydmVoTHVudDlEekp4MUVBUzdhdSt6TzBVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTOXBjMTRYbHBOSFZNMEt4bllDbDYvamFZb3ZpWkFNSUNTTVdhTGxNdlRZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhJcEsvRDNlM3pTdEV4Z2tpQ3Q4ZXNBeUxvQVIrNDg1eis4TGNHYXdTSGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImY4UzJWVElaak5TMzlldGY4UXBOZ3UxbktnSzdDT2NvRklhNlNPRXhLUlE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid05kd09oQUZJU3J2blJMMG9hMlgzNW8yR3dJREhxeFdNeTYrbEE2ajMzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3IwS2szSThhSDBsazhlMkhiVDFybERxMGJ1VkMydEt3Ui9MY2U2QTRDWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFZbVJEZjcrL1hIWjl2ZEhuTkFXOGJNTEV2TW5pWnZFb0o3NUJuNG9EZFZJNUE4OEhXUk1BMDNiU1lCWEN0QTdtZ21haG81a25hWDlhNVAvLzAxOURBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg1LCJhZHZTZWNyZXRLZXkiOiI4akVhb0R6V1RESlNZaWhwUE1ubEhDS09LNG5MYnh5b051ZVhxOEtiU1Y0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzZzZsOGZDT1FMbU5LM05SRlRlY2h3IiwicGhvbmVJZCI6IjQ5Mzg3YWM1LTcyMTMtNDNkMS1iOTBhLWFjZjYyOTQwYjVhOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6b25ibXZKL2toQnp1ZmR3b2NPQitZVEtFZWs9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFTTXpuWnhrQmJudmp3SFZISXREZ290RnUwVT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pQR2dzOENFSTNQazc0R0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IktpemhRc3ZmMnlyYnJ4Ly8rUTZudmZIWENIbEJ1czlpakUzaGhLTm5IaXM9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImxKTS8rN1FzZm1xRkk4Mi80MC9mM2p5T3M5NVRYUXhmSWZtUHpKRHQ4Mnpna1V0M2tGcnJ0Y1ZKbXQxbFhUL0tWa0RQK2prVS9MbWcxNFpMditKdERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVZlZzTmoybHdpc3p4azExRkI1VkRHUGdUMDJ6NHBqdDFZdS9hSDZWSWNTNStpM2pIenVuTldEdHprOVYyS0lOa0dNazFQNi93ak52OFZ6WjUrRGpDQT09In0sIm1lIjp7ImlkIjoiMjIxNzgyMjczOTMwOjE1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTE3OTUyODA0MjkwNzQ1OjE1QGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjE3ODIyNzM5MzA6MTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCU29zNFVMTDM5c3EyNjhmLy9rT3A3M3gxd2g1UWJyUFlveE40WVNqWng0ciJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FnSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQwOTU3NTg0LCJsYXN0UHJvcEhhc2giOiIzZ1BVSmsifQ==",
// add your Session Id ,session id starts with MALVIN-XD~

PREFIX: process.env.PREFIX || ".",
// add your prifix for bot

BOT_NAME: process.env.BOT_NAME || "✦ᴍᴀʟᴠɪɴ xᴅ v2✦",
// add bot name here for menu

CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react   

STICKER_NAME: process.env.STICKER_NAME || "✦MALVIN-XD✦",
// type sticker pack name  

CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🔥,❤️‍🩹,❤️,🩷,🧡,💛,💚,💙,🩵,💜,🤎,🖤,🩶,🤍",
// chose custom react emojis by yourself 

DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

OWNER_NUMBER: process.env.OWNER_NUMBER || "263714757857",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "✦ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ🪀✦",
// add bot owner name

DESCRIPTION: process.env.DESCRIPTION || "> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ✦ɴᴇxᴜs ᴛᴇᴄʜ ɪɴᴄ✦*",
// add bot owner name    

ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/bddvfr.jpg",
// add img for alive msg

MENU_IMG: process.env.MENU_IMG || "https://files.catbox.moe/gld2vo.jpg",
// dont change menu image

LIVE_MSG: process.env.LIVE_MSG || "> ✦ᴍᴀʟᴠɪɴ xᴅ✦ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ᴍᴀʟᴠɪɴ xᴅ v2✦ ғʀᴏᴍ ɴᴇxᴜs ᴛᴇᴄʜ ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/kingmalvn/MALVIN-XD",
// add alive msg here 

READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs

ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words

AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 

AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto react on status (still testing)

AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*🎉👀 Status Seen by ✦ᴍᴀʟᴠɪɴ xᴅ v2🚀🔥✦*",
// set the auto reply massage on status reply    

MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 

AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices

AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 

HEART_REACT: process.env.HEART_REACT || "false",
// make this true or false for heart reactions only 

OWNER_REACT: process.env.OWNER_REACT || "true",
// make it true or fasle for only react on owner msg only 

ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
// maks true for always online 

PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod

AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   

AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 

FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
// make it true for fake recoding 

FAKE_TYPING: process.env.FAKE_TYPING || "false",
// make it true for fake typing

READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 

DEV: process.env.DEV || "263714757857",
//replace with your whatsapp number       
 
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 

ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 

CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
// make it true for current status 
};
