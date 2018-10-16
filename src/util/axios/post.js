import axios from 'axios';
import 'es6-promise';
import {obj2params} from '../utils';
import React from 'react';
import {Alert} from "react-native";

// noinspection JSCommentMatchesSignature
/**
 * 请求后端 post
 * @param url
 * @param data
 * @returns {Promise<AxiosResponse<any>>}
 */
export function post(url, data, header) {
    //  console.log( url + obj2params(data));


    return axios({
        // 请求方式
        method: 'POST',
        // 请求头
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
            ...header
        },
        // 请求地址
        url: url,
        // 请求数据
        data: {
            ...data
        },
        // 请求数据 转换
        transformRequest: [function (data, headers) {
            return obj2params(data);
        }],
        // 请求超时
        timeout: 60000,

    }).then((res) => {
//  console.log(res)

        if (res.status !== 200) {
            // 如果返回报错 则抛错 由业务进行处理
            throw new Error(res.statusText);
        }
        if (!res.data.success) {
            Alert.alert("警告", res.data.msg)
        }
        return res.data;
    });
}

// 请求demo
export function postDemo() {
    post('/api/demo', {data: 100}).then(data => {
        //  console.log(data);
    }).catch((err) => {
        //  console.log('----------- >>>>> ' + err.toString())
    })
}


export function post3(url, data) {


    return axios({
        // 请求方式
        method: 'POST',
        // 请求头
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': "multipart/form-data"
        },
        // 请求地址
        url: url,
        // 请求数据
        data: data,
        // 请求数据 转换


        withCredentials: true,
        // 返回数据类型
        responseType: 'json', //default

        // 请求超时
        timeout: 60000,

    }).then((res) => {
//  console.log(res)
        if (res.status !== 200) {
            // 如果返回报错 则抛错 由业务进行处理
            throw new Error(res.statusText);
        }
        if (res.data.code === 'msg_orange_ERR0050') {
            return;
        }
        return res.data;
    });
}
