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
<div>{{ photo.title }}</div>
</template>

