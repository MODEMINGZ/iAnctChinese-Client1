<template>
    <div class="content">
        <el-input type="textarea" v-model="inputValue" autosize placeholder="文档内容"></el-input>
    </div>
</template>

<script setup lang="ts">
import { ref, watchEffect, definePropss } from "vue";
const props = defineProps<{ doc_text: string; getInput: (val: string) => void }>();

const inputValue = ref(props.doc_text);
watchEffect(() => {
    props.getInput(inputValue.value);
});
</script>

<style scoped>
.content {
    width: 600px;
}
</style>