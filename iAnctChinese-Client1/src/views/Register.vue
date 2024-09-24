<template>
    <div class="container">
        <div class="main-app">
            <div class="content">
                <div class="card">
                    <div class="logo">注册</div>

                    <el-form class="login-form">
                        <el-form-item label="邮箱">
                            <el-input v-model="registerForm.email"></el-input>
                        </el-form-item>
                        <el-form-item label="用户名" label-width="80px">
                            <el-input v-model="registerForm.username" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" label-width="80px">
                            <el-input type="password" v-model="registerForm.password" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="handleRegister">注册</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { userInfoStore } from '../stores/user'
import { ref } from 'vue';
const route = useRoute()
const router = useRouter()
const store = userInfoStore()

const registerForm = ref({
    username: '',
    email: '',
    password: '',
    repassword: '',
});
//后端
const handleRegister = () => {

};
</script>

<style scoped>
.logo {
    font-size: 20px;
    font-weight: 700;
    border-bottom: 1px solid #eee;
    color: #303133;
    margin-bottom: 15px;
}

.card {
    /* width: 400px; */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    background-color: #fff;
    margin-bottom: 15%;
}

.login-form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
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
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
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