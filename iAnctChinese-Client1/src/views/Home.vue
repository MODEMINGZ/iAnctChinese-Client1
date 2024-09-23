<template>
    <el-menu :default-active="activeIndex2" mode="horizontal" background-color="#545c64" text-color="#fff"
        active-text-color="#ffd04b" @select="handleSelect">
        <el-menu-item index="1" class="logo-item">iAnctChinese 古汉语智能标注平台</el-menu-item>
        <el-menu-item index="2"><el-icon>
                <UserFilled />
            </el-icon>用户</el-menu-item>
        <el-menu-item index="3"><el-icon>
                <IconMenu />
            </el-icon>功能</el-menu-item>
        <el-menu-item index="4"><el-icon>
                <Promotion />
            </el-icon>特色</el-menu-item>
        <el-menu-item index="5">
            <el-icon>
                <InfoFilled />
            </el-icon>
            关于</el-menu-item>
    </el-menu>
    <div class="content">
        <el-carousel trigger="click" arrow="always" indicator-position="outside" class="carousel" autoplay="false">
            <el-carousel-item class="el-carousel-item">
                <div class="textbox">
                    <h1>iAnctChinese 古汉语智能标注平台</h1>
                    <p class="text"> iAnctChinese 是专为古汉语设计的智能标注平台，集成了pytorch框架下的先进深度学习模型，为研究者与学者提供了一站式的古汉语文本处理解决方案。
                        平台支持对古汉语自由文本的智能化结构整理、实体标注、关系标注，并自动生成知识图谱。
                        <br>通过精巧的交互设计，iAnctChinese实现了高效的人机协作，不仅在古汉语文本上实现了高精度的实体识别与关系抽取，未来还将不断拓展，支持更多语言的处理，为数字人文研究注入新的活力。
                    </p>
                </div>
            </el-carousel-item>
            <el-carousel-item>

            </el-carousel-item>
            <el-carousel-item>
            </el-carousel-item>
            <el-carousel-item>
            </el-carousel-item>
        </el-carousel>
        <div class="btnbox">
            <el-button type="primary" class="btn">开始使用</el-button>
            <el-button class="btn">帮助中心</el-button>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
    UserFilled,
    Promotion,
    InfoFilled,
    Menu as IconMenu,
} from '@element-plus/icons-vue'
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>
<style scoped>
.el-carousel-item {
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 100%; */
}

.carousel {
    /* background-color: #98a7f8; */
    /* align-items: center; */
    height: auto;
    margin-top: 10%;
    width: 100%;
}

.btn {
    width: 100px;
    height: 45px;
    margin-left: 30px;
    border: 1px solid #98a7f8;
}

.btnbox {
    width: 300px;
    padding: 5px;
    background-color: rgba(255, 255, 255, 0.7);
    margin-top: 20px;
    /* margin-right: 4%; */
    float: right;
}

.textbox {
    /* width: 90%; */
    padding: 20px;
    margin-left: 20px;
    margin-right: 20px;
    background-color: rgba(255, 255, 255, 0.7);
    border: 2px solid #ddd;
    /* border-radius: 10px; */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

}

.text {
    text-align: justify;
    font-size: 18px;
    line-height: 1.8;
    color: #333;
}

.logo-item {
    font-weight: bold;
    /* pointer-events: none; */
    font-size: 16px;
}

.logo-item::before {
    display: inline-block;
}

.el-menu--horizontal>.el-menu-item:nth-child(1) {
    margin-right: auto;
}

.content {
    background-image: url('./../assets/865082cf_E862331_c15a1563.png');
    background-size: cover;
    background-color: rgba(255, 255, 255, 0.95);
    background-blend-mode: overlay;
    height: calc(100vh - 60px);
    padding: 10px
}
</style>