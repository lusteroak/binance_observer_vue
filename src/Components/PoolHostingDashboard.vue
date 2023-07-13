<script setup>
import { onMounted, onUnmounted, onUpdated, computed, nextTick } from "vue"
import { useData } from "../stores/data";

const store = useData();
let refresh;
const totalData = computed(() => {
    return store.getTotalData
})

function hashRateFormatted(value) {
    return (Number(value) * 10 ** -12).toFixed(2) + " TH/s"
};

function percentageOfUse(value) {
    return ((Number(value) / 1060 ) * 100).toFixed(2) + "%"
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
        <div class="grid flex-row justify-content-center">
            <div class="col-12 md:col-6 lg:col-2  xl:col-3">
                <Card class="flex flex-column align-items-center">
                    <template #title> {{ totalData.totalMinersUp }} / 1060</template>
                    <template #subtitle>Activos / Total </template>
                    <template #content>
                        <div v-if="true">
                            <div class="flex justify-content-evenly">
                                Uso actual: {{ percentageOfUse(totalData.totalMinersUp) }}
                            </div>
                        </div>
                    </template>
                </Card>
            </div>
            <div class="col-12 md:col-6  lg:col-2  xl:col-3">
                <Card class="flex flex-column">
                    <template #title class="flex justify-content-center">
                        <p>{{ totalData.totalMinersDown }}</p>
                    </template>
                    <template #subtitle class="flex justify-content-center">Inactivos Total </template>
                </Card>
            </div>
            <div class="col-12 md:col-6  lg:col-2  xl:col-3 w-4">
                <Card class="flex flex-column align-items-center">
                    <template #title>
                        <p>{{ hashRateFormatted(totalData.totalTHs) }} 12500</p>
                    </template>
                    <template #subtitle>Activos / Total </template>
                    <template #content>
                        <div v-if="true">
                            <div class="flex justify-content-evenly">
                                Uso actual: 75%
                            </div>
                        </div>
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>

<style scoped></style>