import { Telegraf } from 'telegraf';

const bot = new Telegraf('7909476171:AAHyr8ebpPdC7IqHKe5gnLaXroHEWBvc_dA');

const comments = [
    "Вау-вау-вау, какая красота!",
    "Как круто!",
    "Это просто невероятно!",
    "Впечатляет, продолжай в том же духе!",
    "Замечательный пост!",
    "Какая интересная мысль!",
    "Прекрасный пример!",
    "Очень вдохновляюще!",
    "Потрясающе, спасибо за пост!",
    "Этот пост точно запомнится!"
];

function getRandomComment() {
    return comments[Math.floor(Math.random() * comments.length)];
}

bot.on('message', (ctx) => {
    const messageText = ctx.message.text;
    const chatId = ctx.chat.id;

    console.log(`New message in group: ${messageText}`);
    console.log(`Group ID: ${chatId}`);

    const comment = getRandomComment();

    ctx.reply(comment)
        .then(() => {
            console.log('Comment sent in the group');
        })
        .catch((error) => {
            console.error('Failed to send comment:', error);
            if (error.code === 403) {
                console.log('The bot has been kicked from the group or does not have permission to send messages.');
            }
        });
});

export function startBot() {
    bot.launch()
        .then(() => {
            console.log('THE BOT HAS STARTED SUCCESSFULLY!');
        })
        .catch((error) => {
            console.error('Error to launch the bot:', error);
        });
    console.log("Your bot is running");
}
