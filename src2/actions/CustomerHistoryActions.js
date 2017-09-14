/**
 * Created by user on 2017/9/12.
 */
import { Request,Api } from '../utils';
const get_history = (page=1)=>{
    return (dispatch,getState)=>{
        const state = getState();
        console.log(page)
        if(page == 1){
            dispatch(toggleLoading(true));
        }else{
            dispatch(toggleLoadMore(true));
        }
        const postData = {
            page:page,
            page_size:state.history.page_size,
            room_id:state.container.currentCustomer.customer_id,
            order:'asc'
        };
        const { action,method } = Api.get_history;
        Request.SendRequest(action, method, postData, (res)=>{
            if(res.state == 200){
                dispatch({
                    type:'get_history_success',
                    list:res.data.message_list,
                    page:page,
                    all_load:page*state.history.page_size>=res.data.message_count
                })
            }
            else{
                dispatch({
                    type:'get_history_error'
                })
            }
        },(err)=>{
            dispatch({
                type:'get_history_error'
            })
        },(done)=>{
            dispatch(toggleLoading(false));
            dispatch(toggleLoadMore(false));
        })
    }
};

const CLEAR_HISTORY = 'clear_history';
const clear_history = ()=>{
    return{
        type:CLEAR_HISTORY
    }
};
const SHOW_LOADING = 'show_history_loading';
const toggleLoading = (bool)=>{
    return{
        type:SHOW_LOADING,
        show:bool
    }
};

const SHOW_LOAD_MORE = 'show_history_load_more';
const toggleLoadMore = (bool)=>{
    return{
        type:SHOW_LOAD_MORE,
        show:bool
    }
};
const get_customer_info = ()=>{
    return (dispatch,getState)=>{
        const state = getState();
        const { action, method } = Api.customer_info;
        const postData = {
            customer_id : state.container.currentCustomer.customer_id
        };
        Request.SendRequest(action,method,postData,(res)=>{
            if(res.state == 200){
                dispatch({
                    type:'update_customer_info',
                    customer_info:{
                        avatar:res.data.avatar,
                        nickname:res.data.nickname,
                        sex:res.data.sex,
                        address:res.data.address,
                        remark:res.data.remark?res.data.remark:'暂无备注',
                        device:'iphone7'
                    }
                })
            }
        },()=>{
            alert('获取失败！')
        },()=>{

        })
    }
};
module.exports = {
    get_history:get_history,
    toggleLoading:toggleLoading,
    toggleLoadMore:toggleLoadMore,
    clear_history:clear_history,
    get_customer_info:get_customer_info
}