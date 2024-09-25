<template>
    <div class="container">
        <div class="header">
            <el-menu :default-active="getActiveIndex()" mode="horizontal" class="el-menu-demo">
                <el-menu-item index="1" class="logo-item">iAnctChinese-古汉语智能标注平台</el-menu-item>
                <el-menu-item index="2" @click="navigateTo('structure')">结构标注</el-menu-item>
                <el-menu-item index="3" @click="navigateTo('entity')">实体标注</el-menu-item>
                <el-menu-item index="4" @click="navigateTo('relation')">关系标注</el-menu-item>
                <el-menu-item index="5" @click="navigateTo('knowledgeGraph')">知识图谱</el-menu-item>
                <el-menu-item index="6">导出数据</el-menu-item>
            </el-menu>
        </div>
        <div class="content">
            <RouterView></RouterView>
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
                    <div class='info-item-content'>
                        {{ doc_data.pro_name }}
                    </div>
                    <div class="info-item-header">
                        项目描述
                    </div>
                    <div class='info-item-content'>
                        {{ doc_data.pro_discription }}
                    </div>
                    <div class="info-item-header">
                        文档ID
                    </div>
                    <div class='info-item-content'>
                        {{ doc_data.doc_id }}
                    </div>
                    <div class="info-item-header">
                        文档名
                    </div>
                    <div class='info-item-content'>
                        {{ doc_data.doc_name }}
                    </div>
                    <div class="info-item-header">
                        文档描述
                    </div>
                    <div class='info-item-content'>
                        {{ doc_data.doc_discription }}
                    </div>
                </div>
            </div>
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
//导航路由
const navigateTo = (path: string) => {
    router.push({ path: `/editor/${route.params.id}/${path}` })
};
const getActiveIndex = () => {
    const { path } = router.currentRoute.value;
    const match = path.match(/^\/editor\/[^/]+\/([^/]+)/); // 匹配"/editor/:id/xxx"形式的路径
    if (match) {
        const segment = match[1]; // 获取":id"后面的部分
        switch (segment) {
            case 'structure':
                return '2';
            case 'entity':
                return '3';
            case 'relation':
                return '4';
            case 'knowledgeGraph':
                return '5';
            default:
                return '2';
        }
    } else {
        // 如果路径不匹配，可以根据需要处理
        // 这里默认返回'2'
        return '2';
    }
}
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
    doc_text: ''
})
</script>

<style scoped>
.part-main {
    height: calc(100% - 60px);
    margin: 10px;
    /* background-color: aqua; */
    overflow: scroll;
}

.info-item-content {
    margin-left: 5px;
    margin-bottom: 5px;
    font-weight: 700;
    min-height: 50px;
    font-size: 14px;
    color: #838383;

}

.info-item-header {
    margin-bottom: 5px;
    font-weight: 700;
    /* border-bottom: 1px solid #aeaeae; */
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

.right-part {
    background-color: white;
    border-radius: 5px;
    width: 200px;
    height: 100%;
    margin-right: 5px;
    padding-bottom: 5px;
}

.content {
    margin-top: 10px;
    height: 88%;
    display: flex;
    justify-content: space-between;
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