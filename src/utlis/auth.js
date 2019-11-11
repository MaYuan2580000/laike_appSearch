import Cookies from 'js-cookie'
const key = 'token'

//设置cookie的方法
export const setCookie=value=>{
      Cookies.set(key,value)

}

//获取cookie的方法
export const getCookie=()=>{
    return Cookies.get(key)
}

//清除cookie的方法
export const removeCookie=()=>{
    return Cookies.remove(key)
}