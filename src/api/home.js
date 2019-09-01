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