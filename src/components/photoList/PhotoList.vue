<script setup>
import {useStore} from '@nanostores/vue'
import { photos } from "../../store/photos";
import PhotoCard from "../photoCard/PhotoCard.vue"
const $photos=useStore(photos)
</script>

<template>
    <PhotoCard v-for="photo in $photos" :photo="photo"/>
</template>