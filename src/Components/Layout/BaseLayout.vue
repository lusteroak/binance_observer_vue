<script setup>
import { ref } from 'vue'

const showMenu = ref(false)
</script>

<template>
  <div class="flex bg-blue-900 overflow-x-hidden">
    <div id="app-sidebar-5" :class="showMenu ? 'fadeinleft animation-duration-500' : 'hidden'"
      class="relative col-4 sm:block sm:col-3 md:col-2 bg-blue-600 p-component flex-shrink-0 border-gray-800 select-none">
      <div class="flex flex-column lg:h-full">
        <div class="flex align-items-center justify-content-center flex-shrink-0" style="height: 60px">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt="Image" height="30" />
        </div>
        <div>
          <ul class="list-none p-0 sm:p-2 lg:p-3">
            <router-link to="/" class="no-underline">
              <li>
                <a
                  class="flex flex-row lg:flex-column cursor-pointer p-1 lg:justify-content-center hover:bg-orange-500 border-round hover:text-white transition-duration-150 transition-colors p-ripple">
                  <span class="font-medium inline text-sm sm:text-xl lg:text-2xl lg:block">Dashboard</span></a>
              </li>
            </router-link>
            <router-link to="/pool" class="no-underline">
              <li>
                <a
                  class="flex flex-row lg:flex-column cursor-pointer p-1 lg:justify-content-center hover:bg-orange-500 border-round hover:text-white transition-duration-150 transition-colors p-ripple"><span
                    class="font-medium inline text-sm sm:text-xl lg:text-2xl lg:block">Pool</span><span class="p-ink"
                    role="presentation" aria-hidden="true"></span></a>
              </li>
            </router-link>
            <router-link to="/ganancias" class="no-underline">
              <li>
                <a
                  class="flex flex-row lg:flex-column cursor-pointer p-1 lg:justify-content-center hover:bg-orange-500 border-round hover:text-white transition-duration-150 transition-colors p-ripple"><span
                    class="font-medium inline text-sm sm:text-xl lg:text-2xl lg:block">Ganancias</span><span class="p-ink"
                    role="presentation" aria-hidden="true"></span></a>
              </li>
            </router-link>

            <!-- <router-link to="/mineros" class="no-underline">
                                <li><a
                                        class="flex flex-row lg:flex-column align-items-center cursor-pointer p-1 lg:justify-content-center hover:bg-orange-500 border-round hover:text-white transition-duration-150 transition-colors p-ripple">
                                        <i
                                            class="pi pi-chart-line mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg p-overlay-badge"></i><span
                                            class="font-medium inline text-sm sm:text-xl lg:text-xs lg:block">Mineros</span><i
                                            class="pi pi-chevron-down ml-auto lg:hidden"></i><span class="p-ink"
                                            role="presentation" aria-hidden="true"></span></a>
                                </li>
                            </router-link> -->
          </ul>
        </div>
      </div>
    </div>
    <div class="min-h-screen w-full flex sm:block lg:static bg-blue-800 m-0">
      <div class="min-h-full w-full flex sm:block">
        <div class="flex md:block p-1">
          <router-view />
        </div>
        <div class="block">
          <svg class="sm:hidden w-2rem text-white" @click="showMenu = !showMenu" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.router-link-active>li>a>span {
  color: black !important;
}

.router-link-exact-active>li>a>span {
  color: black !important;
  font-weight: bold;
}

a:any-link {
  color: white;
}
</style>
