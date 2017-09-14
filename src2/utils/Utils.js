/**
 * Created by user on 2017/9/4.
 */
// const moment = require('moment-timezone');
// const getBeiJingTime = (timeStamp)=>{
//     var c = moment.tz(timeStamp, "Asia/Shanghai");
//     var timsStr = c.format("YYYY,MM,DD,e,HH,mm,ss,a").split(',');
//     return {
//         year:timsStr[0],
//         month:timsStr[1],
//         day:timsStr[2],
//         week:timsStr[3],
//         hour:timsStr[4],
//         minute:timsStr[5],
//         second:timsStr[6],
//         pm:timsStr[7]
//     }
// };
//
// module.exports = {
//     getBeiJingTime:getBeiJingTime
// };

const getTime = (timeStamp)=>{
    var time = new Date(timeStamp);
    return {
        year:time.getFullYear(),
        month:time.getMonth()+1,
        day:time.getDate(),
        week:time.getDay(),
        hour:time.getHours(),
        minute:time.getMinutes(),
        second:time.getSeconds()
    }
};

module.exports = {
    getTime:getTime
};