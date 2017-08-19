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
        <Profile v-bind:profile="resume.profile"></Profile>
      </li>
      <li v-bind:class="{active:currentTab === 1}">
       <ItemEditor v-bind:items="resume.workHistory" v-bind:labels="{company:'公司',content:'工作内容'}" v-bind:title="'工作经历'"></ItemEditor>
      </li>
      <li v-bind:class="{active:currentTab === 2}">
        <ItemEditor v-bind:items="resume.studyHistory" v-bind:labels="{school:'学校',duration:'时间',degree:'学位'}" v-bind:title="'学习经历'"></ItemEditor>
      </li>
      <li v-bind:class="{active:currentTab === 3}">
        <ItemEditor v-bind:items="resume.projects" v-bind:labels="{name:'项目名称',content:'工作内容'}" v-bind:title="'项目经历'"></ItemEditor>

      </li>
      <li v-bind:class="{active:currentTab === 4}">
        <ItemEditor v-bind:items="resume.awards" v-bind:labels="{name:'奖励详情'}" v-bind:title="'获奖情况'"></ItemEditor>

      </li>
      <li v-bind:class="{active:currentTab === 5}">
        <Contact v-bind:contact="resume.contact"></Contact>
      </li>
    </ol>
  </div>
</template>


<script>
  import Profile from './Profile.vue'
  import ItemEditor from './ItemEditor.vue'
  import Contact from './Contact.vue'
  export default{
    components:{Profile,ItemEditor,Contact},
    props:['resume'],
    data(){
      return {
        currentTab: 0,
        icons: ['shenfenzheng', 'work', 'book', 'xiangmu', 'jiangbei', 'phone'],
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
