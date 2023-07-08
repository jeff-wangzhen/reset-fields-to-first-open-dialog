<template>
   <div>
      <el-button type="primary" @click="openDialog">点击打开弹框</el-button>
      <el-dialog title="提示" :visible.sync="dialogVisible">
         <span>prop传进来的内容：{{ propData }}</span>
         <el-form ref="formRef" :model="form" label-width="150px">
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
            id: this.propData.id || "",
            content: "",
         },
         dialogVisible: false,
      };
   },
   watch: {
      propData: {
         deep: true,
         immediate: true,
         handler(val) {
            this.form.id = val.id;
         },
      },
   },
   methods: {
      openDialog() {
         this.dialogVisible = true;
      },
      hideDialog() {
         console.log(this.form);
         this.$refs.formRef.resetFields();
         console.log(this.form);
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

<style></style>
