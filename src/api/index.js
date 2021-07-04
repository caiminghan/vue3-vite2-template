import $http from '../common/$http';
import urls from './urls';

// 获取用户信息
export const getUserInfo = (...args) => $http.get.apply(null, [urls.getUserInfo, ...args]);

// 验证用户信息
export const checkUserInfo = (...args) => $http.get.apply(null, [urls.checkUserInfo, ...args]);
