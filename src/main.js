import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueI18n from "vue-i18n";
import zhCN from "./locale/zhCN";
import enUS from "./locale/enUS";
import queryString from "query-string";
import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Menu,
  Form,
  Input,
  Select,
  LocaleProvider,
  Dropdown,
  DatePicker
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
Vue.use(LocaleProvider);
Vue.use(Dropdown);
Vue.use(DatePicker);

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_1190365_5pyenz7y7dk.js"
});

// Register global component
Vue.component("IconFont", IconFont);
Vue.component("Authorized", Authorized);

// Register global directive with "use"
Vue.use(Auth);
Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: queryString.parse(location.search).locale || "zhCN",
  messages: {
    zhCN: { message: zhCN },
    enUS: { message: enUS }
  }
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
