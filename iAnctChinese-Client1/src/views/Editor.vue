<template>
    <div>

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

<style scoped></style>