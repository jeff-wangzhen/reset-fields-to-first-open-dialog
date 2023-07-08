<template>
   <div>
      <el-button type="primary" @click="openDialog">点击打开弹框</el-button>
      <el-dialog title="提示" class="dialog" :visible.sync="dialogVisible">
         <span>prop传进来的内容：{{ propData }}</span>
         <el-form ref="formRef" :model="form" label-width="100px">
            <el-form-item prop="id" label="form.id">
               <el-input disabled v-model="form.id" />
            </el-form-item>
            <el-form-item prop="content" label="form.content">
               <el-input v-model="form.content" />
            </el-form-item>
         </el-form>
         <span slot="footer" class="dialog-footer">
            <el-button @click="hideDialog">取 消</el-button>
            <el-button type="primary" @click="confirm">确 定</el-button>
         </span>
      </el-dialog>
   </div>
</template>

<script>
export default {
   props: {
      propData: { type: Object, default: () => ({}) },
   },
   data() {
      return {
         form: {
            // 下面改为 id:'', 没用，因为 watch 里会 immediate 执行
            id: this.propData.id || "",
            content: "",
         },
         dialogVisible: false,
      };
   },
   watch: {
      propData: {
         deep: true,
         // 设置为 false 也不行，那样第一次打开弹框的时候，就是 data 里指定的数据了
         // 1. 如果 data 里是this.propData.id || ""，是一样的效果
         // 2. 如果 data 里是 ""，那么第一次打开弹框就是空的，也是 bug
         // 第二种情况更容易被发现，但是发现了之后依然可能采用设置immediate的方式进行解决
         immediate: true,
         handler(val) {
            console.log("watch");
            this.form.id = val.id;
         },
      },
   },
   methods: {
      openDialog() {
         this.dialogVisible = true;
      },
      hideDialog() {
         // 关闭弹框时重置表单数据
         this.$refs.formRef.resetFields();
         this.dialogVisible = false;
      },
      async confirm() {
         // await submit();
         this.$message({
            message: "提交成功",
            type: "success",
         });
         this.hideDialog();
      },
   },
};
</script>

<style scoped>
.dialog >>> .el-dialog {
   min-width: 300px;
}
</style>
