/**
 * Created by user on 2017/9/4.
 */
import React, { Component } from 'react';
import UserList from './UserList';
import SearchTool from './SearchTool';
import PageController from './PageController';
import { Request } from '../../utils/Global';

const PAGE_NUMBER = 12;
export default class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            page:1,
            list:[],
            total:0,
            max_page:0
        };
        this.ajax_ing = false;
    }
    componentDidMount(){
        document.body.style.overflow = 'hidden';
        this.getData();
    }

    getData = ()=>{
        this.props.handleMask(true);
        this.ajax_ing = true;
        Request.SendRequest('customer_list','POST',{
            page:this.state.page,
            page_size:PAGE_NUMBER
        },(res)=>{
            this.ajax_ing = false;
            this.props.handleMask(false);
            if(res && res.state == 200){
                this.setState({
                    total:res.data.customer_count,
                    list:res.data.customer_list,
                    max_page:Math.ceil(res.data.customer_count/PAGE_NUMBER)
                })
            }else{
                alert('获取失败,'+res.message);
            }
            console.log(res);
        },(err)=>{
            this.props.handleMask(false);
            this.ajax_ing = false;
            alert('获取失败')
            console.log(err);
        })
    };
    toNextPage = ()=>{
        if(this.ajax_ing)return;
        this.setState({
            page:this.state.page+1
        },()=>{
            this.getData()
        })
    };

    toPrePage = ()=>{
        if(this.ajax_ing)return;
        this.setState({
            page:this.state.page-1
        },()=>{
            this.getData()
        })

    };
    toFirstPage = ()=>{
        if(this.ajax_ing)return;
        this.setState({
            page:1
        },()=>{
            this.getData()
        })
    };
    toLastPage = ()=>{
        if(this.ajax_ing)return;
        this.setState({
            page:this.state.max_page
        },()=>{
            this.getData()
        })
    };
    render(){
        return(
            <div className="user_list_con">
                <SearchTool/>
                <UserList
                    clickItem={this.props.clickItem}
                    list={this.state.list}
                />
                <PageController
                    max_page={this.state.max_page}
                    total={this.state.total}
                    page={this.state.page}
                    toNextPage={this.toNextPage}
                    toPrePage={this.toPrePage}
                    toFirstPage={this.toFirstPage}
                    toLastPage={this.toLastPage}
                />
            </div>
        )
    }
}