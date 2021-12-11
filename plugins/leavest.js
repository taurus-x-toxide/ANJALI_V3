const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://firebasestorage.googleapis.com/v0/b/photo-to-link.appspot.com/o/945282193?alt=media&token=5d13aa55-b0d7-47d6-b492-5675e6327485";
  r_text[1] = "https://firebasestorage.googleapis.com/v0/b/photo-to-link.appspot.com/o/89675337?alt=media&token=44cf648e-1543-4990-8e65-6e9a4458ed12";   
  r_text[2] = "https://firebasestorage.googleapis.com/v0/b/photo-to-link.appspot.com/o/681277785?alt=media&token=87f207fc-c7c7-4903-8366-2d3bdc17fa67";   


    var i = Math.floor(3*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐌𝐔𝐇𝐀𝐌𝐌𝐄𝐃*


☘︎ *ᴛᴏ ᴄʜᴇᴄᴋ ᴜᴘᴅᴀᴛᴇ ᴛʏᴘᴇ .ᴜᴘᴅᴀᴛᴇ*



☘︎ *ʜᴏᴡ ᴛᴏ ᴜᴘᴅᴀᴛᴇ .ᴜᴘᴅᴀᴛᴇ ɴᴏᴡ*



☘︎ *ʜᴏᴡ ᴛᴏ ᴍᴀᴋᴇ ʙᴏᴛ : https://youtu.be/4mWfR23qFuA .*



☘︎ *ʜᴏᴡ ᴛᴏ ᴍᴀᴋᴇ ʜᴇʀᴏᴋᴜ ᴀᴄᴄᴏᴜɴᴛ : https://youtu.be/6XqkkTfAriQ .*



☘︎ *ɢɪᴛʜᴜʙ ʟɪɴᴋ : http://www.github.com/taurus-x-toxide/ANJALI_V3.*



☘︎ *ᴀᴜᴅɪᴏ ᴄᴏᴍᴍᴀɴᴅs : https://github.com/taurus-x-toxide/ANJALI_V3/tree/master/uploads .*



☘︎ *sᴛɪᴄᴋᴇʀ ᴄᴏᴍᴍᴀɴᴅs : https://github.com/taurus-x-toxide/ANJALI_V3/tree/master/sticker .*



☘︎ *ᴡʜᴀᴛsᴀᴘᴘ ɢʀᴏᴜᴘ : https://chat.whatsapp.com/LSUcvkFluKRG5j6aU0Oznz .*



☘︎ *ᴛᴀᴜʀᴜs sᴇʀ : wa.me/918157849715?&text=ʜɪ%20ᴍᴜʜᴀᴍᴍᴇᴅ%20❤︎*



☘︎ *ᴛᴏxɪᴅᴇ sᴇʀ : wa.me/919048329892?&text=ʜɪ%20ᴀᴋsʜᴀʏ%20❤︎*


*Ⓒ︎2021 MUHAMMED AND AKSHAY*


`}) 

}));
