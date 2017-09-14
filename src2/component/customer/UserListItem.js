/**
 * Created by user on 2017/9/4.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CommonActions } from '../../actions';

class UsetListItem extends Component{

    clickChat = ()=>{
        const { dispatch,user } = this.props;
        dispatch(CommonActions.handleCurrentCustomer(user));
    };
    render(){
        return(
            <div className="user_list_item">
                <div className="user_list_item_top">
                    <div className="user_list_item_left">
                        <img src={this.props.user.avatar} alt=""/>
                    </div>
                    <div className="user_list_item_right">
                        <div className="ls_table">
                            <div className="ls_table_inner">
                                <div className="name">
                                    {this.props.user.nickname}
                                </div>
                                <div className="time">{this.props.user.created_at}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="user_list_item_bottom">
                    <span onClick={this.clickChat}>查看会话</span>
                </div>
            </div>
        )
    }
}
export default connect()(UsetListItem);