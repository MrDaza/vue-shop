<template>
  <div class="card text-center" style="width: 20rem;">
    <img src="@/assets/images/product/p2.jpg" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title text-primary">{{ product.name }}</h5>
      <p class="card-text">
        {{ product.desc }}
      </p>
      <p class="card-text">
        <small class="text-muted">
          Last updated 3 mins ago
        </small>
      </p>
    </div>
    <div class="card-body">
      <a href="#" class="card-link text-primary">{{ product.cost }}</a>
      <a href="#" class="btn btn-primary card-link">Another link</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: Object
  }
};
</script>
