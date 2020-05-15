<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light ">
    <a class="navbar-brand text-" href="#">
      <img
        src="@/assets/logo.png"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt="Logo"
      />
      inFruit
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link" href="#">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" href="#">
            About
          </router-link>
        </li>
      </ul>
      <div class="form-inline my-2 my-lg-0">
        <a
          href="#"
          role="button"
          data-toggle="modal"
          data-target="#modalLogin"
          class="btn btn-outline-success my-2 my-sm-0"
        >
          Login
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      msg: "Nav Bar"
    };
  }
};
</script>
