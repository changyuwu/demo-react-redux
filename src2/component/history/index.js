/**
 * Created by user on 2017/9/12.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CommonActions,CustomerHistoryActions } from '../../actions';
import HistoryChatList from './HistoryChatList';
import ChaterInfo from './ChaterInfo';

class CustomerHistory extends Component{
    clickClose = ()=>{
        const { dispatch } = this.props;
        dispatch(CommonActions.handleCurrentCustomer(null));
        dispatch(CustomerHistoryActions.clear_history());
    };
    componentDidMount(){
        const { history } = this.props;
        console.log(history)
    }
    render(){
        const { customer } = this.props;
        return(
            <div className="history">
                <div className="history_inner">
                    <div className="history_tool">
                        <div className="history_tool_title">{customer.nickname}的会话记录</div>
                        <div className="history_close_icon" onClick={this.clickClose}>X</div>
                    </div>
                    <div className="history_bottom">
                        <HistoryChatList/>
                        <ChaterInfo/>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        history:state.history,
        customer:state.container.currentCustomer
    }
};
export default connect(mapStateToProps)(CustomerHistory)