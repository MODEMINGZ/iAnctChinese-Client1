<template>
    <div class="container">
        <div class="header"></div>
        <div class="content">
            <div class="left-part"></div>
            <div class="editor-part"></div>
            <div class="right-part"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref, reactive } from 'vue'
import dayjs from 'dayjs'
import {
    FolderAdd,
    FolderOpened,
    Delete,
    UploadFilled,
    Histogram
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
    height: 9%;
    /* border-radius: 10px; */
    width: 100%;
}

.container {
    background-color: #f6f6f6;
    height: 100vh;
    /* padding: 10px; */
}
</style>