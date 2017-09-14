/**
 * Created by user on 2017/9/4.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CustomerActions } from '../../actions'

class PageController extends Component{
    render(){
        const { dispatch, customer } = this.props;
        return(
            <div className="user_page_tool_con">
                <div className="user_page_tool">
                    <div className="total">共{customer.max_count}条</div>
                    <div className="actions_con">
                        <div
                            className={customer.last ? 'action active' : 'action'}
                            onClick={()=>{
                                if(!customer.last)return;
                                dispatch(CustomerActions.get_customer(1))
                            }}
                        >首页</div>
                        <div
                            className={customer.last ? 'action active' : 'action'}
                            onClick={()=>{
                                if(!customer.last)return;
                                dispatch(CustomerActions.get_customer(customer.page-1))
                            }}
                        >上一页</div>
                        <div
                            className={customer.next ? 'action active' : 'action'}
                            onClick={()=>{
                                if(!customer.next)return;
                                dispatch(CustomerActions.get_customer(customer.page+1))
                            }}
                        >下一页</div>
                        <div
                            className={customer.next ? 'action active' : 'action'}
                            onClick={()=>{
                                if(!customer.next)return;
                                const max_page = Math.ceil(customer.max_count/customer.page_size);
                                dispatch(CustomerActions.get_customer( max_page ))
                            }}
                        >尾页</div>
                    </div>
                    <div className="page">第{customer.page}页</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        customer:state.customer
    }
};
export default connect(mapStateToProps)(PageController);