module.exports = {
   // 部署应用时的基本 URL
   publicPath:
      process.env.NODE_ENV === "production" ? "/reset-fields-to-first-open-dialog/dist/" : "",
   // build时构建文件的目录 构建时传入 --no-clean 可关闭该行为
   outputDir: "dist",
};
