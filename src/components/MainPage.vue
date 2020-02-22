<template>
    <div class="main-page">
        <div class="main-page__container">
            <landing-page></landing-page>
            <div class="column-2">
                <Information></Information>
            <picture-page></picture-page>
            </div>
            
        </div>
    </div>
</template>

<script>
import LandingPage from "./LandingPage";
import Information from "./Information";
import PicturePage from "./PicturePage";
export default {
  components: {
    LandingPage,
    Information,
    PicturePage
  }
};
</script>


<style lang="scss" scoped>
@import "../scss/_variables.scss";
.main-page {
  &__container {
    display: block;
    width: 100%;
    margin: -1px auto 0;
  }
}
.column-2 {
  display: flex;
  flex-direction: column;
}

@media (min-width: 576px) {
  .column-2 {
    flex-direction: row;
  }
}
</style>

