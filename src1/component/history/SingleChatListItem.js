/**
 * Created by user on 2017/8/7.
 */
import React, { Component } from 'react'
import {ChatItemText,ChatItemImage,ChatItemVoice,ChatItemTip} from './chatItems'
import { Type } from '../../utils/Global';
export default class SingleChatListItem extends Component{
    render(){
        if(this.props.msg.messageType == Type.MSG.CHAT_MSG && this.props.msg.content.type == Type.MSG_ELEM.TEXT_ELEM){
            return <ChatItemText msg={this.props.msg}/>
        }
        else if(this.props.msg.type == 'system'){
            return <ChatSystem msg={this.props.msg}/>;
        }
        else if(this.props.msg.messageType == Type.MSG.CHAT_MSG && this.props.msg.content.type == Type.MSG_ELEM.VOICE_ELEM){
            return <ChatItemVoice msg={this.props.msg}/>;
        }
        else if(this.props.msg.messageType == Type.MSG.CHAT_MSG && this.props.msg.content.type == Type.MSG_ELEM.IMG_ELEM){
            return <ChatItemImage msg={this.props.msg}/>;
        }
        else if(this.props.msg.type == 'assess'){
            return <ChatAccess msg={this.props.msg}/>;
        }
        else if(this.props.msg.messageType == Type.MSG.SYSTEM){
            //加入会话
            return <ChatItemTip msg={this.props.msg}/>
        }
        else{
            return <div></div>
        }
    }
}