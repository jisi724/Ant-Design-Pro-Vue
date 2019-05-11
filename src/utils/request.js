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
        // try jsx to custom front end
        //message: status,
        // eslint-disable-next-line no-unused-vars
        message: h => (
          <div>
            Custom Error <span style="color: red;">{status}</span> :{" "}
            {options.url}
          </div>
        ),
        description: statusText
      });

      return Promise.reject(error);
    });
}

export default request;
