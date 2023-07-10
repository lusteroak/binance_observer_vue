import { nextTick } from 'vue'
import { defineStore } from 'pinia'


import axios from "axios"

export const useData = defineStore("data", {
    state: () => ({
        fullData: [],
        totalData: [],
    }),
    getters: {
        getFullData(state) {
            return state.fullData
        },
        getTotalData(state) {
            return state.totalData
        }
    },
    actions: {
        async fetchFullData() {
            try {
                const fullDataRequest = await axios.get('http://localhost:8888/v1/api/data')
                this.fullData = fullDataRequest.data
            }
            catch (error) {
                console.log(error)
            }
        },
        async fetchDataTotal() {
            try {
                const dataTotalRequest = await axios.get('http://localhost:8888/v1/api/dataTotal')
                this.totalData = dataTotalRequest.data 
            }
            catch (error) {
                console.log(error)
            }
        } 
    },
})