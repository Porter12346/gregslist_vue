<script setup>import { ref } from 'vue';
import { housesService } from '../services/HousesService.js';
import { Modal } from 'bootstrap';
import Pop from '../utils/Pop.js';
const editableHouseData = ref({
    price: 0,
    year: 0,
    imgUrl: '',
    bedrooms: 0,
    description: '',
    levels: 0,
    bathrooms: 0,
})

async function createHouse() {
    try {
        await housesService.createHouse(editableHouseData.value) // NOTE this is a ref object, we have to pass down the value stored inside of the ref
        editableHouseData.value = {
            price: 0,
            year: 0,
            imgUrl: '',
            bedrooms: 0,
            description: '',
            levels: 0,
            bathrooms: 0,
        }
        Modal.getOrCreateInstance('#houseFormModal').hide()
    } catch (error) {
        Pop.error(error)
    }
}

</script>


<template>
    <form @submit.prevent="createHouse()">
        <div class="mb-3">
            <label for="price" class="form-label">Price</label>
            <input v-model="editableHouseData.price" type="number" class="form-control" name="price" id="price" min="0" max="5000000">
        </div>
        <div class="mb-3">
            <label for="imgURL" class="form-label">Image URL</label>
            <input v-model="editableHouseData.imgUrl" type="url" class="form-control" name="imgURL" id="imgURL">
        </div>
        <div class="mb-3">
            <label for="year" class="form-label">Year Built</label>
            <input v-model="editableHouseData.year" type="number" class="form-control" id="year" name="year" min="1800" max="2024">
        </div>
        <div class="d-flex">
            <div class="mb-3 flex-grow-1">
                <label for="bedrooms" class="form-label">Bedrooms</label>
                <input v-model="editableHouseData.bedrooms" type="number" class="form-control" id="bedrooms" name="bedrooms" min="1" max="100">
            </div>
            <div class="mb-3 ms-5 flex-grow-1">
                <label for="bathrooms" class="form-label">Bathrooms</label>
                <input v-model="editableHouseData.bathrooms" type="number" class="form-control" id="bathrooms" name="bathrooms" min="1" max="100">
            </div>
        </div>
        <div class="mb-3">
            <label for="levels" class="form-label">How tall is that thang</label>
            <input v-model="editableHouseData.levels" type="number" class="form-control" id="levels" name="levels" min="0" max="10000">
        </div>
        <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea v-model="editableHouseData.description" class="form-control" id="description" name="description" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">SUBMIT</button>
    </form>
</template>


<style lang="scss" scoped></style>