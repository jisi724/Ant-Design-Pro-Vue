import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Menu,
  Form,
  Input,
  Select
} from "ant-design-vue";
import Authorized from "./components/Authorized";
import Auth from "./directives/auth";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1190365_5pyenz7y7dk.js"
});

Vue.component("IconFont", IconFont);

// Register global directive with "use"
Vue.use(Auth);

// Register global component
Vue.component("Authorized", Authorized);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
