<script>
import axios from 'axios';
export default {
    data() {
        return {
            fullData: [],
        }
    },
    methods: {
        hashRateFormatted(value) {
            return (Number(value) * 10 ** -12).toFixed(2) + " TH/s"
        }
    },
    mounted() {
        axios.get('http://127.0.0.1:5000/api')
            .then((response) => {
                this.fullData = response.data
            })
    }
}
</script>


<template>
<div>
    <h2>
        Dashboard
    </h2>
</div>
</template>

<style scoped>
</style>