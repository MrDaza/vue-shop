import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { fb } from "./config/firebase";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

import "popper.js";
import "bootstrap";
//import "./assets/bootstrap.scss";

Vue.component("NavBar", require("@/components/sites/NavBar.vue").default);
Vue.component("Footer", require("@/components/sites/Footer.vue").default);
Vue.component("Login", require("@/components/sites/Login.vue").default);
Vue.component("Toast", require("@/components/admin/Toast.vue").default);

Vue.config.productionTip = false;
let app = "";

fb.auth().languageCode = "es";
// To apply the default browser preference instead of explicitly setting it.
// https://firebase.google.com/docs/auth/web/manage-users?hl=es-419
// fb.auth().useDeviceLanguage();
fb.auth().onAuthStateChanged(function(user) {
  fb.auth().languageCode = "es";
  console.log("Main: ", [user]);
  if (!app) {
    new Vue({
      router,
      render: h => h(App)
    }).$mount("#app");
  }
  /*
  if (user) {
    this.displayName = user.displayName;
    this.email = user.email;
    this.emailVerified = user.emailVerified;
    this.photoURL = user.photoURL;
    this.isAnonymous = user.isAnonymous;
    this.uid = user.uid;
    this.providerData = user.providerData;
    // ...
  } else {
    console.log("Error");
    alert("Opp! No hay usuario registrado");
    router.push("/");
  }
  */
});
