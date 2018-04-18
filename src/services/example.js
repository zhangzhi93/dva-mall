import axios from '../utils/axios';

export function get_list(params) {
  return axios.get('/api/getList', { params });
}

export function edit_info(params) {
  return axios.get('/api/editInfo', { params });
}
