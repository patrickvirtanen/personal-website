<template>
    <div class="main-header">
        <div>
            <img class="main-header__logo" src="../assets/logo (kopia).png" alt="">
        </div>
        
          <div class="main-header__ham-menu">

        <font-awesome-icon class="main-header__ham-menu--icon" icon="bars" @click="menu"/>
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

.main-header {
  display: flex;
  justify-content: space-between;

  height: 10vh;
  background-color: rgb(245, 150, 121);
  padding: 0 1rem;

  &__logo {
    height: 100%;
  }

  &__ham-menu {
    display: flex;
    justify-content: flex-end;
    align-content: center;
    &--icon {
      height: 100%;
      width: 10%;
      color: #3c3c3e;
      transition: all 1s;

      &:hover {
        color: red;
      }
    }
  }
}

@media (min-width: 576px) {
  .main-header {
    justify-content: space-around;
    &__logo {
      width: 10%;
    }

    &__ham-menu {
      display: flex;
      justify-content: flex-end;
      align-content: center;
      &--icon {
        height: 100%;
        width: 10%;
        color: #3c3c3e;
        transition: all 1s;

        &:hover {
          color: rgb(212, 209, 209);
        }
      }
    }
  }
}
</style>
