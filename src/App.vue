<template>
  <div>
    <Specials />
    <Header />
    <router-view></router-view>

    <Footer />
  </div>
</template>
<script>
import Header from "./components/Header";
import Specials from "./components/Specials";
import Footer from "./components/Footer";

export default {
  components: {
    Header,
    Specials,
    Footer,
  },
};
</script>
