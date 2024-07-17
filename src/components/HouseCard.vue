<script setup>
import { computed, ref } from 'vue';
import { House } from '../models/House.js';
import { AppState } from '../AppState.js';
import { api } from '../services/AxiosService.js';
import Pop from '../utils/Pop.js';
import { housesService } from '../services/HousesService.js';

defineProps({ houseProp: { type: House } })

const account = computed(()=>AppState.account)

let showImage = ref(true)

async function destroyHouse(id){
    try {
        await housesService.destroyHouse(id)
    } catch (error) {
        Pop.error(error)
    }
}
</script>


<template>
    <div v-if="showImage && houseProp.imgURL" class="row mb-3 border rounded-5">
        <div class="col-6 m-0 p-0">
            <img @error="showImage = false" :src="houseProp.imgURL" alt="Not found image" class="img-fluid houses-img rounded-5">
        </div>
        <div class="col-6 d-flex flex-column justify-content-between">
            <div>
                <h4>{{ houseProp.bedrooms }} bed, {{ houseProp.bathrooms }} bath. House built in {{ houseProp.year }}
                </h4>
                <h5>$ {{ houseProp.price }}</h5>
                <h5>{{ houseProp.levels }} story home</h5>
                <p>{{ houseProp.description }}</p>

            </div>
            <div class="d-flex justify-content-between align-items-center m-2">
                <button v-if="houseProp?.creator._id == account?.id" @click="destroyHouse(houseProp.id)" class="btn btn-danger"><i class="mdi mdi-close-octagon"></i></button>
                <div v-else></div>
                <div class="d-flex">
                <h3 class="m-3">
                    {{ houseProp.creator.name }}
                </h3>
                <img :src="houseProp.creator.picture" alt="Profile Picture" class="img-fluid profile-pic">
            </div>
        </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.houses-img {
    min-height: 100%;
    min-width: 100%;
    aspect-ratio: 1/1;
}

.profile-pic{
    height: 10vh;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50%;
}

.row {
  background-color: rgb(215, 215, 215);
  box-shadow: 0 7px 15px black;
  border-style: solid;
  border-width: 6px;
}
</style>