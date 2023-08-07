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
                <Card class="flex flex-column align-items-center xl:flex-row text-sm md:text-lg">
                    <template #title> {{ totalData.totalMinersUp }} / 1060</template>
                    <template #subtitle>Activos / Total </template>
                    <template #content>
                        <div v-if="true">
                            <div class="flex justify-content-evenly">
                                Uso actual: {{ percentageOfUse(totalData.totalMinersUp, 1060) }}%
                            </div>
                        </div>
                    </template>
                </Card>
            </div>
            <div class="col-12 sm:col-12 md:col-6 md:block md:p-2 lg:col-4 lg:p-2">
                <Card class="flex flex-column align-items-center xl:flex-row text-sm md:text-lg">
                    <template #title class="flex justify-content-center">
                        <p class="text-center">{{ totalData.totalMinersDown }}</p>
                    </template>
                    <template #subtitle class="flex justify-content-center">Inactivos Total </template>
                    <template #content><br></template>
                </Card>
            </div>
            <div class="col-12 sm:col-12 md:col-6 md:block md:p-2 lg:col-4 lg:p-2">
                <Card class="flex flex-column align-items-center xl:flex-row text-sm md:text-lg">
                    <template #title>
                        <p>{{ hashRateFormatted(totalData.totalTHs) }}</p>
                    </template>
                    <template #subtitle>
                        <p class="text-center">Activos</p>
                    </template>
                    <template #content>
                        <div v-if="true">
                            <p class="text-center">Total TH/s: {{ (percentageOfUse(totalData.totalTHs, 12780) / 10 **
                                12).toFixed(2) }}%</p>
                        </div>
                    </template>
                </Card>
            </div>

        </div>
    </div>
</template>

<style scoped></style>