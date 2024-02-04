<script setup>
import { computed, onMounted, onUnmounted } from 'vue';

defineProps({
    observerLink: String,
})

</script>

<template>
    <div>User {{ observerLink ? observerLink : "No data"  }} </div>
</template>

<style scoped></style>
