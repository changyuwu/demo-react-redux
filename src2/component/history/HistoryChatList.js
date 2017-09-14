/**
 * Created by user on 2017/8/7.
 */
import React, { Component } from 'react'
import SingleChatListItem from './SingleChatListItem'
import {findDOMNode} from 'react-dom';
import HistoryLoading from './HistoryLoading';
import HistoryLoadMore from './HistoryLoadMore';
import { connect } from 'react-redux';
import { CustomerHistoryActions } from '../../actions';
class HistoryChatList extends Component{
    page = 1;
    page_size = 10;
    list_height = 0;
    renderList(){
        const { history } = this.props;
        const list = [];
        history.list.map((item,index)=>{
            list.push(
                <SingleChatListItem msg={item} key={index}/>
            )
        });
        if(list.length<=0){
            return (
                <div className="no_history">
                    暂无历史记录
                </div>
            )
        }
        return list;
    }
    scrollBottom(){
        var dom = findDOMNode(this.scrollList);
        var height = dom.scrollHeight;
        var diff = height - this.list_height;
        if( diff > 0){
            dom.scrollTop = diff;
            this.list_height = height;
        }
    }
    componentDidMount(){
        const { dispatch } = this.props;
        dispatch(CustomerHistoryActions.get_history());
    }
    componentWillUnmount(){

    }
    componentDidUpdate(){
        this.scrollBottom();
    }
    onScroll = (event)=>{
        var dom = findDOMNode(this.scrollList);
        var height = dom.offsetHeight,
            scrollHeight = dom.scrollHeight,
            scrollTop = dom.scrollTop;
        const { dispatch,history } = this.props;
        if(dom.scrollTop == 0 && scrollHeight > height){
            console.log(history);
            if(!history.all_load && !history.loadMore){
                dispatch(CustomerHistoryActions.get_history(history.page+1))
            }
        }
    };
    getListHeight = ()=>{
        var dom = findDOMNode(this.scrollList);
        return dom.scrollHeight;
    };
    scrollTo = (scrollTop)=>{
        var dom = findDOMNode(this.scrollList);
        dom.scrollTop = scrollTop;
    };
    renderLoading(){
        const { history } = this.props;
        return history.loading ? <HistoryLoading/> : null;
    }
    renderLoadMore(){
        const { history } = this.props;
        return history.loadMore ? <HistoryLoadMore/> : null;
    }
    render(){
        return(
            <div className="history_chat_list_con">
                {this.renderLoadMore()}
                {this.renderLoading()}
                <div
                    className="chat_list"
                    ref={ref=>this.scrollList=ref}
                    onScroll={this.onScroll}
                >
                    {this.renderList()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        customer:state.container.currentCustomer,
        history:state.history
    }
};

export default connect(mapStateToProps)(HistoryChatList);