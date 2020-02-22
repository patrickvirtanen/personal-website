<template>
    <div class="info-page">
        <div class="info-page__text">
            <p>Web Development is my passion</p>
            <a href="#">Visit my portfolio</a>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.info-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #3c3c3e;
  height: 50vh;

  &__text {
    color: rgb(245, 150, 121);
    font-family: "Montserrat", "Open Sans", "Arial", sans-serif;
    font-weight: 400;

    text-align: center;

    p {
      margin: 0;
      text-transform: uppercase;
      font-size: 24px;
    }

    a {
      text-decoration: none;
      color: rgb(245, 150, 121);
      font-size: 16px;
    }
  }
}

@media (min-width: 576px) {
  .info-page {
    height: 80vh;
    width: 50%;
  }
}
</style>
