<template>
    <div class="app-container">
        <el-menu active-text-color="#ffd04b" background-color="#545c64" text-color="#fff" :collapse="isCollapse"
            :default-active="getActiveIndex()">
            <el-menu-item index="1" @click="headClick" class="bar">
                <el-icon v-if="isCollapse">
                    <ArrowRightBold />
                </el-icon>
                <el-icon v-else>
                    <ArrowLeftBold />
                </el-icon>
            </el-menu-item>
            <el-menu-item index="2" @click="navigateTo('/home')" class="bar">
                <el-icon>
                    <HomeFilled />
                </el-icon>
                <span class="menu-bar">首页</span>
            </el-menu-item>
            <el-menu-item index="3" @click="navigateTo('/project')" class="bar" :disabled="!store.isLogin">
                <el-icon>
                    <FolderOpened />
                </el-icon>
                <span>项目管理</span>
            </el-menu-item>
            <!-- <el-menu-item index="5" @click="navigateTo('/editor')" class="bar">
                <el-icon>
                    <Edit />
                </el-icon>
                <span>工作台</span>
            </el-menu-item> -->
            <el-menu-item index="6" @click="navigateTo('/user')" class="bar" :disabled="!store.isLogin">
                <el-icon>
                    <UserFilled />
                </el-icon>
                <span>用户</span>
            </el-menu-item>
            <el-menu-item index="7" @click="navigateTo('/about')" class="bar">
                <el-icon>
                    <InfoFilled />
                </el-icon>
                <span>关于</span>
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
import { ref, watchEffect } from 'vue'
import {
    HomeFilled,
    FolderOpened,
    ArrowLeftBold, ArrowRightBold,
    InfoFilled,
    UserFilled
} from '@element-plus/icons-vue'
import { userInfoStore } from '@/stores/user'
const store = userInfoStore()
const route = useRoute()
const router = useRouter()
//login
console.log(store.isLogin);
//editor/:id
watchEffect(() => {
    if (route.path.startsWith('/editor/')) {
        isCollapse.value = true
    }
})

// 处理菜单
const isCollapse = ref(false);

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
        // case '/editor':
        //     return '5';
        case '/user':
            return '6';
        case '/about':
            return '7';
        default:
            return '2';
    }
}

//
</script>
<style scoped>
.bar {
    border-bottom: 1px solid #ffd04b;
}

.app-container {
    display: flex;
    flex-direction: row;
    height: 100vh;
}

.menu-bar {
    /* padding-right: 30px; */
    width: 100px;
}


.main-content {
    flex: 1;
}
</style>
