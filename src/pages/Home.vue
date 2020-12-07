<template>
  <div>
    <Hero />
    <Products />
    <Banner />
    <Products />
    <Banner />
  </div>
</template>
<script>
import Hero from "../components/Hero";
import Products from "../components/Products";
import Banner from "../components/Banner";

export default {
  components: {
    Hero,
    Products,
    Banner,
  },
};
</script>
