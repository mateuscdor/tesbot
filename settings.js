const fs = require('fs')
const chalk = require('chalk')


global.thumb = fs.readFileSync('./media/imgnya.jpg')
global.ownerNumber = ['6283815956151','6283899137143']
global.ownerName = '© FxSx'
global.packname = 'RoF3X-Bot [MD]'
global.author = '© FxSx'
global.prefa = ['','!','#','&','/','.']
global.sessionName = 'sesi'
global.mess = {
       admin: '*Fitur Khusus Admin Grup*',
       botAdmin: '*Jadikan Bot Admin Terlebih Dahulu*',
       botOwner: '*Fitur Khusus Owner*',
       group: '*Fitur Khusus Group*',
       private: '*Fitur Khusus Private Chat*',
       wait: '*Diproses...*',
       sukses: '*Sukses*',
       error: '*Error*'
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})