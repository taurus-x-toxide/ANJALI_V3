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

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*ððððððð ðð ðððððððð*


âï¸ *á´á´ á´Êá´á´á´ á´á´á´á´á´á´ á´Êá´á´ .á´á´á´á´á´á´*



âï¸ *Êá´á´¡ á´á´ á´á´á´á´á´á´ .á´á´á´á´á´á´ É´á´á´¡*



âï¸ *Êá´á´¡ á´á´ á´á´á´á´ Êá´á´ : https://youtu.be/4mWfR23qFuA .*



âï¸ *Êá´á´¡ á´á´ á´á´á´á´ Êá´Êá´á´á´ á´á´á´á´á´É´á´ : https://youtu.be/6XqkkTfAriQ .*



âï¸ *É¢Éªá´Êá´Ê ÊÉªÉ´á´ : http://www.github.com/taurus-x-toxide/ANJALI_V3.*



âï¸ *á´á´á´Éªá´ á´á´á´á´á´É´á´s : https://github.com/taurus-x-toxide/ANJALI_V3/tree/master/uploads .*



âï¸ *sá´Éªá´á´á´Ê á´á´á´á´á´É´á´s : https://github.com/taurus-x-toxide/ANJALI_V3/tree/master/sticker .*



âï¸ *á´¡Êá´á´sá´á´á´ É¢Êá´á´á´ : https://chat.whatsapp.com/LSUcvkFluKRG5j6aU0Oznz .*



âï¸ *á´á´á´Êá´s sá´Ê : wa.me/918157849715?&text=ÊÉª%20á´á´Êá´á´á´á´á´%20â¤ï¸*



âï¸ *á´á´xÉªá´á´ sá´Ê : wa.me/919048329892?&text=ÊÉª%20á´á´sÊá´Ê%20â¤ï¸*


*â¸ï¸2021 MUHAMMED AND AKSHAY*


`}) 

}));
