复现步骤：
1. 先打开一次弹框（此时传进去的是 1，正常），随便填写内容，然后关闭弹框
2. 点击修改 id 的按钮
3. 再次打开弹框（此时传进去的是 2，且content字段是空的，正常）随便填写内容，然后关闭弹框
4. 不要修改 id，直接再次打开弹框（此时 id 为 1，不正常）