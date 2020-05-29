import axios from 'axios'

const ApiService = {

    init(baseURL) {
      axios.defaults.baseURL = baseURL;
    },

    async getActivity(params) {
      try {
        const res = await axios.get('/activity', {
          params: params
        });
        if (res.data.error) {
          return res.data;
        }
        return res.data;
      } catch (error) {
        return undefined;
      }
    }

}

export default ApiService
