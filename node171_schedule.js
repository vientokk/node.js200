//npm i node-schedule
const schedule = require('node-schedule');

const date = new Date(2023, 04, 13, 06, 28, 00);

console.log(date);

const j = schedule.scheduleJob(date, () => {
    console.log('no pain, no gain');
});

const rule = new schedule.RecurrenceRule();
rule.minute = 30;

const k = schedule.scheduleJob(rule, () => {
    console.log('Laziness is nothing more than the habit of resting before you get tired.');
})