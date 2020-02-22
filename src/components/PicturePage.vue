<template>
    <div class="picture-page">
        <img class="picture-page--photo" src="../assets/computer.png" alt="">
    </div>
</template>


<style lang="scss" scoped>
@import "../scss/_variables.scss";

.picture-page {
  display: flex;
  flex-direction: column;
  background-color: #3c3c3e;

  &--photo {
    width: 100%;
  }
}

@media (min-width: 576px) {
  .picture-page {
    height: 80vh;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    &--photo {
      width: 80%;
      border-radius: 15px;
      box-shadow: 1rem 0.5rem 1rem rgb(42, 42, 42);
    }
  }
}
</style>
