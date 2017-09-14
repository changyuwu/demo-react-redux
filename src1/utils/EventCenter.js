/**
 * Created by user on 16/11/18.
 */
// var EventCenter = {
//     _listeners: {},
//     // 添加
//     addListener: function(type, fn) {
//         if (typeof this._listeners[type] === "undefined") {
//             this._listeners[type] = [];
//         }
//         if (typeof fn === "function") {
//             this._listeners[type].push(fn);
//         }
//         return this;
//     },
//     // 触发
//     emit: function(type,data) {
//         var arrayEvent = this._listeners[type];
//         if (arrayEvent instanceof Array) {
//             for (var i=0, length=arrayEvent.length; i<length; i+=1) {
//                 if (typeof arrayEvent[i] === "function") {
// //                        arrayEvent[i]({ type: type });
//                     arrayEvent[i](data);
//                 }
//             }
//         }
//         return this;
//     },
//     // 删除
//     removeListener: function(type, fn) {
//         var arrayEvent = this._listeners[type];
//         if (typeof type === "string" && arrayEvent instanceof Array) {
//             if (typeof fn === "function") {
//                 // 清除当前type类型事件下对应fn方法
//                 for (var i=0, length=arrayEvent.length; i<length; i+=1){
//                     if (arrayEvent[i] === fn){
//                         this._listeners[type].splice(i, 1);
//                         break;
//                     }
//                 }
//             } else {
//                 // 如果仅仅参数type, 或参数fn邪魔外道，则所有type类型事件清除
//                 delete this._listeners[type];
//             }
//         }
//         return this;
//     }
// };
// module.exports = EventCenter;
var EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
module.exports = myEmitter;
