<script setup>
import { onMounted, onUnmounted, onUpdated, computed, nextTick } from "vue"
import { useData } from "../stores/data";

const store = useData();
let refresh;
const totalData = computed(() => {
    return store.getTotalData
})

const binanceUrl = "https://pool.binance.com/es/statistics?urlParams="

const getFullData = computed(() => {
    return store.getFullData
})

function hashRateFormatted(value) {
    return (Number(value) * 10 ** -12).toFixed(2) + " TH/s"
};

function percentageOfUse(value1, value2) {
    return Number(((Number(value1) / value2) * 100).toFixed(2))
}

onMounted(() => {
    store.fetchDataTotal();
    store.fetchFullData();
    refresh = setInterval(function () {
        nextTick(store.fetchDataTotal(), store.fetchFullData())
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
            <div class="col-12 sm:col-6 md:col-6 md:block md:p-2 lg:col-4 lg:p-2">
                <Card class="flex flex-column align-items-center bg-blue-700 text-lg md:text-lg text-white">
                    <template #title>
                        <p class="text-center">{{ totalData.totalMinersUp }} | 985 </p>
                    </template>
                    <template #subtitle>
                        <p class="text-center text-white">Activos | Total </p>
                    </template>
                    <template #content>
                        <p class="text-xs text-blue-100 sm:text-base md:text-lg text-center">Uso actual: {{
                            percentageOfUse(totalData.totalMinersUp, 985) }}%</p>
                    </template>
                </Card>
            </div>
            <div class="col-12 sm:col-6 md:col-6 md:block md:p-2 lg:col-4 lg:p-2">
                <Card class="flex flex-column align-items-center bg-blue-700 text-lg md:text-lg text-white">
                    <template #title class="flex justify-content-center">
                        <div v-if="totalData.totalMinersDown > 0" class="text-red-700">
                            <p class="text-center">{{ totalData.totalMinersDown }}</p>
                        </div>
                        <div v-else class="text-red-400">
                            <p class="text-center">{{ totalData.totalMinersDown }}</p>
                        </div>
                    </template>
                    <template #subtitle class="flex justify-content-center">
                        <p class="text-white">Inactivos Total</p>
                    </template>
                    <template #content><br></template>
                </Card>
            </div>
            <div class="col-12 sm:col-6 md:col-6 md:block md:p-2 lg:col-4 lg:p-2">
                <Card class="flex flex-column align-items-center bg-blue-700 text-lg md:text-lg text-white">
                    <template #title>
                        <p class="text-center">{{ hashRateFormatted(totalData.totalTHs) }}</p>
                    </template>
                    <template #subtitle>
                        <p class="text-center text-white">Activos</p>
                    </template>
                    <template #content>

                        <p class="text-center text-xs text-blue-100 sm:text-base md:text-lg">Total TH/s: {{
                            (percentageOfUse(totalData.totalTHs, 12780) / 10 **
                                12).toFixed(2) }}%</p>

                    </template>
                </Card>
            </div>

        </div>
        <div class="grid">
            <div class="col-12 sm:col-6 md:col-6 md:block md:p-2 lg:col-4 lg:p-2">

                <table>
                    <tr>
                        <th>Nombre Pool</th>
                        <th>Activa</th>
                        <th>Inactivas</th>
                        <th>Ir al Pool</th>
                    </tr>

                    <tr v-for="fullData in getFullData" :key="fullData">
                        <td>{{ fullData[0].data.userHash.userName }}</td>
                        <td>{{ fullData[1].data.validNum }}</td>
                        <td>{{ fullData[1].data.invalidNum }}</td>
                        <td><a class="no-underline" :href="`${binanceUrl}${fullData[0].data.observerLinksRet.urlParams}`" target="_blank">Ir</a></td>
                        
                    </tr>

                </table>

            </div>
        </div>
    </div>
</template>

<style scoped></style>