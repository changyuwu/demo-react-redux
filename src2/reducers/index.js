/**
 * Created by user on 2017/9/12.
 */
import { combineReducers } from 'redux';

const container_state = {
    masking:false,
    currentCustomer:null
};
const container = (state=container_state,action)=>{
    switch(action.type){
        case 'handle_mask':
            return Object.assign({},state,{masking:action.masking});

        case 'handle_currentCustomer':
            return Object.assign({},state,{currentCustomer:action.customer})
        default:
            return state;
    }
};
const customer_state = {
    list:[],
    page:1,
    page_size:12,
    max_count:0,
    next:false,
    last:false
};
const customer = (state=customer_state,action)=>{
    switch(action.type){
        case 'get_customer_success':
            return Object.assign({},state,{
                list:action.list,
                page:action.page,
                max_count:action.max_count,
                next:action.page*state.page_size < action.max_count,
                last:action.page > 1
            });
        case 'get_customer_error':
            alert('获取失败！');
            return state;
        default:
            return state;
    }
};
const history_state = {
    list:[],
    page:1,
    page_size:10,
    all_load:true,
    loading:false,
    loadMore:false,
    customer_info:{}
};
const history = (state=history_state,action)=>{
    switch(action.type){
        case 'get_history_success':
            return Object.assign({},state,{
                list:[
                    ...action.list,
                    ...state.list
                ],
                page:action.page,
                all_load:action.all_load
            });
        case 'get_history_error':
            alert('获取失败');
            return state;
        case 'clear_history':
            return Object.assign({},state,history_state);
        case 'show_history_load_more':
            return Object.assign({},state,{loadMore:action.show});
        case 'show_history_loading':
            return Object.assign({},state,{loading:action.show});

        case 'update_customer_info':
            return Object.assign({},state,{
                customer_info:Object.assign({},action.customer_info)
            });
        default:
            return state
    }
};

const rootReducer = combineReducers({
    container:container,
    customer:customer,
    history:history
});
export default rootReducer