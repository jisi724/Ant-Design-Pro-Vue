import axios from "axios";
import { Notification } from "ant-design-vue";

function request(options) {
  return axios(options)
    .then(res => res)
    .catch(error => {
      const {
        response: { status, statusText }
      } = error;
      Notification.error({
        message: status,
        description: statusText
      });

      return Promise.reject(error);
    });
}

export default request;
