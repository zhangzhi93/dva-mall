import axios from '../utils/axios';

export function get_list(params) {
  return axios.get('/extend/activity', params);
}
