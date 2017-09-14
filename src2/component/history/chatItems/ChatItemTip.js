/**
 * Created by user on 2017/8/8.
 */
import React, { Component } from 'react';
import Global , { Type,Utils } from '../../../utils/Global';

export default class ChatItemTip extends Component{
    formatTime(timeStamp){
        const time = Utils.getTime(timeStamp);
        const nowTime = Utils.getTime(new Date().getTime());
        if(time.year == nowTime.year && time.month == nowTime.month && time.day == nowTime.day){
            if(parseInt(time.hour) + 1 > parseInt(nowTime.hour)){
                return time.hour + ":" + time.minute + ' '
            }else {
                return '今天 ' + time.hour + ":" + time.minute + ' '
            }
        }else{
            return time.month + '月' + time.day + '日 ' + time.hour + ":" + time.minute + ' ';
        }
    }
    render(){
        let text = '';
        if(this.props.msg.content.type == Type.SYS_MSG_ELEM.SYS_CUSTOMER_JOIN){
            //加入会话
            text = this.props.msg.sender.name + '进入客服会话';
        }
        else if(this.props.msg.content.type == Type.SYS_MSG_ELEM.SYS_SERVICE_START){
            //开始服务
            text = this.props.msg.sender.name + '接待';
        }
        else if(this.props.msg.content.type == Type.SYS_MSG_ELEM.SYS_EVALUATE_START){
            //发起评价
            text = this.props.msg.sender.name + '发起服务评价';
        }
        else if(this.props.msg.content.type == Type.SYS_MSG_ELEM.SYS_CUSTOMER_EVALUATE){
            //用户评价
            text = this.props.msg.sender.name + '评价服务';
        }
        else if(this.props.msg.content.type == Type.SYS_MSG_ELEM.SYS_SERVICE_END){
            //服务结束
            text = '本次服务结束';
        }
        return (
            <div className="chat_item_tips">
                {this.formatTime(this.props.msg.timestamp)}{this.props.msg.content.text}
            </div>
        )
    }
}