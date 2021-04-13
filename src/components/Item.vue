<template>
  <div>
    <div class="flex">
      <div class="flex items-start w-3/4 md:w-6/12">
        <div class="mr-3 md:mr-6">
          <img
            src="../assets/images/image1.png"
            class="object-cover w-24 h-16 md:h-24"
            alt=""
          />
        </div> ergergerg
        <p
          class="pr-8 text-xs capitalize md:text-sm text-luna-gray-300 md:pr-16"
        >
          <span class="font-semibold uppercase">zaline women:</span>
          women tote bag made with 100% cutton
        </p>
      </div>
      <div class="w-1/4 text-right md:text-left md:w-2/12">
        <p
          class="text-xs font-semibold uppercase md:text-sm text-luna-gray-300"
        >
          mad 199.99
        </p>
        <div class="block mt-2 md:hidden">
          <button
            @click="show = !show"
            class="px-5 py-1 text-xs font-medium capitalize transition-colors duration-200 border border-luna-gray-300 text-luna-gray-300 hover:bg-luna-gray-300 hover:text-gray-100"
          >
            edit
          </button>
        </div>
      </div>
      <div class="hidden md:w-1/12 md:flex md:justify-center">
        <div
          class="flex items-center justify-between px-3 py-2 border border-luna-gray-300 h-9 w-14"
        >
          <span class="mr-1 text-sm font-bold">1</span>
          <div class="flex flex-col justify-between h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              viewBox="0 0 24 24"
              class="text-gray-900 fill-current"
            >
              <path d="M24 22h-24l12-20z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              viewBox="0 0 24 24"
              class="text-gray-900 fill-current"
            >
              <path d="M12 21l-12-18h24z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="hidden md:flex md:justify-end md:w-2/12">
        <p class="text-sm font-semibold uppercase">mad 199.99</p>
      </div>
      <div class="hidden md:w-1/12 md:flex md:justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 24 24"
          class="mt-1 fill-current text-luna-gray-300"
        >
          <path
            d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
          />
        </svg>
      </div>
    </div>
    <div
      class="grid items-center grid-cols-4 mt-4 transition duration-200 gap-x-4"
      v-if="show"
    >
      <button
        class="w-full py-1 text-xs font-semibold capitalize border border-luna-gray-300 text-luna-gray-300"
      >
        remove
      </button>
      <p class="text-xs font-semibold text-center capitalize">qty</p>
      <input
        class="w-full py-1 text-xs font-semibold text-center capitalize border border-luna-gray-300 text-luna-gray-300"
        value="1"
      />
      <button
        class="w-full py-1 text-xs font-semibold text-gray-100 capitalize transition-colors duration-200 border border-luna-gray-300 bg-luna-gray-300 hover:text-luna-gray-300 hover:bg-white"
      >
        update
      </button>
    </div>
    <hr class="my-4 border-gray-200" />
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
