<template>
  <div class="home bg-light">
    <NavBar></NavBar>
    <Jumbotron class="bg-white"></Jumbotron>
    <div class="container">
      <div class="row">
        <div v-for="(product, index) in products" :key="index" class="col-sm-4">
          <ProductItem v-bind:product="product"></ProductItem>
        </div>
      </div>
    </div>
    <br />
    <JumbotronRight class="bg-white"></JumbotronRight>
    <Footer></Footer>
    <Login></Login>
  </div>
</template>

<script>
// @ is an alias to /src

//import HelloWorld from "@/components/HelloWorld.vue";
import Jumbotron from "@/components/sites/Jumbotron.vue";
import ProductItem from "@/components/sites/ProductItem.vue";
import JumbotronRight from "@/components/sites/JumbotronRight.vue";

export default {
  name: "Home",
  data() {
    return {
      products: [
        {
          image: "p1.jpg",
          name: "Producto 1",
          desc: "Producto de alta calidad",
          cost: "3.000 COP"
        },
        {
          image: "p2.jpg",
          name: "Producto 2",
          desc: "Producto de alta calidad",
          cost: "8.500 COP"
        },
        {
          image: "p3.jpg",
          name: "Producto 3",
          desc: "Producto de alta calidad",
          cost: "13.000 COP"
        }
      ]
    };
  },
  components: {
    Jumbotron,
    ProductItem,
    JumbotronRight
  }
};
</script>
