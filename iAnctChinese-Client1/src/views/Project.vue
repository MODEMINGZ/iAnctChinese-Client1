<template>
    <div class="container">
        <div class="main-app">
            <div class="header">
                <div class="head">
                    <el-icon class="head-icon">
                        <FolderOpened />
                    </el-icon>
                    <span class="head-text">项目管理</span>
                </div>
                <div class="right-head">
                    <el-button type="primary" class="h-btn" :icon="FolderAdd"
                        @click="dialogFormVisible = true">新建项目</el-button>
                    <el-button type="danger" :icon="Delete" class="h-btn" :disabled="multipleSelection.length === 0"
                        @click="deleteSelectedItems">删除项目</el-button>
                </div>
            </div>
            <el-table :data="tableData" class="mtable" stripe height="600" @selection-change="handleSelectionChange">
                <el-table-column type="selection" :selectable='selectable' width="55" />
                <el-table-column prop="name" label="项目名" width="120" />
                <el-table-column fixed prop="date" label="创建时间" width="150" />
                <el-table-column fixed="right" label="选项" min-width="120">
                    <template #default="scope">
                        <el-button link type="primary" size="small" @click.prevent="deleteRow(scope.$index)">
                            删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
    <el-dialog v-model="dialogFormVisible" title="新建项目" width="600">
        <el-form :model="form">
            <el-form-item label="项目名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" autosize type="textarea" placeholder="(必填)" />
            </el-form-item>
            <el-form-item label="项目描述" :label-width="formLabelWidth">
                <el-input v-model="form.discription" autocomplete="off" type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4 }" placeholder="(选填)" />
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="createForm_cancle">取消</el-button>
                <el-button type="primary" @click="createForm">
                    确认
                </el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import {
    FolderAdd,
    FolderOpened,
    Delete
} from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'
import dayjs from 'dayjs'
import { ElMessage } from 'element-plus'
//删除项目
const multipleSelection = ref([]);
const handleSelectionChange = (val: never[]) => {
    multipleSelection.value = val;
};
const deleteSelectedItems = () => {
    if (multipleSelection.value.length === 0) return; // 防止没有选择任何项时触发删除
    const idsToDelete = multipleSelection.value.map(item => tableData.value.indexOf(item)); // 获取要删除的项的索引
    idsToDelete.sort((a, b) => b - a); // 降序排序，以便从后往前删除，避免索引变化问题
    idsToDelete.forEach(id => {
        tableData.value.splice(id, 1); // 删除选中的行
    });
    multipleSelection.value = []; // 清空选中项，因为已经从表格中删除了
};

const selectable = (row: { id: string; }, index: any) => {
    if (row.id === "10001") {
        return false

    } else {
        return true
    }
}
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
const form = reactive({
    name: '',
    discription: '',
})
const createForm = () => {
    if (!form.name) {
        ElMessage({
            message: '项目名不能为空！',
            type: 'warning',
        })
        return
    }
    dialogFormVisible.value = false
    now.setDate(now.getDate() + 1)
    tableData.value.push({
        date: dayjs(now).format('YYYY-MM-DD'),
        name: form.name,
        discription: form.discription,
    })
    form.name = ''
    form.discription = ''
    ElMessage({
        message: '创建成功！',
        type: 'success',
    })
}
const createForm_cancle = () => {
    dialogFormVisible.value = false
    form.name = ''
    form.discription = ''
}

//表格
const now = new Date()

const tableData = ref([
    {
        date: '2016-05-01',
        name: 'Tom',
        discription: 'Los Angeles',
    },
])

const deleteRow = (index: number) => {
    tableData.value.splice(index, 1)
}

</script>

<style scoped>
.mtable {
    margin-left: 20px;
    margin-top: 10px;
    width: 95%;
}

.h-btn {
    margin-right: 10px;
}

.right-head {

    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 10px;

}

.head {
    display: flex;
    margin-left: 20px;
    align-items: center;
}

.head-icon {

    font-size: 30px;
    font-weight: 700;
}

.head-text {
    font-size: 24px;
    font-weight: 700;
}

.header {
    display: flex;
    height: 50px;
    border-bottom: 1px solid grey;
    align-items: center;
    padding: 10px 20px 10px 10px;
    width: 95%;
    justify-content: space-between;
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