<template>
    <div class="container">
        <div class="header">
            <div class="logo-item">iAnctChinese-古汉语智能标注平台</div>
        </div>
        <div class="content">
            <div class="left-part">
                <div class="part-header">
                    <div class="part-header-text">
                        <el-icon class="part-header-icon">
                            <Notebook />
                        </el-icon>结构
                    </div>
                </div>
                <div class="part-main"></div>
            </div>
            <div class="editor-part">
                <div class="part-header">
                </div>
                <div class="part-main"></div>
            </div>
            <div class="right-part">
                <div class="part-header">
                    <div class="part-header-text"><el-icon class="part-header-icon">
                            <InfoFilled />
                        </el-icon>文档信息</div>
                </div>
                <div class="part-main">
                    <div class="info-item-header">
                        项目ID
                    </div>
                    <div class='info-item-content'>
                        {{ doc_data.pro_id }}
                    </div>
                    <div class="info-item-header">
                        项目名
                    </div>
                    <div class="info-item-header">
                        项目描述
                    </div>
                    <div class="info-item-header">
                        文档ID
                    </div>
                    <div class="info-item-header">
                        文档名
                    </div>
                    <div class="info-item-header">
                        文档描述
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref, reactive } from 'vue'
import dayjs from 'dayjs'
import {
    Notebook, InfoFilled
} from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
const route = useRoute()
const router = useRouter()
//表单
const doc_data = ref({
    pro_id: '1',
    pro_name: 'Tom',
    pro_discription: 'aaaa',
    docId: '15',
    doc_create_time: '2024-11-24 19:50',
    doc_name: 'Tom‘s doc',
    doc_update_time: '2024-11-25 20:50',
    doc_discription: 'bbbb',

})
</script>

<style scoped>
.info-item-content {
    margin-bottom: 5px;
    font-weight: 700;
    min-height: 50px;

}

.info-item-header {
    margin-bottom: 5px;
    font-weight: 700;
    /* border-bottom: 1px solid #aeaeae; */
}

.part-main {
    height: calc(100% - 60px);
    margin: 10px;
    overflow-y: auto;
    /* background-color: aqua; */
}

.part-header-icon {
    margin-top: 3px;
    margin-right: 3px;
}

.part-header-text {
    margin-left: 5px;
    display: flex;
    margin-left: 10px;
    font-size: 17px;
    align-items: center;
    font-weight: 700;
}

.part-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    border-bottom: 2px solid #f6f6f6;
}

.logo-item {
    font-weight: bold;
    /* pointer-events: none; */
    font-size: 17px;
    margin-left: 20px;
    border-bottom: 2px solid #e2b500;
}

.editor-part {
    background-color: white;
    height: 100%;
    flex: 1;
    min-width: 100px;
    border-radius: 5px;
    margin-left: 10px;
    margin-right: 10px;
}

.left-part {
    margin-left: 5px;
    background-color: white;
    border-radius: 5px;
    width: 320px;
    height: 100%;
}

.right-part {
    background-color: white;
    border-radius: 5px;
    width: 200px;
    height: 100%;
    margin-right: 5px;
}

.content {
    margin-top: 10px;
    height: 88%;
    display: flex;

}

.header {
    background-color: white;
    height: 60px;
    /* border-radius: 10px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.container {
    background-color: #f6f6f6;
    height: 100vh;
    /* padding: 10px; */
}
</style>