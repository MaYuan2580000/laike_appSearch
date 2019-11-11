import requset from '../utlis/request';
import qs from 'qs'; //jquey

export const getHomeData = () => {
  return requset({
    method: 'post',
    url: '/V2.4/index.php?store_id=1&store_type=2',
    // module=aapp&action=index&app=index&access_id=22&store_type=2
    data: qs.stringify({
      module: 'app',
      action: 'index',
      app: 'index',
      access_id:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjcxMjgyODMsImV4cCI6MTU2NzEzNTQ4MywianRpIjoiZWRiMWVlNTFiM2I4ODMwMmFkNjM5MDc5ZGI4MjEzMmMifQ.4ZUzSMIiFXehMZomYQOdeqgA6hSjssunQ_D4gOEcnTg',
      store_type: 2
    })
  });
};
//分类的接口
export const getclassify = () => {
  return requset({
    method: 'post',

    url: '/V2.4/index.php?store_id=1&store_type=2',
    // module=aapp&action=index&app=index&access_id=22&store_type=2
    data: qs.stringify({
      module: 'app',
      action: 'search',
      app: 'index',
      access_id:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjcxMjgyODMsImV4cCI6MTU2NzEzNTQ4MywianRpIjoiZWRiMWVlNTFiM2I4ODMwMmFkNjM5MDc5ZGI4MjEzMmMifQ.4ZUzSMIiFXehMZomYQOdeqgA6hSjssunQ_D4gOEcnTg',
      store_type: 2
    })
  });
};

//购物车详情页的接口
export const goodsDetailed = (pro_id) => {
  return requset({
    method: 'post',

    url: '/V2.4/index.php?store_id=1&store_type=2',
    // module=aapp&action=index&app=index&access_id=22&store_type=2
    data: qs.stringify({
      module: 'app',
      action: 'product',
      app: 'index',
      pro_id,
      access_id:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjcxMjgyODMsImV4cCI6MTU2NzEzNTQ4MywianRpIjoiZWRiMWVlNTFiM2I4ODMwMmFkNjM5MDc5ZGI4MjEzMmMifQ.4ZUzSMIiFXehMZomYQOdeqgA6hSjssunQ_D4gOEcnTg',
      store_type: 2
    })
  });
};

//seatch接口
export const seatchList = (data) => {
  return requset({
    method: 'post',
    url: '/V2.4/index.php?store_id=1&store_type=2',
    // module=aapp&action=index&app=index&access_id=22&store_type=2
    data: qs.stringify({
      store_id: 1,
      store_type: 2,
      module: 'app',
      action: 'search',
      app: 'search',
      num: 1,
      type: 0,
      keyword: data,
    })
  });
};

//优惠劵的接口
export const couponList = (pro_id) => {
  return requset({
    method: 'post',
    url: '/V2.4/index.php?store_id=1&store_type=2',
    // module=aapp&action=index&app=index&access_id=22&store_type=2
    data: qs.stringify({
      module: 'app',
      action: 'Coupon',
      app: 'pro_coupon',
      pro_id,
      access_id:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjcxMjgyODMsImV4cCI6MTU2NzEzNTQ4MywianRpIjoiZWRiMWVlNTFiM2I4ODMwMmFkNjM5MDc5ZGI4MjEzMmMifQ.4ZUzSMIiFXehMZomYQOdeqgA6hSjssunQ_D4gOEcnTg',
      store_type: 2
    })
  });
};

//登录接口

export const login = (phone, password) => {
  return requset({
    method: 'post',
    url: '/V2.4/index.php?store_id=1&store_type=2',
    // module=aapp&action=index&app=index&access_id=22&store_type=2
    data: qs.stringify({
      module: 'app',
      action: 'login',
      app: 'login',
      phone,
      password,
      access_id:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjcxMjgyODMsImV4cCI6MTU2NzEzNTQ4MywianRpIjoiZWRiMWVlNTFiM2I4ODMwMmFkNjM5MDc5ZGI4MjEzMmMifQ.4ZUzSMIiFXehMZomYQOdeqgA6hSjssunQ_D4gOEcnTg',
      clientid: '',
      store_type: 2,

    })
  });
};
//注册接口

export const register = (userId,password,phone,keyCode) => {
  return requset({
    method: 'post',
    url: '/V2.4/index.php?store_id=1&store_type=2',
    // module=aapp&action=index&app=index&access_id=22&store_type=2
    data: qs.stringify({
      module: 'app',
      action: 'login',
      app: 'user_register',
      phone,
      password,
      access_id:'',
      keyCode,
      userId

    })
  });
};
//短信验证码接口

export const loginCode = (phone) => {
  return requset({
    method: 'post',
    url: '/V2.4/index.php?store_id=1&store_type=2',
    // module=aapp&action=index&app=index&access_id=22&store_type=2
    data: qs.stringify({
      module: 'app',
      action: 'user',
      app: 'secret_key',
      phone
    })
  });
};

//为你推荐接口

export const tuijian = () => {
  return requset({
    method: 'post',
    url: '/V2.4/index.php?store_id=1&store_type=2',
    // module=aapp&action=index&app=index&access_id=22&store_type=2
    data: qs.stringify({
      module: 'app',
      action: 'cart',
      app: 'index',
      cart_id:'',
      access_id:''
    })
  });
};

//评价接口

export const evaluate = (pid) => {
  return requset({
    method: 'post',
    url: '/V2.4/index.php?store_id=1&store_type=2',
    // module=aapp&action=index&app=index&access_id=22&store_type=2
    data: qs.stringify({
      module: 'app',
      action: 'product',
      app: 'getcomment',
      pid,
      type:0
    })
  });
};


//拼团接口接口

export const Assemble = () => {
  return requset({
    method: 'post',
    url: '/V2.4/index.php?store_id=1&store_type=2',
    // module=aapp&action=index&app=index&access_id=22&store_type=2
    data: qs.stringify({
      module: 'app',
      action: 'groupbuy',
      page:1,
      access_id:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NjgwMDg5NzUsImV4cCI6MTU2ODAxNjE3NSwianRpIjoiNjA0NGU2NWQxOWIwMTQ4MzJiNmQ0NTM0MDVlMjk4OTUifQ.bzL_Pb7CPCMbZ_atfrf46cc6sMH28S1TXwgUuhppsEg',
      navType:1,
      m:'123456'
    })
  });
};