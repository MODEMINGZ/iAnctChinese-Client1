<template>
    <div class="container">
        <div class="main-app">
            <div class="header">
                <div class="head">
                    <el-icon class="head-icon">
                        <FolderOpened />
                    </el-icon>
                    <span class="head-text">当前项目：{{ project_data.name }}</span>
                </div>
                <div class="right-head">
                    <el-button type="success" class="h-btn" :icon="UploadFilled">导入文档</el-button>
                    <el-button type="info" class="h-btn" :icon="Histogram"
                        :disabled="multipleSelection.length === 0">导出文档</el-button>
                    <el-button type="primary" class="h-btn" :icon="FolderAdd"
                        @click="dialogFormVisible = true">新建文档</el-button>
                    <el-button type="danger" :icon="Delete" class="h-btn" :disabled="multipleSelection.length === 0"
                        @click="deleteSelectedItems">删除文档</el-button>
                </div>
            </div>
            <el-table :data="tableData" class="mtable" stripe height="600" @selection-change="handleSelectionChange">
                <el-table-column type="selection" :selectable='selectable' width="50" />
                <el-table-column prop="name" label="文档名" width="120" show-overflow-tooltip />
                <el-table-column prop="create_time" label="创建时间" width="150" />
                <el-table-column prop="update_time" label="更新时间" width="150" />
                <el-table-column prop="discription" label="文档描述" width="250" show-overflow-tooltip />
                <el-table-column fixed="right" label="选项" min-width="120">
                    <template #default="scope">
                        <el-button type="primary" size="small" @click.prevent="openRow(scope.$index)">
                            打开文档
                        </el-button>
                        <el-button type="success" size="small" @click.prevent="editRow(scope.$index)">
                            文档详情
                        </el-button>
                        <el-button type="danger" size="small" @click.prevent="deleteRow(scope.$index)">
                            删除文档
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
    <el-dialog v-model="dialogFormVisible" title="新建文档" width="600">
        <el-form :model="form">
            <el-form-item label="文档名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off" autosize type="textarea" placeholder="(必填)" />
            </el-form-item>
            <el-form-item label="文档描述" :label-width="formLabelWidth">
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
    <el-dialog v-model="e_dialogFormVisible" title="编辑文档信息" width="600">
        <el-form :model="e_form">
            <el-form-item label="文档ID" :label-width="formLabelWidth">
                <el-input v-model="e_form.docId" autocomplete="off" disabled />
            </el-form-item>
            <el-form-item label="文档名" :label-width="formLabelWidth">
                <el-input v-model="e_form.docName" autocomplete="off" autosize type="textarea" placeholder="(必填)" />
            </el-form-item>
            <el-form-item label="文档描述" :label-width="formLabelWidth">
                <el-input v-model="e_form.discription" autocomplete="off" type="textarea"
                    :autosize="{ minRows: 2, maxRows: 4 }" placeholder="(选填)" />
            </el-form-item>
            <el-form-item label="文档创建时间" :label-width="formLabelWidth">
                <el-input :value="e_form.create_time" disabled /> <!-- 禁用创建时间输入框 -->
            </el-form-item>
            <el-form-item label="文档更新时间" :label-width="formLabelWidth">
                <el-input :value="e_form.update_time" disabled /> <!-- 禁用更新时间输入框 -->
            </el-form-item>
            <el-form-item label="所属项目ID" :label-width="formLabelWidth">
                <el-input v-model="e_form.proId" autocomplete="off" disabled />
            </el-form-item>
            <el-form-item label="所属项目名称" :label-width="formLabelWidth">
                <el-input v-model="e_form.proName" autocomplete="off" disabled />
            </el-form-item>
            <el-form-item label="所属项目描述" :label-width="formLabelWidth">
                <el-input v-model="e_form.proDiscription" autocomplete="off" disabled />
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="editForm_cancle">取消</el-button>
                <el-button type="primary" @click="editForm">确认</el-button>
            </div>
        </template>
    </el-dialog>
    <!-- ...其他代码... -->
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
//打开文档
const openRow = (index: number) => {
    const item = tableData.value[index];
    const m_id = parseInt(item.docId)
    router.push(`/editor/${m_id}/structure`);
}

//编辑文档
const e_dialogFormVisible = ref(false);
const editingIndex = ref(-1);
const editRow = (index: number) => {
    editingIndex.value = index;
    const item = tableData.value[index];
    e_form.proId = project_data.value.id;
    e_form.proName = project_data.value.name;
    e_form.docId = item.docId;
    e_form.docName = item.name;
    e_form.discription = item.discription;
    e_form.create_time = item.create_time;
    e_form.update_time = item.update_time;
    e_dialogFormVisible.value = true;
    e_form.proDiscription = project_data.value.discription;
};

const editForm = () => {
    if (editingIndex.value !== -1) {
        tableData.value[editingIndex.value].name = e_form.docName;
        tableData.value[editingIndex.value].discription = e_form.discription;
    }
    e_dialogFormVisible.value = false;
    ElMessage({
        message: '编辑成功！',
        type: 'success',
    });
};

const editForm_cancle = () => {
    e_dialogFormVisible.value = false;
    e_form.docName = '';
    e_form.discription = '';
};

//删除文档
const deleteRow = (index: number) => {
    ElMessageBox.confirm(
        '确定删除该文档？',
        'Warning',
        {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
        }
    )
        .then(() => {
            tableData.value.splice(index, 1)
            ElMessage({
                type: 'success',
                message: '删除成功！',
            })
        })
}
const multipleSelection = ref([]);
const handleSelectionChange = (val: never[]) => {
    multipleSelection.value = val;
};
const deleteSelectedItems = () => {
    if (multipleSelection.value.length === 0) return;
    const idsToDelete = multipleSelection.value.map(item => tableData.value.indexOf(item));
    idsToDelete.sort((a, b) => b - a);
    idsToDelete.forEach(id => {
        tableData.value.splice(id, 1);
    });
    multipleSelection.value = [];
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
    proId: '',
    proName: '',
    docId: '',
    name: '',
    discription: '',
    create_time: '',
    update_time: '',
})
const e_form = reactive({
    proId: '',
    proName: '',
    docId: '',
    docName: '',
    discription: '',
    create_time: '',
    update_time: '',
    proDiscription: ''
})
//增加文档
const createForm = () => {
    if (!form.name) {
        ElMessage({
            message: '文档名不能为空！',
            type: 'warning',
        })
        return
    }
    dialogFormVisible.value = false
    now.setDate(now.getDate() + 1)
    curDocId.value++
    tableData.value.push({
        create_time: dayjs(now).format('YYYY-MM-DD HH:mm'),
        name: form.name,
        discription: form.discription,
        update_time: dayjs(now).format('YYYY-MM-DD HH:mm'),
        docId: curDocId.value.toString(),

    })
    //清空
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

//表单【等后端】
const now = new Date()
const curDocId = ref(15)
const project_data = ref({
    id: '1',
    name: 'Tom',
    discription: 'aaaa',
})
const tableData = ref([
    {
        docId: '15',
        create_time: '2024-11-24 19:50',
        name: 'Tom‘s doc',
        update_time: '2024-11-25 20:50',
        discription: 'bbbb',
    },
])

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