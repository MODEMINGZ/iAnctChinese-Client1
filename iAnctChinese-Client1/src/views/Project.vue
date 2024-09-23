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
                    <el-button type="primary" class="h-btn" :icon="FolderAdd">新建项目</el-button>
                    <el-button type="danger" :icon="Delete" class="h-btn">删除项目</el-button>
                </div>
            </div>
            <el-table :data="tableData" class="mtable">
                <el-table-column prop="name" label="Name" width="120" />
                <el-table-column fixed prop="date" label="Date" width="150" />
                <el-table-column fixed="right" label="Operations" min-width="120">
                    <template #default="scope">
                        <el-button link type="primary" size="small" @click.prevent="deleteRow(scope.$index)">
                            Remove
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script setup lang="ts">
import {
    FolderAdd,
    FolderOpened,
    Delete
} from '@element-plus/icons-vue'

//表格
import { ref } from 'vue'
import dayjs from 'dayjs'

const now = new Date()

const tableData = ref([
    {
        date: '2016-05-01',
        name: 'Tom',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
])

const deleteRow = (index: number) => {
    tableData.value.splice(index, 1)
}

const onAddItem = () => {
    now.setDate(now.getDate() + 1)
    tableData.value.push({
        date: dayjs(now).format('YYYY-MM-DD'),
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    })
}
</script>

<style scoped>
.mtable {
    background-color: aqua;
    margin-left: 20px;
    margin-top: 10px;
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
    justify-content: space-between;
}


.main-app {
    background-color: white;
    height: 100%;
    border-radius: 10px;
    /* width: 100%; */
}

.container {
    background-color: #f6f6f6;
    height: 100vh;
    padding: 10px;
}
</style>