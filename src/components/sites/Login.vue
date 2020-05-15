<template>
  <div
    class="modal fade "
    id="modalLogin"
    data-backdrop="static"
    tabindex="-1"
    role="dialog"
    aria-labelledby="modalLoginLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLoginLabel">
            {{ title }}
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- Tab panes -->
          <div class="tab-content" id="myTab">
            <!-- Login View-->
            <div
              class="tab-pane fade show active"
              id="login"
              role="tabpanel"
              aria-labelledby="login-tab"
            >
              <form @submit.prevent="login" novalidate="true">
                <div class="form-group">
                  <label for="loginEmail">Correo electrónico</label>
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    id="loginEmail"
                    placeholder="Correo electrónico"
                    aria-placeholder="Correo electrónico"
                    aria-describedby="loginEmailHelp"
                  />
                  <small id="loginEmailHelp" class="form-text text-muted">
                    Nunca compartiremos su correo electrónico con nadie más.
                  </small>
                </div>
                <div class="form-group">
                  <label for="loginPass">Password</label>
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    id="loginPass"
                  />
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <input
                      type="submit"
                      class="btn btn-success col"
                      value="Ingresar"
                    />
                  </div>
                  <div class="col-md-6 p-3">
                    <a href="#" class="btn btn-outline-success col">
                      Continuar con Google
                    </a>
                  </div>
                  <div class="col-md-6 p-3">
                    <a href="#" class="btn btn-outline-success col">
                      Continuar con Facebook
                    </a>
                  </div>
                </div>
              </form>
            </div>
            <!-- Reset View-->
            <div
              class="tab-pane fade"
              id="resetpass"
              role="tabpanel"
              aria-labelledby="resetpass-tab"
            >
              <form>
                <div class="form-group">
                  <label for="resetpassEmail">
                    Enviaremos un enlace de recuperación a
                  </label>
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    id="resetpassEmail"
                    aria-describedby="resetpassEmailHelp"
                    placeholder="Correo electrónico"
                    aria-placeholder="Correo electrónico"
                  />
                  <small id="resetpassEmailHelp" class="form-text text-muted">
                    En un maximo de 5 minutos recibiras un correo electrónico.
                  </small>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <button type="submit" class="btn btn-outline-success col">
                      Enviar enlace de recuperación
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <!-- Signin View-->
            <div
              class="tab-pane fade"
              id="signup"
              role="tabpanel"
              aria-labelledby="signup-tab"
            >
              <form>
                <div class="form-group">
                  <label for="signupName">Nombre completo</label>
                  <input
                    v-model="name"
                    type="text"
                    class="form-control"
                    id="signupName"
                    placeholder="Digite su Nombre"
                    aria-placeholder="Digite su Nombre"
                  />
                </div>
                <div class="form-group">
                  <label for="signupEmail">Correo electrónico</label>
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    id="signupEmail"
                    placeholder="Correo electrónico"
                    aria-placeholder="Correo electrónico"
                    aria-describedby="signupEmailHelp"
                  />
                  <small id="signupEmailHelp" class="form-text text-muted">
                    Nunca compartiremos su correo electrónico con nadie más.
                  </small>
                </div>
                <div class="form-group">
                  <label for="signupPass">Password</label>
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    id="signupPass"
                  />
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <button
                      type="submit"
                      @click="signUp"
                      class="btn btn-outline-success col"
                    >
                      Registrarse
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="modal-footer justify-content-center text-center">
          <!-- login -->
          <p v-if="viewtab.login">
            <a @click="clickViewResetPass('#resetpass')" href="#resetpass">
              ¿No Recuerdar tu contraseña?
            </a>
            &nbsp;ó&nbsp;
            <a @click="clickViewSign('#signup')" href="#signup">
              Registrarte&nbsp;
            </a>
            para obtener una cuenta
          </p>
          <!-- resetPass -->
          <p v-else-if="viewtab.reset">
            <a @click="clickViewLogin('#login')" href="#login">
              Volver a Inicio de sesión
            </a>
          </p>
          <!-- signin -->
          <p v-else-if="viewtab.sign">
            <a @click="clickViewResetPass('#resetpass')" href="#resetpass">
              ¿No Recuerdar tu contraseña?
            </a>
            &nbsp;ó&nbsp;
            <a @click="clickViewLogin('#login')" href="#login">
              Ingresar con tu cuenta
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb } from "@/config/firebase.js";
import router from "@/router";
export default {
  name: "Login",
  //created() {},
  //watch: {},
  data() {
    return {
      name: null,
      email: null,
      password: null,
      title: "Inicia sesión para continuar a:",
      viewtab: {
        sign: false,
        reset: false,
        login: true
      }
    };
  },
  methods: {
    clickViewLogin(id) {
      this.title = "Inicia sesión para continuar";
      this.viewtab = {
        sign: false,
        reset: false,
        login: true
      };
      this.clickView(id);
    },
    clickViewSign(id) {
      this.title = "Crea una cuenta a continuación:";
      this.viewtab = {
        sign: true,
        reset: false,
        login: false
      };
      this.clickView(id);
    },
    clickViewResetPass(id) {
      this.title = "¿No puedes iniciar sesión?";
      this.viewtab = {
        sign: false,
        reset: true,
        login: false
      };
      this.clickView(id);
    },
    clickView(id) {
      window.$('a[href="' + id + '"]').tab("show");
      window.$('a[href="' + id + '"]').removeClass("active");
    },
    checkFormLogin: function(event) {
      event.preventDefault();
      this.login();
    },
    login(event) {
      event.preventDefault();
      console.log("email:" + this.email);
      console.log("password:" + this.password);
      fb.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            window.$("#modalLogin").modal("hide");
            router.push("Admin");
            console.log("Login: ", [user]);
          },
          function(error) {
            alert("Opps. [" + error.code + "] " + error.message);
            console.log(error.code);
          }
        )
        .catch(function(error) {
          let errorCode = error.code;
          let errorMenssage = error.message;
          console.log(error);
          console.log("Login: " + errorCode);
          console.log("Login: " + errorMenssage);
          alert("Opps. [" + errorCode + "] " + errorMenssage);
        });
    },
    signUp: () => {
      fb.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            window.$("#modalLogin").modal("hide");
            router.push("Admin");
            console.log("Signup: ", [user]);
          },
          function(error) {
            alert("Opps. [" + error.code + "] " + error.message);
            console.log(error.code);
          }
        )
        .catch(function(error) {
          let errorCode = error.code;
          let errorMenssage = error.message;
          console.log(error);
          console.log("Signup: " + errorCode);
          console.log("Signup: " + errorMenssage);
          alert("Opps. [" + errorCode + "] " + errorMenssage);
        });
    }
  }
};
</script>
