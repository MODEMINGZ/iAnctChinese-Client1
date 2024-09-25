<template>
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
        <div class="part-main">
            <el-input class="m-input" type="textarea" :autosize="{ minRows: 2, maxRows: 4 }"
                v-model="doc_data.doc_content" placeholder="文档内容"></el-input>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
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
    doc_id: '15',
    doc_create_time: '2024-11-24 19:50',
    doc_name: 'Tom‘s doc',
    doc_update_time: '2024-11-25 20:50',
    doc_discription: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
    doc_content: ''
})
</script>

<style scoped>
.part-main {
    height: calc(100% - 60px);
    margin: 10px;
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
    font-size: 16px;
    /*margin-left: 20px;*/
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
</style>