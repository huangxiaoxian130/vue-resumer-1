<template>
  <div>
    <h3>{{title}}</h3>
    <el-form>
      <div class="container" v-for="(work,index) in items" v-bind:key="index">
        <el-form-item v-for="key in keys" v-bind:label="labels[key]||key" v-bind:key="key">
          <el-input v-model=" work[key]"></el-input>
        </el-form-item>
        <hr>
        <i class="el-icon-circle-close" v-on:click="removeitems(index)"></i>
      </div>
      <el-button type="primary" v-on:click="additems">添加</el-button>
    </el-form>
  </div>
</template>
<script>
  export default{
    props:['items','labels','title'],
    computed:{
      keys(){
        return Object.keys(this.items[0]) //数组第一项的两个key
      }
    },
    methods:{
      additems(){
        const empty={}
        this.keys.map((key)=>{
          empty[key]=''
        })
        this.items.push(
          empty
        )
      },
      removeitems(index){
        this.items.splice(index,1)
      }
    }
  }
</script>
