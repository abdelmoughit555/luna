<template>
  <div class="mt-6 lg:mt-12 mx-auto container">
    <div class="px-0 md:px-8 lm:px-16 lx:px-16 xl:px-48">
      <h1
        class="font-semibold text-luna-gray-300 text-xl md:text-2xl uppercase"
      >
        Customer Login
      </h1>
      <div
        class="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 gap-x-10 mt-6"
      >
        <div class="bg-luna-gray-100 px-4 md:px-12 py-6">
          <h2
            class="font-semibold text-luna-gray-300 text-xl md:text-base capitalize"
          >
            registered Customers
          </h2>
          <p class="mt-3 text-luna-sm text-gray-600">
            If you have an account sign in with your email adress
          </p>
          <div class="mt-6">
            <div class="flex flex-col">
              <label
                for="email"
                class="text-luna-sm font-semibold text-gray-700"
                >Email</label
              >
              <input
                type="text"
                class="mt-2 rounded border border-luna-gray-200 px-3 text-xs py-2 text-luna-gray-300 focus:outline-none focus:border-luna-gray-300"
                placeholder="Your Email"
              />
            </div>
            <div class="flex flex-col mt-3">
              <label
                for="password"
                class="text-luna-sm font-semibold text-gray-700"
                >Password</label
              >
              <input
                type="text"
                class="mt-2 rounded border border-luna-gray-200 px-3 text-xs text-luna-gray-300 py-2"
                placeholder="Your Password"
              />
            </div>
          </div>
          <div class="flex items-center mt-6">
            <div class="mr-4">
              <button
                class="bg-gray-900 text-gray-200 capitalize text-luna-sm font-semibold px-8 py-2"
              >
                sign in
              </button>
            </div>
            <p class="text-luna-sm capitalize">forgot your password?</p>
          </div>
        </div>
        <div class="bg-luna-gray-100 px-4 md:px-12 py-6">
          <h2
            class="font-semibold text-luna-gray-300 text-xl md:text-base capitalize"
          >
            new customer?
          </h2>
          <p class="mt-3 text-luna-sm text-gray-600">
            Creating an account has many benefits:
          </p>
          <ul class="mt-3">
            <li class="mt-1 text-luna-sm text-gray-600 flex items-center">
              <div class="w-1 h-1 rounded-full bg-gray-600 mr-1"></div>
              Checkout out faster
            </li>
            <li class="mt-1 text-luna-sm text-gray-600 flex items-center">
              <div class="w-1 h-1 rounded-full bg-gray-600 mr-1"></div>
              Keep more than one address
            </li>
            <li class="mt-1 text-luna-sm text-gray-600 flex items-center">
              <div class="w-1 h-1 rounded-full bg-gray-600 mr-1"></div>
              Track orders and more
            </li>
          </ul>
          <div class="flex flex-col mt-6">
            <div class="">
              <button
                class="bg-gray-900 text-gray-200 capitalize text-luna-sm font-semibold w-44 py-2"
              >
                create an account
              </button>
            </div>
            <div class="mt-3">
              <button
                class="bg-gray-900 text-gray-200 capitalize text-luna-sm font-semibold w-44 py-2"
              >
                countinue as guest
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
