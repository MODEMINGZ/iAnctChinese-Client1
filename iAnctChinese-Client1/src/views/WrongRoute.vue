<template>
    <div class="container">
        <div class="main-app">
            <div class="content">
                <div class='info-bar'>
                    <div class="info">
                        <h1>页面不存在！</h1>
                    </div>
                    <el-button @click="goBack">返回</el-button>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue';
const route = useRoute()
const router = useRouter()

//返回上页
const goBack = () => {
    router.go(-1)
}
</script>

<style scoped>
.info-bar {
    margin-left: 5%;
    margin-top: 10%;
    padding: 30px;

    background-color: rgba(255, 255, 255, 0.7);
    border: 2px solid #ddd;
    /* border-radius: 10px; */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn {
    width: 100px;
    height: 42px;
    margin-right: 50px;
    border: 1px solid #98a7f8;
}

.content {
    background-image: url('./../assets/865082cf_E862331_c15a1563.png');
    background-size: cover;
    background-color: rgba(255, 255, 255, 0.95);
    background-blend-mode: overlay;
    height: 100%;
    border-radius: 10px;
    padding: 10px
}

.main-app {
    background-color: white;
    height: 100%;
    border-radius: 10px;
    width: 100%;
}

.container {
    background-color: #f6f6f6;
    height: 100vh;
    padding: 10px;
}
</style>