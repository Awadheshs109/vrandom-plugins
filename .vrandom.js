const {Function,isPublic, getJson, getBuffer,prefix} = require("../lib/");
Function({pattern: 'vrandom ?(.*)', fromMe: isPublic, desc: 'vrandom status videos', type: 'anime'}, async (m, text, client) => {
let { result} = await getJson ('https://raw.githubusercontent.com/mask-sir/api.mask-ser/main/Naruto.json')
let mask = result[Math.floor(Math.random()*result.length)]
const buttons = [
  {buttonId: prefix + 'vrandom', buttonText: {displayText: 'next'}, type: 1}]

const buttonMessage = {
    video: {url: mask},
    caption: "*vrandom*",
    footer: 'Sharma-bot',
    buttons: buttons,
    headerType: 4
}

client.sendMessage(m.jid, buttonMessage)
});
