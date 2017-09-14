/**
 * Created by user on 2017/8/9.
 */

import reqwest from 'reqwest';
import { BASE_URL } from './Config';
import Debug from './Debug';
const ActionMap = {
    customer_list:'./mock/customer_list.json',
    history_message:'./mock/history_list.json',
    customer_info:'./mock/customer_info.json'
}
const SendRequest = (action,method,data,success,error)=>{
    const headers = {
        'Accept': '*/*',
        'Content-Type': 'application/json'
    };
    const contentType = 'application/json';
    let url = '';
    if(Debug){
        url = ActionMap[action]
    }else {
        url = BASE_URL + action;
    }
    reqwest({
        contentType:contentType,
        headers:headers,
        url: url,
        type:'json',
        method: method,
        data: JSON.stringify(data),
        success: function (resp) {
            console.warn('success',resp);
            success && success(resp);
        },
        error: function (err) {
            console.warn('error',err);
            error && error(err);
        }
    })
};
const UploadFile = (url,formData,success,fail)=>{
        const xhr = new XMLHttpRequest();  // XMLHttpRequest 对象
        xhr.open("post", url, true); //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                var status = xhr.status;
                if (status >= 200 && status < 300) {
                    var res = JSON.parse(xhr.responseText);
                    success && success(res);
                } else {
                    fail && fail(status);
                }
            }
        };
        xhr.send(formData); //开始上传，发送form数据
};

module.exports = {
    SendRequest:SendRequest,
    UploadFile:UploadFile
}

