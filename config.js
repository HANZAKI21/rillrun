//=============ã Utama ã================== //
global.owner = ['6285706735450'] 
global.mods = [] 
global.prems = [] 

//=============ã Info Owner ã============== //
global.nameowner = 'verdi [Jangan chat owner kalo cwek gppð¦]'
global.numberowner = '6285706735450'
global.instagram = 'https://instagram.com/'
global.github = 'https://github.com/VERDIBOTZ1'
global.dana = '0'
global.pulsa = '0'
global.gopay = 'Coming soon'

//=============ã Info Bot ã=================//
global.namebot = 'XziroID'
global.gc = 'https://chat.whatsapp.com/JEDQfzMGZan4HA98wtxsNL'
global.web = 'https://games.vercel.app' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.price1 = '1 bulan = 10.000\n2 Minggu 7.000\n1 Minggu 5.000'

//=======ã Tampilan Dan Lainnya ã============//
global.fotonya1 = 'https://telegra.ph/file/e4a2f4339da8a32ad20a1.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://telegra.ph/file/0a08fbd322e2347d4c45b.jpg' //ini juga ganti 
global.lolkey = 'Papah-Chan' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'BagasPrdn' //ganti jadi apikey lu kalau expired
global.wm = 'Â© VERDI.xzy'
global.watermark = wm
global.wm2 = '            ã Â© Made with â¥ by VERDI.XCPâ© ã'
global.wm3 = 'Â© VERDI.xzy'
global.htki = 'ââââââã' 
global.htka = 'ãââââââ'
global.media = 'https://telegra.ph/file/72168c6f1aaa90315c369.jpg'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wait = '_*Tunggu sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar â\n'
global.salah = 'Salah â\n'
global.stiker_wait = 'â«¹â«º Stiker sedang dibuat...'
global.packname = 'â«¹â«º Made with'
global.author = 'Â© Bot Sticker\nBy VERDI\n\nig:.0\n\nÂ© XZIROID'

//=============ã Apikey ã================== //
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
    bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'elaina',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais-api.herokuapp.com': 'apikeymu',
  'https://api.lolhuman.xyz': 'Deffbotz',
}

//=============ã RPG GAMES ã================== //
global.multiplier = 69 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: 'âï¸',
      money: 'ðµ',
      potion: 'ð¥¤',
      diamond: 'ð',
      common: 'ð¦',
      uncommon: 'ð',
      mythic: 'ð³ï¸',
      legendary: 'ðï¸',
      pet: 'ð',
      sampah: 'ð',
      armor: 'ð¥¼',
      sword: 'âï¸',
      kayu: 'ðªµ',
      batu: 'ðª¨',
      string: 'ð¸ï¸',
      kuda: 'ð',
      kucing: 'ð' ,
      anjing: 'ð',
      petFood: 'ð',
      gold: 'ð',
      emerald: 'ð'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//===========ã Jangan Di Ubah ã================ //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
