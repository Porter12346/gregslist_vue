<script setup>
import { ref } from 'vue';
import { House } from '../models/House.js';

defineProps({ houseProp: { type: House } })

let showImage = ref(true)
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

            </div>
            <div class="d-flex justify-content-end align-items-center m-2">
                <h3 class="m-3">
                    {{ houseProp.creator.name }}
                </h3>
                <img :src="houseProp.creator.picture" alt="Profile Picture" class="img-fluid profile-pic">
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