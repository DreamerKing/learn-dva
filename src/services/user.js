import request from '../utils/request';

export function fetchUsers() {
   return request('/api/users');
}