<script setup>
import { onMounted, onUpdated, computed, nextTick } from 'vue';
import { useData } from '../stores/data';

const store = useData();

const totalEarnings = computed(() => {
    return store.getTotalEarnings;
})

function sumOfEarnings(value) {
    let convertArraytoNumber = value.map(i => Number(i))
    return convertArraytoNumber.reduce((sum, a) => sum + a, 0)
}

onMounted(() => {
    store.fetchEarnings();
    setInterval(function () {
        nextTick(store.fetchEarnings())
    }, 120000);
})

onUpdated(() => {
    nextTick()
})
</script>

<template>
        <div v-for="earnings in totalEarnings">
            <div class="grid flex-row justify-content-center">
                <div class="col-12 md:col-6 lg:col-2  xl:col-3">
                    <Card class="flex flex-column align-items-center h-9rem">
                        <template #title>$ {{
                            (earnings.btcPrice).toFixed(2)
                        }} </template>
                        <template #subtitle>Precio BTC Actual </template>
                    </Card>
                </div>
                <div class="col-12 md:col-6 lg:col-2  xl:col-3">
                    <Card class="flex flex-column align-items-center h-9rem">
                        <template #title>{{
                            sumOfEarnings(earnings.earningToday).toFixed(8)
                        }} BTC </template>
                        <template #subtitle>Ingresos estimados de hoy </template>
                        <template #content>
                            $ {{
                                (sumOfEarnings(earnings.earningToday).toFixed(8) * earnings.btcPrice).toFixed(2)
                            }}
                        </template>
                    </Card>
                </div>
                <div class="col-12 md:col-6 lg:col-2  xl:col-3">
                    <Card class="flex flex-column align-items-center h-9rem">
                        <template #title>{{
                            sumOfEarnings(earnings.earningYesterday).toFixed(8)
                        }} BTC </template>
                        <template #subtitle>Ingresos del dia anterior </template>
                        <template #content>
                            ${{
                                (sumOfEarnings(earnings.earningYesterday).toFixed(8) * earnings.btcPrice).toFixed(2) }} BTC
                        </template>
                    </Card>
                </div>

            </div>
        </div>
</template>

<style scoped>
</style>