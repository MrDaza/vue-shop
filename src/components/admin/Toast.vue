<template>
  <div
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    class="toast"
    style="position: absolute; top: 10px; right: 20px;"
  >
    <div :class="'toast-header ' + toast.class">
      <strong class="mr-auto">{{ toast.title }}</strong>
      <small class="text-muted">{{ toast.time }}</small>
      <button
        type="button"
        class="ml-2 mb-1 close"
        data-dismiss="toast"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="toast-body">
      {{ toast.message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "toast",
  props: {
    toast: Object
  }
};
</script>
