<template>
    <div class="container">
        <div class="main-app">
            <div class="content">
                <div class="textbox">
                    <h1>iAnctChinese-古汉语智能标注平台</h1>
                    <div class="text-section">
                        <p class="text-item">本项目于2024年9月启动，致力于开发一套古汉语智能标注的解决方案。</p>
                        <p class="text-item">
                            我们采用了基于深度学习RoBERTa模型的GuwenBERT，该模型通过殆知阁的15,694本古文书籍、共计1.7B字符的语料库进行训练，所有繁体字均已经过简体转换，以适应更广泛的应用场景。
                        </p>
                        <p class="text-item">借助继续训练技术（Continue
                            Training），GuwenBERT结合了现代汉语RoBERTa的权重与丰富的古文语料，实现了现代汉语特征向古代汉语的有效迁移，从而显著提升了模型性能。</p>
                        <p class="text-item">
                            在古文处理中，断句、标点及专名标注等任务至关重要。经实验验证，在古文命名实体识别（NER）任务中，我们的BERT模型相比目前最流行的中文RoBERTa，性能提升了6.3%。仅需300步训练，即可达到中文RoBERTa的最终水平。此外，使用我们的模型还可以简化数据清洗、增强及字典引入等复杂流程。
                        </p>
                    </div>
                </div>
                <div class="btnbox">
                    <el-button class="btn" type="primary" @click="goHome">返回首页</el-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const goHome = () => {
    router.push({ path: '/home' })
}
</script>

<style scoped>
.btn {
    width: 100px;
    height: 42px;
    margin-right: 50px;
    border: 1px solid #98a7f8;
}

.text-section {
    border-top: #666 solid 1px;
}

.text-item {
    position: relative;
    margin-bottom: 1.5em;
    line-height: 1.6;
}

.text-item::before {
    content: "• ";
    color: #666;
    position: absolute;
    left: -15px;
}

.btnbox {
    /* width: 300px; */
    padding: 5px;
    background-color: rgba(255, 255, 255, 0.7);
    margin-top: 10px;
    float: right;
}

.textbox {
    width: 90%;
    margin-top: 5%;
    padding: 30px;
    margin-left: 20px;
    margin-right: 20px;
    background-color: rgba(255, 255, 255, 0.7);
    border: 2px solid #ddd;
    /* border-radius: 10px; */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

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