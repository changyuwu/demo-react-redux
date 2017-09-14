/**
 * Created by user on 2017/9/4.
 */
import React, { Component } from 'react';

export default class SearchTool extends Component{
    render(){
        return(
            <div className="user_list_search_tool">
                <div className="user_list_search_tool_input">
                    <input
                        ref={r=>this.inputDom=r}
                        type="text"
                    />
                </div>
                <div className="user_list_search_btn">
                    <img src={require('../../images/search.png')} alt=""/>
                    搜索
                </div>
            </div>
        )
    }
}