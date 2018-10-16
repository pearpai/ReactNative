// 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式

export function obj2params(obj) {
    let result = '';
    let item;
    for (item in obj) {
        if (!(obj[item] === null || obj[item] === undefined || obj[item] === '')) {
            result += '&' + item + '=' + encodeURIComponent(obj[item]);
        }
    }

    if (result) {
        result = result.slice(1);
    }

    return result;
}

/**
 * 浅复制
 * @param p
 * @returns {{}}
 */
export function extendCopy(p) {
    let c = {};
    for (let i in p) {
        c[i] = p[i];
    }
    c.uber = p;
    return c;
}


/**
 * 深度复制
 * @param obj
 * @returns {any}
 */
export function deepCopy(obj) {
    if (typeof obj !== 'object')
        return null;
    return JSON.parse(JSON.stringify(obj))
}


export function urlEncode(param, key, encode) {
    if (param == null) return '';
    let paramStr = '';
    let t = typeof (param);
    if (t === 'string' || t === 'number' || t === 'boolean') {
        paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
    } else {
        for (let i in param) {
            // noinspection JSUnfilteredForInLoop
            let k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
            // noinspection JSUnfilteredForInLoop
            paramStr += urlEncode(param[i], k, encode);
        }
    }
    return paramStr;
}

export function changePath() {

}


export function setCookie(key, value, expireDays, expireHours, expireMinutes, expireSeconds) {
    let expireDate = new Date();
    if (expireDays) {
        expireDate.setDate(expireDate.getDate() + expireDays);
    }
    if (expireHours) {
        expireDate.setHours(expireDate.getHours() + expireHours);
    }
    if (expireMinutes) {
        expireDate.setMinutes(expireDate.getMinutes() + expireMinutes);
    }
    if (expireSeconds) {
        expireDate.setSeconds(expireDate.getSeconds() + expireSeconds);
    }
    document.cookie = key + "=" + escape(value) +
        ";domain=" + window.location.hostname +
        ";path=/" +
        ";expires=" + expireDate.toUTCString();
}

export function deleteCookie(name) {
    setCookie(name, "", null, null, null, 1);
}


