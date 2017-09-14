/**
 * Created by user on 2017/8/30.
 */
import React , { Component } from 'react';
import HistoryChatList from './HistoryChatList';
import ChaterInfo from './ChaterInfo';
import Global,{ Request,EventCenter } from '../../utils/Global';

export default class ChatHistory extends Component{
    constructor(props){
        super(props);
        this.page = 1;
        this.page_size = 10;
        this.state = {
            chatlist:[],
            loading:true,
            loadMore:false
        };
        this.loadAll = false;
        this.maxCount = 0;
        this.oldHeight = 0;
    }
    componentDidMount(){
        this.getData(false);
    }
    getNickname = ()=>{
        return this.props.user.nickname
    };
    checkLoadAll = ()=>{
        this.loadAll = this.state.chatlist.length == this.maxCount;
        return this.loadAll
    };
    getData = (isLoadMore)=>{
        const postData = {
            room_id:this.props.user.customer_id,
            page:this.page,
            page_size:this.page_size,
            order:'desc'
        };
        Request.SendRequest('history_message','POST',postData,(res)=>{
            if(res && res.state == 200){
                this.maxCount = res.data.message_count;
                if(!isLoadMore){
                    this.setState({
                        chatlist:res.data.message_list,
                        loading:false
                    },()=>{
                        this.oldHeight = this.list.getListHeight();
                        this.list.scrollBottom();
                        if(!this.checkLoadAll()){
                            this.page ++ ;
                        }
                    })
                }else{
                    let list = [];
                    for(let i in res.data.message_list){
                        list.push(res.data.message_list[i]);
                    }
                    for(let j in this.state.chatlist){
                        list.push(this.state.chatlist[j])
                    }
                    this.setState({
                        chatlist:list,
                        loadMore:false
                    },()=>{
                        this.list.scrollTo(this.list.getListHeight() - this.oldHeight);
                        this.oldHeight = this.list.getListHeight();
                        if(!this.checkLoadAll()){
                            this.page ++ ;
                        }
                    })
                }

            }else{
                if(!isLoadMore){
                    alert('获取失败，请重试');
                    EventCenter.emit('show_history',false);
                }else{
                    this.setState({
                        loadMore:false
                    })
                }
            }
        },(error)=>{
            if(!isLoadMore){
                alert('获取失败，请重试');
                EventCenter.emit('show_history',false);
            }else{
                this.setState({
                    loadMore:false
                })
            }
        })
    };
    loadMoreEvent = ()=>{
        if(this.loadAll)return;
        this.setState({
            loadMore:true
        });
        this.getData(true);
    };
    render(){
        return(
            <div className="history">
                <div className="history_inner">
                    <div className="history_tool">
                        <div className="history_tool_title">{this.getNickname()}的会话记录</div>
                        <div className="history_close_icon" onClick={this.props.closeHistory}>X</div>
                    </div>
                    <div className="history_bottom">
                        <HistoryChatList
                            loadMoreEvent = {this.loadMoreEvent}
                            loadMore={this.state.loadMore}
                            loading={this.state.loading}
                            ref={ref=>this.list=ref}
                            list={this.state.chatlist}
                        />
                        <ChaterInfo
                            customer_id={this.props.user.customer_id}
                        />
                    </div>

                </div>
            </div>
        )
    }
}