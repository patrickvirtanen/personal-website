<template>
  <div id="app">
    <Header></Header>
    <main-page></main-page>
    <Footer></Footer>

  </div>
</template>

<script>
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    MainPage,
    Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap");
* {
  margin: 0;
  padding: 0 0;
  box-sizing: border-box;
}
#app {
}
</style>
