<template>
  <div style="transition: visibility 0s, opacity 0.5s linear">
    <div class="flex justify-center">
      <div
        class="flex justify-center absolute top-8 w-4 h-4 border-t border-l border-gray-200 transform rotate-45 bg-white z-50"
      ></div>
    </div>
    <div
      class="flex justify-end absolute -right-12 top-10 md:-right-14 lg:-right-20 w-64 md:w-72 py-3 shadow-lg border border-gray-200 bg-white z-30"
    >
      <div class="flex items-center flex-col">
        <p class="capitalize text-luna-gray-300 text-base font-bold">my cart</p>
        <p class="text-luna-sm text-gray-400">2 items in cart</p>
        <router-link to="/cart" class="mt-4 w-full px-6">
          <button
            class="w-full border-2 border-luna-gray-300 py-1 text-xs font-semibold capitalize hover:text-gray-100 hover:bg-luna-gray-300 transition-colors duration-200"
          >
            view or edit your cart
          </button>
        </router-link>
        <div v-for="(n, index) in 3" :key="index">
          <hr class="border-gray-300 w-full my-3" />
          <div class="flex items-center w-full px-4">
            <div class="w-2/12">
              <p class="font-semibold">
                <span class="text-sm mr-1 text-gray-00">1</span
                ><span class="text-luna-xs">X</span>
              </p>
            </div>
            <div class="w-3/12">
              <img src="../assets/images/image6.png" class="w-12 h-14" alt="" />
            </div>
            <div class="w-7/12">
              <p class="capitalize text-luna-sm text-luna-gray-300">
                <span class="uppercase font-semibold">zaline women:</span>
                women tote bag made with 100% cutton
              </p>
            </div>
          </div>
        </div>
        <hr class="border-gray-300 w-full my-3" />
        <div class="flex justify-between items-center w-full px-4">
          <p class="uppercase text-luna-sm font-semibold">order subtotal</p>
          <p class="uppercase text-luna-sm font-semibold">mad 348.10</p>
        </div>
        <div class="mt-4 w-full mb-3 px-4">
          <button
            class="w-full border-2 border-luna-gray-300 capitalize text-xs font-semibold text-gray-100 hover:text-luna-gray-300 bg-luna-gray-300 hover:bg-white transition-colors duration-200 py-2"
          >
            go to checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
