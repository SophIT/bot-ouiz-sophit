const TelegramAPI = require('node-telegram-bot-api')

const token = '5027131658:AAHunK-oQBHQj00RszkFg1vRxe_Ty6VmoyY'

const bot = new  TelegramAPI(token, {polling: true})

bot.setMyCommands([
    {command: '/start', description: 'Начальное приветсвие'},
    {command: '/info', description: 'Получить информацию о пользователе'}
])
bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    if (text === '/start'){
        await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/697/ba1/697ba160-9c77-3b1a-9d97-86a9ce75ff4d/3.webp')
        await bot.sendMessage(chatId, 'Добро пожаловать на бот канал! Тебе здесь рады (нет)')
    }
    if (text === '/info'){
        await bot.sendMessage(chatId, 'Тебя зовут ' + msg.from.first_name + ' ' + msg.from.username)
    }

})