<template>
  <div
    class="mt-6 lg:mt-12 container mx-auto px-5 md:px-8 lm:px-16 lg:px-0 lx:px-16 xl:px-48"
  >
    <article class="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
      <div class="flex flex-col">
        <div class="h-60 md:h-120 lg:h-140">
          <img
            src="../assets/images/image7.png"
            class="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div class="flex grid-cols-4 gap-x-2 mt-3 lg:mt-4">
          <div v-for="(n, index) in 4" :key="index">
            <div>
              <img
                :src="require(`../assets/images/image${index + 1}.png`)"
                class="h-16 lg:h-24 w-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col mt-6 lg:mt-0">
        <h1
          class="text-2xl md:text-4xl xl:text-luna-xl text-luna-gray-300 capitalize font-bold"
        >
          Women Face Line T-Shirt
        </h1>
        <div class="flex flex-col mt-3 md:mt-6">
          <p
            class="uppercase font-bold text-xl md:text-2xl xl:text-luna-lg text-luna-gray-300"
          >
            MAD 299.00
          </p>
          <p
            class="text-xs md:text-sm xl:text-luna-base line-through text-luna-gray-200"
          >
            MAD 399.00
          </p>
        </div>
        <div class="text-gray-600 mt-5 mb-8 md:my-8 text-sm md:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </div>
        <div class="flex flex-wrap items-center justify-between">
          <div class="flex flex-wrap items-end">
            <span class="capitalize text-luna-base font-medium mr-2"
              >Size:</span
            >
            <div class="p-0 m-0">
              <select
                class="text-xl xl:text-luna-lg text-luna-gray-300 capitalize outline-none appearance-none font-semibold leading-none"
                name=""
                id=""
              >
                <option value="" selected class="">medium</option>
              </select>
            </div>
          </div>
          <div class="flex flex-wrap">
            <div
              class="w-8 h-8 bg-gray-700 rounded-full border-2 shadow-luna-sm relative mr-3"
            ></div>
            <div
              class="w-7 h-7 bg-luna-orange-100 rounded-full relative mr-3"
            ></div>
            <div class="w-7 h-7 bg-gray-400 rounded-full relative"></div>
          </div>
        </div>
        <div class="flex justify-between items-center mt-10">
          <div>
            <button
              class="bg-gray-900 border-2 border-gray-900 px-11 h-12 text-gray-100 tracking-wide uppercase text-xs font-bold transition-colors duration-200 hover:bg-transparent hover:text-gray-900"
            >
              add to cart
            </button>
          </div>
          <div
            class="border-2 border-gray-900 h-12 w-20 px-3 py-2 flex items-center justify-between"
          >
            <span class="text-lg font-bold">1</span>
            <div class="flex flex-col justify-between h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                class="fill-current text-gray-900"
              >
                <path d="M24 22h-24l12-20z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                class="fill-current text-gray-900"
              >
                <path d="M12 21l-12-18h24z" />
              </svg>
            </div>
          </div>
        </div>
        <div class="mt-10">
          <ul>
            <li>
              <div class="flex items-center">
                <div class="w-1 h-1 bg-gray-400 rounded-full mr-1"></div>
                <p class="text-luna-gray-300 text-luna-base">
                  100% cotton (Heather colors contain polyester)
                </p>
              </div>
            </li>
            <li class="mt-1">
              <div class="flex items-center">
                <div class="w-1 h-1 bg-gray-400 rounded-full mr-1"></div>
                <p class="text-luna-gray-300 text-luna-base">
                  Fabric weight: 6 oz (203 g/m2)
                </p>
              </div>
            </li>
            <li class="mt-1">
              <div class="flex items-center">
                <div class="w-1 h-1 bg-gray-400 rounded-full mr-1"></div>
                <p class="text-luna-gray-300 text-luna-base">Pre-shrunk</p>
              </div>
            </li>
            <li class="mt-1">
              <div class="flex items-center">
                <div class="w-1 h-1 bg-gray-400 rounded-full mr-1"></div>
                <p class="text-luna-gray-300 text-luna-base">
                  100% cotton (Heather colors contain polyester)
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="mt-8 cursor-pointer">
          <p class="uppercase text-sm font-bold">+ more information</p>
        </div>
      </div>
    </article>
    <hr class="my-10" />
    <div class="flex flex-col">
      <h2 class="text-sm md:text-luna-gray-300 uppercase font-bold">
        customer reviews
      </h2>
      <div class="border px-2 md:px-24 py-5 md:py-10 mt-4">
        <div class="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            class="mr-4 -mt-3 fill-current text-luna-gray-300 hidden md:block"
          >
            <path
              d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"
            />
          </svg>
          <div>
            <p class="text-sm text-luna-gray-300">
              My first order arrived today in perfect condition. From the time I
              sent a question about the item to making the purchase, to the
              shipping and now the delivery, your company , has stayed in touch.
              Such great service. I look forward to shopping on your site in the
              future and would highly recommend it.
            </p>
            <div class="flex justify-between mt-2">
              <div class="flex items-center">
                <template v-for="(n, index) in 5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    :key="index"
                    class="fill-current text-luna-gold mr-1"
                  >
                    <path
                      d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                    />
                  </svg>
                </template>
              </div>
              <p class="capitalize text-gray-700 text-luna-base font-semibold">
                - Tama Brown
              </p>
            </div>
          </div>
        </div>
        <div class="flex justify-between mt-6">
          <button
            class="h-9 px-5 text-gray-900 font-bold capitalize border-2 border-gray-900 text-xs hover:bg-gray-900 hover:text-gray-100 transition-colors duration-200"
          >
            leave us a review
          </button>
          <div>
            <button
              class="h-9 px-3 font-bold capitalize transition-colors duration-200 bg-gray-900 border-2 border-gray-900 hover:bg-transparent hover:text-gray-900 text-gray-100 mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path
                  d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
                />
              </svg>
            </button>
            <button
              class="h-9 px-3 font-bold capitalize transition-colors duration-200 bg-gray-900 border-2 border-gray-900 hover:bg-transparent hover:text-gray-900 text-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                class="fill-current"
              >
                <path
                  d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
