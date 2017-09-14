/**
 * Created by user on 2017/8/7.
 */
import React, { Component } from 'react'
import SingleChatListItem from './SingleChatListItem'
import {findDOMNode} from 'react-dom';
import { EventCenter } from '../../utils/Global';
import HistoryLoading from './HistoryLoading';
import HistoryLoadMore from './HistoryLoadMore';
export default class HistoryChatList extends Component{
    renderList(){
        const list = [];
        this.props.list.map((item,index)=>{
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
        dom.scrollTop = dom.scrollHeight;
    }
    componentDidMount(){
        this.scrollBottom();
    }
    onScroll = (event)=>{
        var dom = findDOMNode(this.scrollList);
        var height = dom.offsetHeight,
            scrollHeight = dom.scrollHeight,
            scrollTop = dom.scrollTop;
        if(dom.scrollTop == 0 && scrollHeight > height){
            this.props.loadMoreEvent();
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
        return this.props.loading ? <HistoryLoading/> : null;
    }
    renderLoadMore(){
        return this.props.loadMore ? <HistoryLoadMore/> : null;
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