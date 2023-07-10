<template>
   <div id="app">
      <div class="center">
         <div class="margin">将要传入弹框组件的数据: {{ injectData }}</div>

         <el-button type="primary" @click="openDialog">点击打开弹框</el-button>
         <Dialog :visible.sync="dialogVisible" :prop-data="injectData" />
         <el-button class="margin" @click="change"> injectData.id++</el-button>
      </div>
      <div class="explanation">
         复现步骤：
         <ol>
            <li>先打开一次弹框（此时传进去的是 1，正常）</li>
            <li>随便填写内容（可不填），然后关闭弹框</li>
            <li>点击修改 id 的按钮</li>
            <li>再次打开弹框（此时传进去的是 2，且content字段是空的，正常）</li>
            <li>随便填写内容（可不填），然后关闭弹框</li>
            <li>不要修改 id，直接再次打开弹框（此时 id 为 1，不正常）</li>
         </ol>
      </div>
   </div>
</template>

<script>
import Dialog from "./Dialog/Dialog";
export default {
   name: "App",
   computed: {},
   data() {
      return { dialogVisible: false, injectData: { id: 1 } };
   },
   components: { Dialog },
   methods: {
      openDialog() {
         this.dialogVisible = true;
      },
      change() {
         this.injectData.id++;
      },
   },
};
</script>

<style scoped>
#app {
   padding: 20px;
}
.center {
   text-align: center;
}
.margin {
   margin: 10px;
}
.explanation {
   max-width: 500px;
   margin: auto;
}
</style>
