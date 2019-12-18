<template>
  <div v-if="data.id" class="modal">
    <div class="modal__inner person">
      <button class="btn--close" @click="$emit('close-modal')"></button>
      <img
        class="person__img"
        :src="data.photoUrl"
        alt="Avatar"
        width="120"
        height="120"
      />
      <span><b>Candidate ID:</b> {{ data.id }}</span>
      <span><b>Name:</b> {{ data.firstName }}</span>
      <span><b>Surname:</b> {{ data.lastName }}</span>
      <span><b>Occupation:</b> {{ data.jobTitle }}</span>
      <button class="person__btn" @click="$emit('close-modal')">
        close
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["data"],
  data() {
    return {
      status: false
    };
  }
};
</script>

<style scoped lang="scss">
@import "../assets/styles/base";

.modal {
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 3s ease-in;
  &__inner {
    background: $base-color;
    border-radius: 8px;
    padding: 50px 30px 20px;
    margin: 10px;
    max-width: 600px;
    position: relative;
  }
  .btn--close {
    background: url("../assets/icons/close.svg") no-repeat center;
    border: 1px solid transparent;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    right: -30px;
    &:hover,
    &:active {
      opacity: 0.8;
    }
    @media screen and (max-width: 465px) {
      top: -25px;
      right: 0;
    }
  }
}
.person {
  display: flex;
  flex-direction: column;
  &__img {
    background: $accent;
    border-radius: 50%;
    color: $base-color;
    line-height: 40px;
    text-align: center;
    height: 120px;
    width: 120px;
    margin-bottom: 16px;
  }
  b {
    font-weight: bold;
  }
  span:not(:last-of-type) {
    margin-bottom: 10px;
  }
  &__btn {
    background-color: $light-gray;
    border: 2px solid $gray;
    color: $gray;
    border-radius: 24px;
    padding: 5px 15px;
    text-transform: capitalize;
    width: 100px;
    margin-top: 40px;
    &:hover,
    &:active {
      background: $gray;
      color: $light-gray;
      transition: background 0.1s ease-in;
    }
  }
}
</style>
