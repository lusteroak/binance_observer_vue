<script setup>
import { onMounted, computed, onUpdated, nextTick } from "vue"
import { useData } from "../stores/data";

const store = useData();


const getFullData = computed(() => {
    return store.getFullData
})

function hashRateFormatted(value) {
    return (Number(value) * 10 ** -12).toFixed(2) + " TH/s"
};

onMounted(() => {
    store.fetchFullData();
    setInterval(function () {
        nextTick(store.fetchFullData())
    }, 120000);
});

onUpdated(() => {
    nextTick()
});

</script>

<template>
    <div class="grid">
        <div v-for="data in getFullData" :key="data">
            <div v-if="data[0].data.userHash.value > 0" class="col-12 md:col-6  lg:col-2  xl:col-12">
                <Card class="flex flex-column align-items-center w-15rem">
                    <template #title>{{ data[0].data.userHash.userName }}</template>
                    <template #subtitle>Hashrate: {{ hashRateFormatted(data[0].data.userHash.value) }}</template>
                    <template #content>
                        <div v-if="data[1].data.invalidNum > 0">
                            <div class="flex justify-content-evenly">
                                <p>
                                    <Badge size="large" severity="success" text raised> {{ data[1].data.validNum }}
                                    </Badge>
                                </p>
                                <p>
                                    <Badge size="large" severity="danger" text raised>{{ data[1].data.invalidNum }}
                                    </Badge>
                                </p>
                            </div>
                        </div>
                        <div v-else class="flex justify-content-center">
                            <p>
                                <Badge size="large" severity="success" text raised> {{ data[1].data.validNum }}</Badge>
                            </p>
                        </div>

                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>

<style scoped>
.p-badge {
    min-width: 4.25rem;
}
</style>