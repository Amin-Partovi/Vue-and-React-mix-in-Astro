<script setup>
import { useStore } from '@nanostores/vue'
import { photos } from "../../store/photos";
import PhotoCard from "../photoCard/PhotoCard.vue"
const $fetchedPhotos = useStore(photos)
</script>

<template>
    <h1 v-if="fetchedPhotos?.isLoading">loading ...</h1>
    <PhotoCard v-else v-for="photo in $fetchedPhotos.data" :photo="photo" />
</template>