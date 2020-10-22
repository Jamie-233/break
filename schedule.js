// 处理定时任务
const schedule = require('node-schedule');
const { NotificationCenter } = require('node-notifier');
const notifyer = new NotificationCenter();

schedule.scheduleJob('*/5 * * * * *', function(){
  console.log('exec');
  notifyer.notify({message: 'Hi', wait: true});
});
