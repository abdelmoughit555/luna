<template>
  <div class="container mx-auto">
    <div class="mt-6 md:mt-12 px-5 md:px-8 lm:px-16 lx:px-16 xl:px-48">
      <h1
        class="uppercase tracking-wider font-bold text-xl md:text-3xl text-center text-luna-gray-300"
      >
        new arrivals
      </h1>
      <hr class="my-6" />
      <div>
        <div class="flex flex-col-reverse md:flex-row">
          <div
            class="flex-1 md:bg-gray-50 md:px-4 md:py-3 text-sm md:text-xs capitalize font-semibold text-gray-600 mt-4 md:mt-0 mr-4"
          >
            <p>items 90</p>
          </div>
          <div class="flex flex-col md:flex-row md:items-center">
            <div
              class="text-sm md:text-xs w-full md:w-40 py-3 border-2 flex justify-center items-center mr-4 mt-2 md:mt-0"
            >
              <p class="font-semibold text-gray-500 capitalize mr-2">
                sort by:
              </p>
              <div class="relative leading-none">
                <select
                  name=""
                  class="font-semibold text-gray-700 capitalize outline-none appearance-none"
                  id=""
                >
                  <option value="" class="leading-none">price</option>
                </select>
              </div>
            </div>
            <div
              class="text-sm md:text-xs w-full mt-2 md:mt-0 md:w-40 h-12 border-2 flex justify-center items-center mr-4"
            >
              <p class="font-semibold text-gray-500 capitalize mr-2">
                filter by:
              </p>
              <div class="relative leading-none">
                <select
                  name=""
                  class="font-semibold text-gray-700 capitalize outline-none appearance-none"
                  id=""
                >
                  <option value="" class="leading-none">p</option>
                </select>
              </div>
            </div>
            <div class="hidden md:block mr-4">
              <img src="../assets/images/column.png" class="w-5 h-5" alt="" />
            </div>
            <div class="hidden md:block">
              <img src="../assets/images/list.png" class="w-5 h-5" alt="" />
            </div>
          </div>
        </div>
        <div
          class="grid grid-cols-2 ms:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-6 lx:gap-x-8 xl:gap-8 mt-6 md:mt-8 lg:mt-12"
        >
          <router-link
            to="/product"
            class="relative flex flex-col bg-gray-50"
            v-for="(n, index) in 12"
            :key="index"
          >
            <img
              src="../assets/images/image6.png"
              class="w-full h-36 ms:h-44 md:h-52 lm:h-52 lg:h-64 object-cover overflow-hidden"
              alt=""
            />
            <div class="px-2 md:px-4 py-3 md:py-4">
              <h1
                class="tracking-wide text-gray-900 capitalize text-xs md:text-base xl:text-lg font-semibold"
              >
                Stylish cage chair
              </h1>
              <p class="text-luna-xs md:text-xs my-1 text-gray-400">
                Minimalist flower pot
              </p>
              <div class="flex flex-col lg:flex-row lg:items-end">
                <p
                  class="text-gray-700 font-semibold mr-3 text-xs md:text-base"
                >
                  300.00 DH
                </p>
                <p
                  class="text-gray-500 text-luna-xs md:text-sm mt-0 lg:mt-0 line-through"
                >
                  400.00 DH
                </p>
              </div>
            </div>
            <div
              class="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 flex justify-center items-center absolute bg-gray-800 text-gray-100 top-2 right-2 lg:top-4 lg:right-4 rounded-full text-luna-xs md:text-xs lg:text-sm"
            >
              -30%
            </div>
          </router-link>
        </div>
      </div>
      <div class="flex justify-center mt-12">
        <div class="mr-3">
          <button
            class="border-2 border-gray-500 px-3 py-1 glex items-center justify-center text-sm text-gray-600"
          >
            E
          </button>
        </div>
        <div v-for="(n, index) in 6" :key="index" class="mr-3">
          <button
            class="border-2 border-gray-500 px-3 py-1 glex items-center justify-center text-sm text-gray-600"
          >
            {{ index + 1 }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
