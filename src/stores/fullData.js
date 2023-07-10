import { defineStore } from 'pinia'
// Import axios to make HTTP requests
import axios from "axios"

export const useFullData = defineStore("fullData", {
    state: () => ({
        fullData: []
    }),
    getters: {
        getFullData(state) {
            return state.fullData
        }
    },
    actions: {
        async fetchFullData() {
            try {
                const fullData = await axios.get('http://localhost:8888/v1/api/data')
                this.fullData = fullData.data
            }
            catch (error) {
                console.log(error)
            }
        }
    },
})