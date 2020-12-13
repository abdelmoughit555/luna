<template>
  <div class="mt-6 lg:mt-12 container mx-auto">
    <h1 class="font-semibold text-luna-gray-300 text-xl md:text-2xl uppercase">
      your cart
    </h1>
    <div class="flex flex-col lg:flex-row mt-4 md:mt-8">
      <div class="flex flex-col w-full lg:w-9/12 mr-12">
        <div class="flex">
          <div class="w-3/4 md:w-6/12">
            <span class="capitalize font-semibold text-sm">item</span>
          </div>
          <div class="text-right md:text-left w-1/4 md:w-2/12">
            <span class="capitalize font-semibold text-sm">price</span>
          </div>
          <div class="hidden md:block md:w-1/12">
            <span
              class="capitalize font-semibold text-sm flex justify-center items-end"
              >qty</span
            >
          </div>
          <div class="hidden md:block md:w-2/12">
            <span
              class="capitalize font-semibold text-sm flex justify-end items-end"
              >total</span
            >
          </div>
          <div class="hidden md:w-1/12"></div>
        </div>
        <hr class="border-gray-200 my-3" />
        <div v-for="(n, index) in 4" :key="index">
          <Item />
        </div>
        <div class="flex flex-col md:flex-row justify-between mt-4">
          <div class="flex flex-col md:flex-row">
            <button
              class="w-full md:w-auto px-7 py-3 text-gray-900 capitalize text-sm font-semibold mr-4 border border-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-200"
            >
              continue shopping
            </button>
            <button
              class="mt-2 md:mt-0 w-full md:w-auto px-7 py-3 bg-gray-900 text-white capitalize text-sm font-semibold border border-gray-900 hover:bg-white hover:text-gray-900 transition-colors duration-200"
            >
              clear shopping cart
            </button>
          </div>
          <div class="mt-2 md:mt-0">
            <button
              class="w-full md:w-auto px-7 py-3 text-gray-900 capitalize text-sm font-semibold mr-4 border border-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-200"
            >
              update shopping cart
            </button>
          </div>
        </div>
      </div>
      <div class="w-full mt-12 lg:mt-0 lg:w-3/12 bg-luna-gray-100 h-full p-5">
        <h2 class="text-xl font-semibold tracking-wide">Summary</h2>
        <p class="mt-8 text-luna-gray-300 font-medium text-sm">
          Estimate Shipping and Tax
        </p>
        <p class="mt-1 text-xs text-gray-500">
          Tax included. Shipping calculated at checkout.
        </p>
        <div class="mt-6">
          <p class="text-luna-gray-300 font-medium capitalize text-sm">
            You have coupon?
          </p>
          <input
            type="text"
            class="w-full mt-2 p-2 rounded bg-gray-50 text-xs text-luna-gray-300 outline-none focus:bg-white"
            placeholder="Enter your coupon"
            name=""
            id=""
          />
        </div>
        <hr class="border-gray-300 my-6" />
        <div class="flex justify-between items-end">
          <p class="text-luna-base font-medium capitalize">subtotal</p>
          <p class="uppercase font-semibold text-sm">mad 348.10</p>
        </div>
        <div class="flex justify-between items-end mt-8">
          <p class="text-luna-base font-medium capitalize">order total</p>
          <p class="uppercase font-semibold text-sm">mad 348.10</p>
        </div>
        <div class="mt-4">
          <button
            class="w-full py-3 bg-gray-900 text-white capitalize text-sm font-semibold border border-gray-900 hover:bg-white hover:text-gray-900 transition-colors duration-200"
          >
            proceed to checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Item from "../components/Item";
export default {
  components: {
    Item,
  },
};
</script>
