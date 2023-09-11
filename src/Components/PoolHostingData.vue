<script setup>
import { onMounted, onUnmounted, computed, onUpdated, nextTick } from 'vue'
import { useData } from '../stores/data'

const store = useData()

let refresh
const getFullData = computed(() => {
  return store.getFullData
})

function hashRateFormatted(value) {
  return (Number(value) * 10 ** -12).toFixed(2) + ' TH/s'
}

onMounted(() => {
  store.fetchFullData()
  refresh = setInterval(function () {
    nextTick(store.fetchFullData())
  }, 120000)
})

onUpdated(() => {
  nextTick()
})

onUnmounted(() => clearInterval(refresh))
</script>

<template>
  <div class="grid">
    <template v-for="data in getFullData" :key="data">
      <div v-if="data[0].data.userHash.value > 0" class="col-12 sm:col-6 lg:col-4 lg:m-0 xl:col-3">
        <Card class="flex flex-column align-items-center text-sm md:text-lg bg-blue-700">
          <template #title>
            <p class="text-center">{{ data[0].data.userHash.userName }}</p>
          </template>
          <template #subtitle>
            <p class="text-center">Hashrate: {{ hashRateFormatted(data[0].data.userHash.value) }}</p>
          </template>
          <template #content>
            <div v-if="data[1].data.invalidNum > 0" class="flex justify-content-evenly">
              <Badge size="large" class="bg-cyan-500" text raised>
                <p class="text-center text-white">{{ data[1].data.validNum }}</p>
              </Badge>
              <Badge size="large" class="bg-red-500" text raised>
                <p class="text-center text-white">{{ data[1].data.invalidNum }}</p>
              </Badge>
            </div>
            <div v-else class="flex justify-content-center">
              <Badge size="large" class="bg-cyan-500" text raised>
                <p class="text-center text-white">{{ data[1].data.validNum }}</p>
              </Badge>
            </div>
          </template>
        </Card>
      </div>
    </template>
  </div>
</template>

<style scoped></style>
