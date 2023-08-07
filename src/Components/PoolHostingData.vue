<script setup>
import { onMounted, onUnmounted, computed, onUpdated, nextTick } from "vue"
import { useData } from "../stores/data";

const store = useData();

let refresh;
const getFullData = computed(() => {
    return store.getFullData
})

function hashRateFormatted(value) {
    return (Number(value) * 10 ** -12).toFixed(2) + " TH/s"
};

onMounted(() => {
    store.fetchFullData();
    refresh = setInterval(function () {
        nextTick(store.fetchFullData())
    }, 120000);
});

onUpdated(() => {
    nextTick()
});

onUnmounted(() => clearInterval(refresh))

</script>

<template>
    <div class="grid">
        <div v-for="data in getFullData" :key="data" class="col-12 sm:col-6 lg:col-4 lg:m-0 xl:col-3">
            <Card class="flex flex-column align-items-center xl:flex-row text-sm md:text-lg">
                <template #title>
                    <p>{{ data[0].data.userHash.userName }}</p>
                </template>
                <template #subtitle>
                    <p>Hashrate: {{ hashRateFormatted(data[0].data.userHash.value) }}</p>
                </template>
                <template #content>
                    <div v-if="data[1].data.invalidNum" class="flex justify-content-evenly">
                        <Badge size="large" severity="success" text raised>
                            <p>{{ data[1].data.validNum }}</p>
                        </Badge>
                        <Badge size="large" severity="danger" text raised>
                            <p>{{ data[1].data.invalidNum }}</p>
                        </Badge>
                    </div>
                    <div v-else class="flex justify-content-center">
                        <Badge size="large" severity="success" text raised>
                            <p> {{ data[1].data.validNum }}</p>
                        </Badge>
                    </div>
                </template>
            </Card>
        </div>
    </div>
</template>

<style scoped></style>