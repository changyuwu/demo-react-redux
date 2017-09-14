/**
 * Created by user on 2017/9/5.
 */
import React, { Component } from 'react';
import { Request } from '../../utils/Global';

export default class ChaterInfo extends Component{
    state = {
        avatar:'/conversation/admin/images/head1.jpg',
        nickname:'获取中...',
        sex:'获取中...',
        address:'获取中...',
        remark:'获取中...',
        device:'获取中...',
        showEdit:false,
        ajax_ing:false,
        value:''
    };
    componentDidMount(){
        this.getData(this.props.room_id);
    }
    getData(room_id){
        Request.SendRequest(
            'customer_info','POST',
            {customer_id:this.props.customer_id},
            (res)=>{
                if(res.state == 200){
                    this.setState({
                        avatar:res.data.avatar,
                        nickname:res.data.nickname,
                        sex:res.data.sex,
                        address:res.data.address,
                        remark:res.data.remark?res.data.remark:'暂无备注',
                        device:'iphone7',
                        value:res.data.remark ? res.data.remark : ''
                    })
                }else{
                    alert('获取个人信息失败,'+res.message);
                }
            },
            ()=>{
                alert('获取个人信息失败,请求失败');
            })
    }
    render(){
        return(
            <div className="chater">
                <div className="chat_chater_msg">
                    <div className="chater_msg_title">客户信息</div>
                    <div className="chater_msg_content">
                        <div className="chater_msg_head">
                            <img className="chater_msg_head_image" src={this.state.avatar} alt=""/>
                        </div>
                        <div className="chater_msg_name">{this.state.nickname}</div>
                        <div className="chater_msg_item">
                            <span className="chater_msg_item_name">性别:</span>
                            <span className="chater_msg_item_content">{this.state.sex}</span>
                        </div>
                        <div className="chater_msg_item">
                            <span className="chater_msg_item_name">地址:</span>
                            <span className="chater_msg_item_content">{this.state.address}</span>
                        </div>
                        <div className="chater_msg_item">
                            <span className="chater_msg_item_name">终端:</span>
                            <span className="chater_msg_item_content">{this.state.device}</span>
                        </div>
                        <div className='chater_msg_item'>
                            <span className="chater_msg_item_name">备注: </span>
                            <span className="chater_msg_item_content">{this.state.remark}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}