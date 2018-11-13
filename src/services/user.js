import axios from '../utils/axios';

export function get_list(params) {
  return axios.get('/api/getList', { params });
}

export function getItemInfoById(params) {
  return axios.get(`/api/getItemInfoById/${params.id}`);
}

export function edit_info(params) {
  return axios.get('/api/editInfo', { params });
}
