<template>
  <!-- page-content  -->
  <div class="container pt-5">
    <div id="overlay" class="overlay" @click="clickOverlay">X</div>
    <div class="row">
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12">
            <h2>Pro Sidebar</h2>
            <p>
              This is a responsive sidebar template on bootstrap framework.
            </p>
            <a
              id="toggle-sidebar"
              @click="clickToggleSidebar"
              class="btn btn-secondary rounded-0"
              href="#"
            >
              <span>Toggle Sidebar</span>
            </a>
            <a
              id="pin-sidebar"
              @click="clickPinSidebar"
              class="btn btn-outline-secondary rounded-0"
              href="#"
            >
              <span>Pin Sidebar</span>
            </a>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-md-12">
            <h3>Themes</h3>
            <p>Here are more themes that you can use</p>
          </div>
        </div>
        <div class="row">
          <div class="form-group col-md-12">
            <a
              href="#"
              id="theme00"
              @click="clickTheme('#theme00')"
              data-theme="default-theme"
              class="theme default-theme selected"
            ></a>
            <a
              href="#"
              id="theme01"
              @click="clickTheme('#theme01')"
              data-theme="chiller-theme"
              class="theme chiller-theme"
            ></a>
            <a
              href="#"
              id="theme02"
              @click="clickTheme('#theme02')"
              data-theme="legacy-theme"
              class="theme legacy-theme"
            ></a>
            <a
              href="#"
              id="theme03"
              @click="clickTheme('#theme03')"
              data-theme="ice-theme"
              class="theme ice-theme"
            ></a>
            <a
              href="#"
              id="theme04"
              @click="clickTheme('#theme04')"
              data-theme="cool-theme"
              class="theme cool-theme"
            ></a>
            <a
              href="#"
              id="theme05"
              @click="clickTheme('#theme05')"
              data-theme="light-theme"
              class="theme light-theme"
            ></a>
          </div>
          <div class="form-group col-md-12">
            <p>You can also use background image</p>
          </div>
          <div class="form-group col-md-12">
            <a
              href="#"
              id="bg1"
              @click="clickBg('#bg1')"
              data-bg="bg1"
              class="theme theme-bg"
            ></a>
            <a
              href="#"
              id="bg2"
              @click="clickBg('#bg2')"
              data-bg="bg2"
              class="theme theme-bg"
            ></a>
            <a
              href="#"
              id="bg3"
              @click="clickBg('#bg3')"
              data-bg="bg3"
              class="theme theme-bg"
            ></a>
            <a
              href="#"
              id="bg4"
              @click="clickBg('#bg4')"
              data-bg="bg4"
              class="theme theme-bg"
            ></a>
          </div>
          <div class="form-group col-md-12">
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                id="toggle-bg"
                checked
                @change="changeBg"
              />
              <label class="custom-control-label" for="toggle-bg">
                Background image
              </label>
            </div>
          </div>
          <div class="form-group col-md-12">
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                id="toggle-border-radius"
                @change="changeBorder"
              />
              <label class="custom-control-label" for="toggle-border-radius">
                Border radius
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <img src="@/assets/images/admin_setting.svg" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Setting",
  data() {
    return {
      themes:
        "default-theme legacy-theme chiller-theme ice-theme cool-theme light-theme",
      bgs: "bg1 bg2 bg3 bg4"
    };
  },
  methods: {
    clickToggleSidebar() {
      window.$(".page-wrapper").toggleClass("toggled");
    },
    clickPinSidebar() {
      if (window.$(".page-wrapper").hasClass("pinned")) {
        window.$(".page-wrapper").removeClass("pinned");
        window.$("#sidebar").unbind("hover");
      } else {
        window.$(".page-wrapper").addClass("pinned");
        window.$("#sidebar").hover(
          function() {
            console.log("mouseenter");
            window.$(".page-wrapper").addClass("sidebar-hovered");
          },
          function() {
            console.log("mouseout");
            window.$(".page-wrapper").removeClass("sidebar-hovered");
          }
        );
      }
    },
    clickOverlay() {
      window.$(".page-wrapper").toggleClass("toggled");
    },
    clickTheme(id) {
      window.$("[data-theme]").removeClass("selected");
      window.$(id).addClass("selected");
      window.$(".page-wrapper").removeClass(this.themes);
      window.$(".page-wrapper").addClass(window.$(id).attr("data-theme"));
    },
    clickBg(id) {
      window.$("[data-bg]").removeClass("selected");
      window.$(id).addClass("selected");
      window.$(".page-wrapper").removeClass(this.bgs);
      window.$(".page-wrapper").addClass(window.$(id).attr("data-bg"));
    },
    changeBg() {
      //e.preventDefault();
      window.$(".page-wrapper").toggleClass("sidebar-bg");
    },
    changeBorder() {
      //e.preventDefault();
      window.$(".page-wrapper").toggleClass("boder-radius-on");
    }
  }
};
</script>
