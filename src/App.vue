<template>
   <div id="app">
      <div class="center">
         <div class="margin">将要传入弹框组件的数据: {{ injectData }}</div>
         <Dialog :prop-data="injectData" />
         <el-button class="margin" @click="change"> injectData.id++</el-button>
      </div>
      <div>
         复现步骤：
         <ol>
            <li>先打开一次弹框（此时传进去的是 1，正常），随便填写内容，然后关闭弹框</li>
            <li>点击修改 id 的按钮</li>
            <li>
               再次打开弹框（此时传进去的是 2，且content字段是空的，正常）随便填写内容，然后关闭弹框
            </li>
            <li>不要修改 id，直接再次打开弹框</li>
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
      return { injectData: { id: 1 } };
   },
   components: { Dialog },
   methods: {
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
</style>
