/**
 * Created by user on 2017/8/8.
 */
import React, { Component } from 'react'
import qqWechatEmotionParser from '../../../lib/EmojiParser';

export default class ChatItemText extends Component{
    render(){
        const className = this.props.msg.isKH ? 'chat_item' : 'chat_item self';
        return(
            <div className={className}>
                <div className="chat_item_left">
                    <img className="chat_item_head" src={this.props.msg.sender.headImgUrl} alt=""/>
                </div>
                <div className="chat_item_right">
                    <div className="chat_item_name">{this.props.msg.sender.name}</div>
                    <div className="chat_item_text">
                        <div className="chat_item_triangle"></div>
                        <span dangerouslySetInnerHTML = {{__html:qqWechatEmotionParser(this.props.msg.content.text)}}></span>
                    </div>
                </div>
            </div>
        )
    }
}