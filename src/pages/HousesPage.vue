<script setup>
import { computed, onMounted } from 'vue';
import { housesService } from '../services/HousesService.js';
import { AppState } from '../AppState.js';

onMounted(()=>getHouses())

let houses = computed(()=>AppState.houses)


async function getHouses() {
    let response = await housesService.getHouses()
    console.log(response);
}

</script>


<template>
    <div v-for="house in houses" :key="house.id">
        <p>{{ house.imgURL }}</p>
        <img :src="house.imgURL" alt="House Picture">
        <p>
            {{house.description}}
        </p>
    </div>
    Houses 😎
</template>


<style lang="scss" scoped>

</style>