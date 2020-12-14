<template>
  <div class="py-7 shadow-md bg-white">
    <div class="flex justify-between items-center container mx-auto">
      <h1
        class="text-2xl md:text-5xl uppercase tracking-widest text-luna-gray-300 m-0 p-0"
      >
        <router-link to="/"> luna </router-link>
      </h1>
      <ul
        class="lg:text-sm xl:text-lg uppercase text-luna-gray-300 tracking-wider hidden lg:flex"
      >
        <li class="mr-12"><router-link to="/">home</router-link></li>
        <li class="mr-12">
          <router-link to="/products">products</router-link>
        </li>
        <li class="">contact</li>
      </ul>

      <ul class="flex items-center">
        <li class="mr-6">
          <img
            src="../assets/images/search.png"
            class="w-5 h-5 md:w-6 md:h-6"
            alt=""
          />
        </li>
        <li class="relative mr-6">
          <img
            src="../assets/images/heart.png"
            class="w-5 h-5 md:w-6 md:h-6"
            alt=""
          />
        </li>
        <li class="mr-6">
          <div class="relative">
            <div class="relative" @click="show = !show">
              <img
                src="../assets/images/cart.png"
                class="w-5 h-5 md:w-6 md:h-6 cursor-pointer"
                alt=""
              />
              <div
                class="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-luna-gray-300 text-luna-xs text-gray-100 flex justify-center items-center font-semibold"
              >
                <p class="">11</p>
              </div>
            </div>
            <CartDown v-if="show" />
          </div>
        </li>
        <li>
          <img
            src="../assets/images/user.png"
            class="w-5 h-5 md:w-6 md:h-6"
            alt=""
          />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import CartDown from "./CartDown";
export default {
  components: {
    CartDown,
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>
