<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-for="i in [0,1,2,3,4,5]" v-bind:class="{active:currentTab === i}" v-on:click="currentTab=i">
          <svg class="icon">
            <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panes">
      <li v-bind:class="{active:currentTab === 0}">
        <Profile v-bind:profile="profile"></Profile>
      </li>
      <li v-bind:class="{active:currentTab === 1}">
        <h3>工作经历</h3>
        <el-form>
          <div v-for="(work,index) in workHistory" class="container">
            <el-form-item label="公司">
              <el-input v-model=" work.company"></el-input>
            </el-form-item>
            <el-form-item label="工作内容">
              <el-input v-model=" work.content"></el-input>
            </el-form-item>
            <hr>
            <i class="el-icon-circle-close" v-on:click="removeWorkHistory(index)"></i>
          </div>
          <el-button type="primary" v-on:click="addWorkHistory">添加</el-button>
        </el-form>
      </li>
      <li v-bind:class="{active:currentTab === 2}">tab3</li>
      <li v-bind:class="{active:currentTab === 3}">tab4</li>
      <li v-bind:class="{active:currentTab === 4}">tab5</li>
      <li v-bind:class="{active:currentTab === 5}">tab6</li>
    </ol>
  </div>
</template>


<script>
  import Profile from './Profile.vue'
  export default{
    components:{Profile},
    data(){
      return {
        currentTab: 0,
        icons: ['shenfenzheng', 'work', 'book', 'xiangmu', 'jiangbei', 'phone'],
        profile: {
          name: '',
          city: '',
          birth: ''
        },
        workHistory:[
//          {company:'',content:''}
        ]
      }
    },
    methods:{
      addWorkHistory(){
        this.workHistory.push(
          {company:'',content:''}
        )
      },
      removeWorkHistory(index){
        this.workHistory.splice(index,1)
      }
    },
    created(){
      setTimeout(()=> {
//        console.log(this.profile)
      }, 300)
    }
  }
</script>

<style>
  #editor {
    /*border:1px solid black;*/
    min-height: 100px;
    display: flex;
  }

  nav {
    background-color: #000;
    width: 80px;
  }

  nav > ol > li {
    padding: 8px 0;
    text-align: center;
  }

  nav > ol > li > .icon {
    width: 20px;
    height: 20px;
    fill: white;
  }

  nav > ol > li.active {
    background-color: #fff;
  }

  nav > ol > li.active > .icon {
    fill: black;
  }

  .panes {
    flex:1;
    padding:16px;
    height: 100%;
    overflow: auto;
  }
  .panes .container{
    position:relative;

  }
  .panes .container .el-icon-circle-close{
    position: absolute;
    right:0;
    top:0;
  }

  .panes li {
    display: none;
  }

  .panes li.active {
    display: block;
  }


</style>
