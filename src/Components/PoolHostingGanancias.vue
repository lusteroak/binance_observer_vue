<script setup>
import { onMounted, onUnmounted, onUpdated, computed, nextTick } from 'vue';
import { useData } from '../stores/data';

const store = useData();

let refresh
const totalEarnings = computed(() => {
    return store.getTotalEarnings;
})

function sumOfEarnings(value) {
    let convertArraytoNumber = value.map(i => Number(i))
    return convertArraytoNumber.reduce((sum, a) => sum + a, 0)
}

onMounted(() => {
    store.fetchEarnings();
    refresh = setInterval(function () {
        nextTick(store.fetchEarnings())
    }, 120000);
})

onUpdated(() => {
    nextTick()
})

onUnmounted(() => clearInterval(refresh))
</script>

<template>
    <div v-for="earnings in totalEarnings">
        <div class="grid">
            <div class="col-12 sm:col-10 md:col-6 lg:col-4 sm:pl-3 xl:col-4">
                <Card class="flex flex-column align-items-center xl:flex-row text-sm md:text-lg">
                    <template #title>
                        <p>{{
                            sumOfEarnings(earnings.earningToday).toFixed(8)
                        }} BTC</p>
                    </template>
                    <template #subtitle>
                        <p>Ingresos estimados de hoy</p>
                    </template>
                    <template #content>
                        <p class="text-center">$ {{
                            (sumOfEarnings(earnings.earningToday).toFixed(8) * earnings.btcPrice).toFixed(2)
                        }}</p>
                    </template>
                </Card>
            </div>
            <div class="col-12 sm:col-10 md:col-6 lg:col-4 sm:pl-3 xl:col-4">
                <Card class="flex flex-column align-items-center xl:flex-row text-sm md:text-lg">
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
            <div class="col-12 sm:col-10 md:col-6 lg:col-4 sm:pl-3 xl:col-4">
                <Card class="flex flex-column align-items-center xl:flex-row text-sm md:text-lg">
                    <template #title>$ {{
                        (earnings.btcPrice).toFixed(2)
                    }} </template>
                    <template #subtitle>Precio BTC Actual </template>
                    <template #content><br></template>
                </Card>
            </div>
        </div>
    </div>
</template>

<style scoped></style>