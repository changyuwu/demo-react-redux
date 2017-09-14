/**
 * Created by user on 2017/9/5.
 */
import React, { Component } from 'react';
import { Request } from '../../utils/Global';
import { connect } from 'react-redux';
import { CustomerHistoryActions } from '../../actions';

class ChaterInfo extends Component{
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(CustomerHistoryActions.get_customer_info())
    }
    render(){
        const _default = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1505299868709&di=ee9373972098619b985475e6ad373580&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F12%2F60%2F07%2F80bOOOPICe5_1024.jpg';
        const { avatar,nickname,sex,address,device,remark } = this.props.customer_info;
        return(
            <div className="chater">
                <div className="chat_chater_msg">
                    <div className="chater_msg_title">客户信息</div>
                    <div className="chater_msg_content">
                        <div className="chater_msg_head">
                            <img className="chater_msg_head_image" src={ avatar != undefined ? avatar : _default } alt=""/>
                        </div>
                        <div className="chater_msg_name">{ nickname != undefined ? nickname : '获取中'}</div>
                        <div className="chater_msg_item">
                            <span className="chater_msg_item_name">性别:</span>
                            <span className="chater_msg_item_content">{sex != undefined ? sex : '获取中'}</span>
                        </div>
                        <div className="chater_msg_item">
                            <span className="chater_msg_item_name">地址:</span>
                            <span className="chater_msg_item_content">{address != undefined ? address : '获取中'}</span>
                        </div>
                        <div className="chater_msg_item">
                            <span className="chater_msg_item_name">终端:</span>
                            <span className="chater_msg_item_content">{ device != undefined ? device : '获取中'}</span>
                        </div>
                        <div className='chater_msg_item'>
                            <span className="chater_msg_item_name">备注: </span>
                            <span className="chater_msg_item_content">{remark != undefined ? remark : '获取中'}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        customer_info:state.history.customer_info
    }
};
export default connect(mapStateToProps)(ChaterInfo);