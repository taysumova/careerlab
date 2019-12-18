<template>
  <div class="preloader">
    <span class="preloader__inner"></span>
  </div>
</template>

<script>
export default {
  name: "preloader"
};
</script>

<style lang="scss">
.preloader {
  display: flex;
  width: 100%;
  overflow: hidden;
  &__inner {
    border: 10px solid #009688;
    border-radius: 50%;
    border-bottom-color: #2c3e50;
    border-top-color: #2c3e50;
    display: block;
    animation: spin 2s linear infinite;
    margin: 0 auto;
    width: 60px;
    height: 60px;
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
