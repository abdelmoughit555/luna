<template>
  <div>
    <div class="flex">
      <div class="w-3/4 md:w-6/12 flex items-start">
        <div class="mr-3 md:mr-6">
          <img
            src="../assets/images/image1.png"
            class="w-24 h-16 md:h-24 object-cover"
            alt=""
          />
        </div>
        <p
          class="capitalize text-xs md:text-sm text-luna-gray-300 pr-8 md:pr-16"
        >
          <span class="uppercase font-semibold">zaline women:</span>
          women tote bag made with 100% cutton
        </p>
      </div>
      <div class="w-1/4 text-right md:text-left md:w-2/12">
        <p
          class="uppercase font-semibold text-xs md:text-sm text-luna-gray-300"
        >
          mad 199.99
        </p>
        <div class="mt-2 block md:hidden">
          <button
            @click="show = !show"
            class="py-1 px-5 border border-luna-gray-300 text-xs text-luna-gray-300 font-medium capitalize hover:bg-luna-gray-300 hover:text-gray-100 transition-colors duration-200"
          >
            edit
          </button>
        </div>
      </div>
      <div class="hidden md:w-1/12 md:flex md:justify-center">
        <div
          class="border border-luna-gray-300 h-9 w-14 px-3 py-2 flex items-center justify-between"
        >
          <span class="text-sm font-bold mr-1">1</span>
          <div class="flex flex-col justify-between h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              viewBox="0 0 24 24"
              class="fill-current text-gray-900"
            >
              <path d="M24 22h-24l12-20z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              viewBox="0 0 24 24"
              class="fill-current text-gray-900"
            >
              <path d="M12 21l-12-18h24z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="hidden md:flex md:justify-end md:w-2/12">
        <p class="uppercase font-semibold text-sm">mad 199.99</p>
      </div>
      <div class="hidden md:w-1/12 md:flex md:justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          class="fill-current text-luna-gray-300 mt-1"
        >
          <path
            d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
          />
        </svg>
      </div>
    </div>
    <div
      class="grid grid-cols-4 gap-x-4 items-center mt-4 transition duration-200"
      v-if="show"
    >
      <button
        class="w-full py-1 border border-luna-gray-300 text-luna-gray-300 capitalize text-xs font-semibold"
      >
        remove
      </button>
      <p class="capitalize text-xs text-center font-semibold">qty</p>
      <input
        class="w-full py-1 border border-luna-gray-300 text-luna-gray-300 capitalize text-xs font-semibold text-center"
        value="1"
      />
      <button
        class="w-full py-1 border border-luna-gray-300 capitalize text-xs font-semibold bg-luna-gray-300 text-gray-100 hover:text-luna-gray-300 hover:bg-white transition-colors duration-200"
      >
        update
      </button>
    </div>
    <hr class="border-gray-200 my-4" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>
