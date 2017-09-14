/**
 * Created by user on 2017/9/4.
 */
import React, { Component } from 'react';

export default class PageController extends Component{
    getActionDisabled(){
        const disable = {
            disableFirst:false,
            disableLast:false,
            disableNext:false,
            disablePre:false
        }
        if(this.props.page == 1 ) {
            disable.disablePre = true;
            disable.disableFirst = true;
        }
        if(this.props.page >= this.props.max_page){
            disable.disableNext = true;
            disable.disableLast = true;
        }
        return disable;
    }
    render(){
        const {disableFirst,disableLast,disableNext,disablePre} = this.getActionDisabled();
        return(
            <div className="user_page_tool_con">
                <div className="user_page_tool">
                    <div className="total">共{this.props.total}条</div>
                    <div className="actions_con">
                        <div
                            className={!disableFirst ? 'action active' : 'action'}
                            onClick={()=>{
                                if(disableFirst)return;
                                this.props.toFirstPage()
                            }}
                        >首页</div>
                        <div
                            className={!disablePre ? 'action active' : 'action'}
                            onClick={()=>{
                                if(disablePre)return;
                                this.props.toPrePage()
                            }}
                        >上一页</div>
                        <div
                            className={!disableNext ? 'action active' : 'action'}
                            onClick={()=>{
                                if(disableNext)return;
                                this.props.toNextPage()
                            }}
                        >下一页</div>
                        <div
                            className={!disableLast ? 'action active' : 'action'}
                            onClick={()=>{
                                if(disableLast)return;
                                this.props.toLastPage()
                            }}
                        >尾页</div>
                    </div>
                    <div className="page">第{this.props.page}页</div>
                </div>
            </div>
        )
    }
}