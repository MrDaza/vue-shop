<template>
  <div class="fixed-bottom bg-white">
    <footer class="footer bg-white">
      <div class="footer-left">
        <span>©</span>
        <span class="text-copyright">&nbsp;Copyright</span>
        <strong class="text-inhouse">&nbsp;inHouse S.A.S&nbsp;</strong>
        <span class="text-reserve"> Todos los derechos reservados.&nbsp;</span>
      </div>
      <div class="footer-right">
        <span class="text-build">Desarrollado con&nbsp;&nbsp; </span>
        <span class="text-love">❤️ MrDaza 2020</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  padding: 10px 10%;
}
.footer-left,
.footer-right {
  width: 50%;
  text-align: center;
}
@media (max-width: 1199px) {
  .footer-left,
  .footer-right {
    width: inherit;
    text-align: center;
  }
  .footer-left .text-reserve {
    display: none;
  }
}
@media (max-width: 991px) {
  .footer-left,
  .footer-right {
    width: inherit;
    text-align: center;
  }
  .footer-left .text-reserve {
    display: none;
  }
}
@media (max-width: 767px) {
  .footer-left,
  .footer-right {
    width: inherit;
    text-align: center;
  }
  .footer-left .text-reserve,
  .footer-right .text-build {
    display: none;
  }
}
@media (max-width: 575px) {
  .footer-left .text-reserve,
  .footer-left .text-copyright,
  .footer-right .text-build {
    display: none;
  }
  .footer-left,
  .footer-right {
    width: inherit;
    text-align: center;
  }
}
</style>
