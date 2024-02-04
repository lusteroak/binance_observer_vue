import { defineStore } from 'pinia'


import axios from "axios"

export const useData = defineStore("data", {
    state: () => ({
        fullData: [],
        totalData: [],
        totalEarnings: []
    }),
    getters: {
        getFullData(state) {
            return state.fullData
        },
        getTotalData(state) {
            return state.totalData
        },
        getTotalEarnings(state){
            return state.totalEarnings
        }
    },
    actions: {
        async fetchFullData() {
            try {
                const fullDataRequest = await axios.get('http://127.0.0.1:8888/v1/api/data')
                this.fullData = fullDataRequest.data
            }
            catch (error) {
                console.log(error)
            }
        },
        async fetchDataTotal() {
            try {
                const dataTotalRequest = await axios.get('http://127.0.0.1:8888/v1/api/dataTotal')
                this.totalData = dataTotalRequest.data 
            }
            catch (error) {
                console.log(error)
            }
        },
        async fetchEarnings() {
            try {
                const dataTotalEarnings = await axios.get('http://127.0.0.1:8888/v1/api/totalEarnings')
                this.totalEarnings = dataTotalEarnings.data
                console.log(this.totalEarnings);
            }
            catch (error) {
                console.log(error)
            }
        } 
    },
})