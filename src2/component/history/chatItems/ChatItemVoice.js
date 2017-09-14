/**
 * Created by user on 2017/8/8.
 */
import React, { Component } from 'react'

export default class ChatItemVoice extends Component{
    constructor(p){
        super(p);
        this.state = {
            playing:false
        };
        this.audio = document.createElement('audio');
    }

    static VoiceThis = null;

    clickVoice = ()=>{
        const isSelfPlaying = this.state.playing ;
        ChatItemVoice.VoiceThis && ChatItemVoice.VoiceThis.pauseVoice();
        if(isSelfPlaying)return;
        const url = this.props.msg.content.voice;
        ChatItemVoice.VoiceThis = this;
        this.audio.src = url;
        this.audio.play();
        this.setState({
            playing:true
        });
        this.audio.addEventListener('ended', this.playingEvent, false);
    };
    pauseVoice = ()=>{
        this.audio.pause();
        this.audio.currentTime = 0;
        this.setState({
            playing:false
        });
        this.audio.removeEventListener('ended', this.playingEvent, false);
    };
    playingEvent = ()=>{
        this.setState({
            playing:false
        })
    };
    formatDuration = ()=>{
        let time = this.props.msg.content.duration,h,m,s;
        h = parseInt(time/3600);
        m = parseInt((time - 3600*h)/60);
        s = time - 3600*h - 60*m;
        if(m>0) return m+'\''+s+'\"';
        return s + '\"';

    };
    render(){
        const picture = this.state.playing ? '/conversation/admin/images/voice_playing.gif' : '/conversation/admin/images/voice_no_play.png'
        const className = this.props.msg.isKH ? 'chat_item' : 'chat_item self';
        return(
            <div className={className}>
                <div className="chat_item_left">
                    <img className="chat_item_head" src={this.props.msg.sender.headImgUrl} alt=""/>
                </div>
                <div className="chat_item_right">
                    <div className="chat_item_name">{this.props.msg.sender.name}</div>
                    <div className="chat_item_voice_con">
                        <div className="chat_item_voice" onClick={this.clickVoice}>
                            <div className="chat_item_triangle"></div>
                            <img src={picture} alt=""/>
                        </div>
                        <div className="chat_item_voice_time">
                            {this.formatDuration()}
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}