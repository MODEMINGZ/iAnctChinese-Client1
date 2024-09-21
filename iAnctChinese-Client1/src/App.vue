<template>
    <div class="app-container">
        <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" text-color="#fff"
            :collapse="isCollapse" :default-active="getActiveIndex()">
            <el-menu-item index="1" @click="headClick">
                <el-icon v-if="isCollapse">
                    <ArrowRightBold />
                </el-icon>
                <el-icon v-else>
                    <ArrowLeftBold />
                </el-icon>
            </el-menu-item>
            <el-menu-item index="2" @click="navigateTo('/home')">
                <el-icon><icon-menu /></el-icon>
                <span>首页</span>
            </el-menu-item>
            <el-menu-item index="3" @click="navigateTo('/project')">
                <el-icon>
                    <document />
                </el-icon>
                <span>Navigator Three</span>
            </el-menu-item>
            <el-menu-item index="4">
                <el-icon>
                    <setting />
                </el-icon>
                <span>Navigator Four</span>
            </el-menu-item>
        </el-menu>
        <!-- 侧边栏显示时间 -->
        <div class="main-content">
            <!-- <RouterLink to="/home" active-class="active">首页</RouterLink> -->
            <RouterView></RouterView>
        </div>
    </div>

</template>
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import {
    Document,
    Menu as IconMenu,
    Setting,
    ArrowLeftBold, ArrowRightBold
} from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()

// 处理菜单
let isCollapse = ref(false);

const headClick = () => {
    isCollapse.value = !isCollapse.value;
};
const navigateTo = (path: string) => {
    router.push(path);
};
const getActiveIndex = () => {
    switch (router.currentRoute.value.path) {
        case '/home':
            return '2';
        case '/project':
            return '3';
        default:
            return '2';
    }
}

//
</script>
<style scoped>
.app-container {
    display: flex;
    flex-direction: row;
    height: 100vh;
}

.main-content {
    flex: 1;
}
</style>
