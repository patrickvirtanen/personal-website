<template>
    <div class="title-page">
        <div class="text-center">

        <img class="logo" src="../assets/logo (kopia).png" alt="">
        </div>
        <div class="title-box">
            <h1 class="title-box__title">Patrick Virtanen</h1>
            <span class="title-box__sub-title">Software Developer</span>
        </div> 
    </div>
</template>

<style lang="scss" scoped>
@import "../scss/_variables.scss";

.title-page {
  display: flex;
  flex-direction: column;
  background-color: rgb(245, 150, 121);
  height: 50vh;
}
.logo {
  width: 60%;
  background-color: rgb(245, 150, 121);

  animation: moveIn 1s linear;
  animation-fill-mode: backwards;
}

.title-box {
  text-align: center;
  margin-top: -2rem;
  animation: moveIn 1s ease-in 1s;
  animation-fill-mode: backwards;
  &__title {
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 1rem;
    color: #3c3c3e;
  }
  &__sub-title {
    font-family: "Montserrat";
    font-weight: 400;
    font-size: 1.5rem;
    color: #3c3c3e;
  }
}

@keyframes moveIn {
  0% {
    opacity: 0;
    transform: translateY(1.5rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (min-width: 576px) {
  .title-page {
    display: flex;
    flex-direction: column;
    background-color: rgb(245, 150, 121);
    height: 50vh;
  }
  .logo {
    width: 10%;
    background-color: rgb(245, 150, 121);

    animation: moveIn 1s linear;
    animation-fill-mode: backwards;
  }

  .title-box {
    margin-top: 0;
    &__title {
      font-size: 2rem;
    }
    &__sub-title {
      font-size: 2.5rem;
    }
  }
}
</style>
