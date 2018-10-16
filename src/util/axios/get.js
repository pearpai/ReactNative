import axios from 'axios';
import 'es6-promise';

import React from 'react';


/**
 * get 后端请求
 * @param url
 * @param data
 * @returns {Promise<AxiosResponse<any>>}
 */
export function get(url, data) {
    // //  console.log( url + obj2params(data));
    return axios({
        // 请求方式
        method: 'GET',
        // 请求头
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        // 请求地址
        url: url,
        // 请求数据
        params: {
            ...data
        },
        // 请求超时
        timeout: 60000,

    }).then((res) => {



        if (res.status !== 200) {
            // 如果返回报错 则抛错 由业务进行处理
            throw new Error(res.statusText);
        }


        return res.data;
    });
}

// 请求demo
export function get_test() {
    get('/api/demo', {data: 100}).then(data => {
        //  console.log(data);
    }).catch((err) => {
        //  console.log('----------- >>>>> ' + err.toString())
    })
}

