<template>
    <RouterLink to="/home" active-class="active">首页</RouterLink>
    <RouterView></RouterView>
</template>
<script setup lang="ts" name="App">
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

</script>
<style scoped></style>
