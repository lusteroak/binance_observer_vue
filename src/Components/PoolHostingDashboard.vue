<script setup>
import { onMounted, onUnmounted, onUpdated, computed, nextTick } from "vue"
import { useData } from "../stores/data";
import { ref } from "vue";

const showMenu = ref(false)

const store = useData();
let refresh;
const totalData = computed(() => {
    return store.getTotalData
})

function hashRateFormatted(value) {
    return (Number(value) * 10 ** -12).toFixed(2) + " TH/s"
};

function percentageOfUse(value1, value2) {
    return Number(((Number(value1) / value2) * 100).toFixed(2))
}

onMounted(() => {
    store.fetchDataTotal();
    refresh = setInterval(function () {
        nextTick(store.fetchDataTotal())
    }, 120000);
});

onUnmounted(() => clearInterval(refresh))


onUpdated(() => {
    nextTick()
})

</script>


<template>
    <div v-if="totalData">
        <div class="grid">
            <div class="col-12 sm:col-12 md:col-6 md:block md:p-2 lg:col-4 lg:p-2">
                <Card class="flex flex-column align-items-center  text-lg md:text-lg text-white">
                    <template #title>
                        <p class="text-center">{{ totalData.totalMinersUp }} | 1060</p>
                    </template>
                    <template #subtitle>
                        <p class="text-center text-white">Activos | Total </p>
                    </template>
                    <template #content>
                        <p class="text-xs text-blue-100 sm:text-base md:text-lg text-center">Uso actual: {{ percentageOfUse(totalData.totalMinersUp, 1060) }}%</p>
                    </template>
                </Card>
            </div>
            <div class="col-12 sm:col-12 md:col-6 md:block md:p-2 lg:col-4 lg:p-2">
                <Card class="flex flex-column align-items-center  text-lg md:text-lg text-white">
                    <template #title class="flex justify-content-center">
                        <div v-if="totalData.totalMinersDown> 0" class="text-red-700">
                            <p class="text-center">{{ totalData.totalMinersDown }}</p>
                        </div>
                        <div v-else class="text-red-400">
                            <p class="text-center">{{ totalData.totalMinersDown }}</p>
                        </div>
                    </template>
                    <template #subtitle class="flex justify-content-center"><p class="text-white">Inactivos Total</p></template>
                    <template #content><br></template>
                </Card>
            </div>
            <div class="col-12 sm:col-12 md:col-6 md:block md:p-2 lg:col-4 lg:p-2">
                <Card class="flex flex-column align-items-center  text-lg md:text-lg text-white">
                    <template #title>
                        <p class="text-center">{{ hashRateFormatted(totalData.totalTHs) }}</p>
                    </template>
                    <template #subtitle>
                        <p class="text-center text-white">Activos</p>
                    </template>
                    <template #content>

                        <p class="text-center text-xs text-blue-100 sm:text-base md:text-lg">Total TH/s: {{ (percentageOfUse(totalData.totalTHs, 12780) / 10 **
                            12).toFixed(2) }}%</p>

                    </template>
                </Card>
            </div>

        </div>
    </div>
</template>

<style scoped></style>