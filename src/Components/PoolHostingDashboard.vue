<script>
import axios from 'axios';
import { nextTick } from 'vue'

export default {
    data() {
        return {
            totalTHs: Number,
            totalMinersUp: Number,
            totalMinersDown: Number,
            before: false,
        }
    },
    methods: {
        hashRateFormatted(value) {
            return (Number(value) * 10 ** -12).toFixed(2) + " TH/s"
        }
    },
    mounted() {
        axios.get('http://localhost:8888/v1/api/dataTotal')
            .then((response) => {
                this.totalTHs = response.data.totalTHs
                this.totalMinersUp = response.data.totalMinersUp
                this.totalMinersDown = response.data.totalMinersDown
                if (response.data) {
                    this.before = true
                }
                console.log(response.data.totalTHs)
            })
    }
}
</script>


<template>
    <div v-if="before">
        <div class="grid flex-row justify-content-center">
            <div class="col-12 md:col-6 lg:col-2  xl:col-3">
                <Card class="flex flex-column align-items-center">
                    <template #title> {{ totalMinersUp }} / 1060</template>
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
            <div class="col-12 md:col-6  lg:col-2  xl:col-3">
                <Card class="flex flex-column">
                    <template #title class="flex justify-content-center">
                        <p>{{ totalMinersDown }}</p>
                    </template>
                    <template #subtitle class="flex justify-content-center">Inactivos Total </template>
                </Card>
            </div>
            <div class="col-12 md:col-6  lg:col-2  xl:col-3 w-4">
                <Card class="flex flex-column align-items-center">
                    <template #title>
                        <p>{{ hashRateFormatted(totalTHs) }} / 12500</p>
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