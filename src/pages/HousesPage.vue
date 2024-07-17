<script setup>
import { computed, onMounted } from 'vue';
import { housesService } from '../services/HousesService.js';
import { AppState } from '../AppState.js';

onMounted(() => getHouses())

let houses = computed(() => AppState.houses)


async function getHouses() {
    let response = await housesService.getHouses()
    console.log(response);
}

</script>


<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h1 class="text-center">Houses</h1>
            </div>
        </div>
        <div v-for="house in houses" :key="house.id">
            <HouseCard :houseProp="house" />
        </div>
    </div>


</template>


<style lang="scss" scoped></style>