<template>
  <div>
    <h3>个人信息</h3>
    <el-form :model="profile">
      <el-form-item label="姓名">
        <el-input v-model="profile.name"></el-input>
      </el-form-item>
      <el-form-item label="城市">
        <el-input v-model="profile.city"></el-input>
      </el-form-item>
      <el-form-item label="生日">
        <el-input v-model="profile.birth"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    props: [ 'profile' ]  //接受profile属性
  }
</script>
