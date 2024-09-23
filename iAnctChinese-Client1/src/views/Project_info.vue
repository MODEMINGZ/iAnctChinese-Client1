<template>
    <div>
        {{ curProId }}
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const curProId = route.params.id
</script>

<style scoped></style>