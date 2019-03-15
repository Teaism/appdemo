import Vue from "vue";

// import all componnrts
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";

// import only on demand
/* import { Button, Cell, Header } from 'mint-ui';
Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);
Vue.component(Header.name, Header); */

import App from "./App.vue";
import router from "./router";
import store from "./store/index";

Vue.use(MintUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
