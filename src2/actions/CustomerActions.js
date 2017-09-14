/**
 * Created by user on 2017/9/12.
 */
import { Request,Api } from '../utils';
import { handleMask } from './CommonActions';
const get_customer = (page=1)=>{
    return (dispatch,getState)=>{
        dispatch(handleMask(true));
        const state = getState();
        const postData = {
            page_size:state.customer.page_size,
            page:page
        };
        Request.SendRequest(
            Api.get_customer.action,
            Api.get_customer.method,
            postData,(res)=>{
                if(res.state == 200){
                    dispatch({
                        type:'get_customer_success',
                        page:page,
                        max_count:res.data.customer_count,
                        list:res.data.customer_list,
                    })
                }else{
                    dispatch({

                    })
                }

            },(error)=>{

            },()=>{
                dispatch(handleMask(false));
            })
    }
};

const get_customer_err = ()=>{
    return {
        type:'get_customer_err'
    }
};

const get_next = ()=>{

};

module.exports = {
    get_customer:get_customer
}