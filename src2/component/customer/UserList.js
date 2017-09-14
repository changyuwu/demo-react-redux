/**
 * Created by user on 2017/9/4.
 */
import React, { Component } from 'react';
import UserListItem from './UserListItem';

export default class UserList extends Component{
    renderItem(){
        let list = [];
        this.props.list.map((item,index)=>{
            list.push(
                <UserListItem
                    key={index}
                    user={item}
                />
            )
        })
        return list;
    }
    render(){
        return(
            <div className="user_list">
                {this.renderItem()}
            </div>
        )
    }
}