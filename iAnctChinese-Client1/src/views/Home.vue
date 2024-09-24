<template>
    <el-menu :default-active="activeIndex.toString()" mode="horizontal" background-color="#545c64" text-color="#fff"
        active-text-color="#ffd04b" @select="handleMenuSelect">
        <el-menu-item index="1" class="logo-item">iAnctChinese-古汉语智能标注平台</el-menu-item>
        <el-menu-item index="2"><el-icon>
                <IconMenu />
            </el-icon><span>功能</span></el-menu-item>
        <el-menu-item index="3"><el-icon>
                <Promotion />
            </el-icon><span>特色</span></el-menu-item>
        <el-menu-item index="4" @click="goAbout"> <el-icon>
                <InfoFilled />
            </el-icon><span>关于</span></el-menu-item>
    </el-menu>
    <div class="content">
        <el-carousel trigger="click" arrow="always" indicator-position="outside" :autoplay="false" ref="carousel"
            class="carousel" @change="handleCarouselChange" height="auto">
            <el-carousel-item class="el-carousel-item">
                <div class="textbox">
                    <h1>iAnctChinese-古汉语智能标注平台</h1>
                    <p class="text"> iAnctChinese
                        是<strong>专为古汉语设计的智能标注平台</strong>，集成了pytorch框架下的先进深度学习模型，为研究者与学者提供了一站式的古汉语文本处理解决方案。
                        平台支持对古汉语自由文本的智能化结构整理、实体标注、关系标注，并自动生成知识图谱。
                        <br>通过精巧的交互设计，iAnctChinese实现了高效的人机协作，不仅在古汉语文本上实现了高精度的实体识别与关系抽取，未来还将不断拓展，支持更多语言的处理，为数字人文研究注入新的活力。
                    </p>
                </div>
            </el-carousel-item>
            <el-carousel-item class="el-carousel-item">
                <div class="textbox">
                    <h1>主要功能</h1>
                    <p class="text">
                        1. <strong>智能化结构整理：</strong> iAnctChinese 平台能够自动对古汉语自由文本进行结构整理，将其转化为计算机可理解的格式，为后续处理提供便利。<br>
                        2. <strong>实体标注：</strong> 平台内置先进的深度学习模型，能够准确识别并标注出文本中的实体，如人名、地名、机构名等，有助于用户快速理解文本内容。<br>
                        3. <strong>关系标注：</strong> 除了实体标注外，iAnctChinese 还能自动标注出实体之间的关系，揭示文本中隐含的信息，为用户提供更丰富的知识。<br>
                        4. <strong>知识图谱生成：</strong> 基于实体标注和关系标注的结果，平台能够自动生成知识图谱，以图形化的方式展示文本中的知识结构，便于用户进行深入分析和挖掘。
                    </p>
                </div>
            </el-carousel-item>
            <el-carousel-item class="el-carousel-item">
                <div class="textbox">
                    <h1>主要特色</h1>
                    <p class="text">
                        1. <strong>专为古汉语设计：</strong> iAnctChinese
                        平台针对古汉语的特点进行专门设计，充分考虑了古汉语的语法、词汇和表达方式，确保处理结果的准确性和可靠性。<br>
                        2. <strong>一站式解决方案：</strong> 平台提供了从文本整理到知识图谱生成的一站式服务，用户无需跳转至其他工具或平台，即可完成全部处理流程。<br>
                        3. <strong>高效的人机协作：</strong> 通过精巧的交互设计，iAnctChinese
                        实现了高效的人机协作。用户可以在平台上轻松进行参数调整、结果查看和反馈修正等操作，提升工作效率。<br>
                        4. <strong>可扩展性强：</strong> 平台不仅支持古汉语的处理，未来还将不断拓展，支持更多语言的处理。同时，用户还可以根据自身需求定制开发新功能，满足多样化的应用场景。
                    </p>
                </div>
            </el-carousel-item>
        </el-carousel>
        <div class="btnbox">
            <el-button type="primary" class="btn" @click="goStart">开始使用</el-button>
            <el-button class="btn" @click="goAbout">更多信息</el-button>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import {
    Promotion,
    Menu as IconMenu,
    InfoFilled
} from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
//开始使用
const goStart = () => {
    router.push('/project')
}
//转去关于页面

const goAbout = () => {
    router.push('/about')
}
//菜单项和走马灯联动
const activeIndex = ref(1);
const carousel: any = ref()
// const carousel = ref(null);
const handleMenuSelect = (index: string) => {
    const carouselIndex = parseInt(index) - 1;
    if (carouselIndex > 2) {
        return;
    }
    activeIndex.value = carouselIndex;
    if (carousel.value) {
        carousel.value.setActiveItem(carouselIndex);
    }
};

const handleCarouselChange = (index: number) => {
    activeIndex.value = index + 1; // 更新activeIndex的值以匹配走马灯的索引
};

</script>
<style scoped>
.el-carousel-item {
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: aqua; */
    height: 400px;
}

.carousel {
    /* background-color: #98a7f8; */
    /* align-items: center; */
    /* height: 500px; */
    margin-top: 5%;
    padding: 10px;
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
    margin-top: 10px;
    /* margin-right: 4%; */
    float: right;
}

.textbox {
    /* width: 90%; */
    padding: 30px;
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