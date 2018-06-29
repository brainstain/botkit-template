module.exports = function(controller, limiter) {
    console.log("conversations skill");
  
    //SMALL TALK
    controller.hears(['.*'], ['direct_message'], function(bot, message) {
      console.log(message.watsonData);
      bot.reply(message, message.watsonData.output.text[0]);
    });
  }