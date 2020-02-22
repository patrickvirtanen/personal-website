<template>
    <div class="main-footer">
        <div>
            <img class="main-footer__logo" src="../assets/logo (kopia).png" alt="">
        </div>
        <div class="main-footer__social">
            <a class="main-footer__social--tag" href="#">patrick.virtanen@gmail.com</a>
            <a class="main-footer__social--tag" href="#">LinkedIn</a>
            <a class="main-footer__social--tag" href="#">Facebook</a>
            <a class="main-footer__social--tag" href="#">Instagram</a>
        </div>
           
        
    </div>
</template>

<script>
export default {
  methods: {
    menu() {
      alert("HEllo");
    }
  }
};
</script>


<style lang="scss" scoped>
@import "../scss/_variables.scss";

.main-footer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  height: 50vh;
  background-color: rgb(245, 150, 121);
  padding: 0 1rem;

  &__logo {
    width: 30%;
  }
  &__social {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &--tag {
      color: #3c3c3e;
      line-height: 2.4;
      margin: 8px 0;
      font-size: 20px;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
}

@media (min-width: 576px) {
  .main-footer {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    height: 50vh;
    background-color: rgb(245, 150, 121);
    padding: 0 1rem;

    &__logo {
      width: 10%;
      margin-bottom: 1rem;
    }
    &__social {
      display: flex;
      flex-direction: row;
      justify-content: space-around;

      &--tag {
        color: #3c3c3e;
        line-height: 2.4;
        margin: 8px 0;
        font-size: 20px;
        text-decoration: none;
        text-transform: uppercase;
      }
    }
  }
}
</style>
