<script setup>
import { ref } from 'vue'

const showMenu = ref(false)


</script>

<template>
    <div class="">
        <div class="min-h-screen flex relative lg:static surface-ground">
            <div id="app-sidebar-5" :class="showMenu ? '' : 'hidden'"
                class="bg-gray-900 h-screen p-component lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 border-gray-800 w-18rem lg:w-7rem select-none">

                <div class="flex flex-column h-full">
                    <div class="flex align-items-center justify-content-center flex-shrink-0" style="height: 60px;"><img
                            src="https://upload.wikimedia.org/wikipedia/commons/4/46/Bitcoin.svg" alt="Image" height="30">
                    </div>
                    <div>
                        <ul class="list-none p-3 m-0">
                            <router-link to="/" class="no-underline">
                                <li><a
                                        class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple"><i
                                            class="pi pi-home mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i><span
                                            class="font-medium inline text-base lg:text-xs lg:block">Dashboard</span><span
                                            class="p-ink" role="presentation" aria-hidden="true"></span></a></li>
                            </router-link>
                            <router-link to="/pool" class="no-underline">
                                <li><a
                                        class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple"><i
                                            class="pi pi-search mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i><span
                                            class="font-medium inline text-base lg:text-xs lg:block">Pool</span><span
                                            class="p-ink" role="presentation" aria-hidden="true"></span></a></li>
                            </router-link>
                            <router-link to="/ganancias" class="no-underline">
                                <li><a
                                        class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple"><i
                                            class="pi pi-users mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg"></i><span
                                            class="font-medium inline text-base lg:text-xs lg:block">Ganancias</span><span
                                            class="p-ink" role="presentation" aria-hidden="true"></span></a></li>
                            </router-link>

                            <router-link to="/mineros" class="no-underline">
                                <li><a
                                        class="flex flex-row lg:flex-column align-items-center cursor-pointer p-3 lg:justify-content-center hover:bg-gray-800 border-round text-gray-300 hover:text-white transition-duration-150 transition-colors p-ripple">
                                        <i
                                            class="pi pi-chart-line mr-2 lg:mr-0 mb-0 lg:mb-2 text-base lg:text-lg p-overlay-badge"></i><span
                                            class="font-medium inline text-base lg:text-xs lg:block">Mineros</span><i
                                            class="pi pi-chevron-down ml-auto lg:hidden"></i><span class="p-ink"
                                            role="presentation" aria-hidden="true"></span></a>
                                </li>
                            </router-link>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="min-h-screen flex flex-column relative flex-auto">
                <div class="p-5 flex flex-column flex-auto">
                    <div class="flex justify-content-center lg:hidden xl:hidden">
                        <v-icon name="co-hamburger-menu" class="white" @click="showMenu = !showMenu" />
                    </div>
                    <router-view />
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.white{
    color: white;
}
</style>