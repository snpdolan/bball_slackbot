/**
 * General plan -
 * Run node daily (heroku scheduler http://www.modeo.co/blog/2015/1/8/heroku-scheduler-with-nodejs-tutorial)
 * GET MLB data
 *  currently hard coded to red sox and yankees, make dynamic in the future
 * Based on result, send slackbot message
 */


const webhookToSlack = require('./webhookToSlack');
const checkMlbGames = require('./mlbGames');

const {SLACK_CHANNEL_URL, MEMBER_ID, MY_TEAM} = require('./config');

//checkMLbGames defaults to using NY Yankees code
const gameResultMessage = MY_TEAM == '' ? checkMlbGames() : checkMlbGames(MY_TEAM);
const slackbot = webhookToSlack();

// red sox win, lose, tie
// yankees win, lose, tie

slackbot.sendMessage(SLACK_CHANNEL_URL, `TEST: ${gameResultMessage}`, MEMBER_ID);