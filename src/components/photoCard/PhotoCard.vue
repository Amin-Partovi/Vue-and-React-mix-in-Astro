<script>
    export default{
        props:{
            photo:{
                albumId: Number,
                id: Number,
                title: String,
                url: String,
                thumbnailUrl: String
            }
        }
    }

</script>

<template>
<div class="card"><h2>{{ photo.title }}</h2><img :src="photo.thumbnailUrl"/></div>
</template>

<style lang="scss" scoped>

  @import "./photo-card.scss";
</style>

