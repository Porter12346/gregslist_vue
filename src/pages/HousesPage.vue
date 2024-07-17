<script setup>
import { computed, onMounted } from 'vue';
import { housesService } from '../services/HousesService.js';
import { AppState } from '../AppState.js';
import { Modal } from 'bootstrap';

onMounted(() => getHouses())

let houses = computed(() => AppState.houses)
let account = computed(() => AppState.account)


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
            <div class="col-12">
                <button class="btn btn-primary mb-3" v-if="account" data-bs-toggle="modal"
                    data-bs-target="#houseFormModal">Create Post</button>
            </div>
        </div>
        <div v-for="house in houses" :key="house.id">
            <HouseCard :houseProp="house" />
        </div>
        <FormModal modalId="houseFormModal">
            <!-- targets the slot with name of 'modalHeader' and injects whatever is between the template tags -->
            <template #modalHeader>
                Create House
            </template>
            <!-- targets the slot with name of 'modalBody' and injects whatever is between the template tags -->
            <template #modalBody>
                <HouseForm />
            </template>
        </FormModal>
    </div>


</template>


<style lang="scss" scoped></style>