/**
 * Created by user on 2017/9/4.
 */
import React , { Component } from 'react';

export default class HistoryLoading extends Component{
    render(){
        return(
            <div className="history_loading">
                <div className="ls_table">
                    <div className="ls_table_inner">
                        <img className="history_loading_inner" src={require('../../images/single_loading.png')} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}