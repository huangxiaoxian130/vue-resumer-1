<template>
  <div>
    <h3>联系方式</h3>
    <el-form :model="contact">
      <el-form-item label="QQ">
        <el-input v-model="contact.QQ"></el-input>
      </el-form-item>
      <el-form-item label="微信">
        <el-input v-model="contact.wechat"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="contact.email"></el-input>
      </el-form-item>
      <el-form-item label="手机">
        <el-input v-model="contact.phone"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    props: [ 'contact' ]  //接受profile属性
  }
</script>
