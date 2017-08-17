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
       <WorkHistoryEditor v-bind:workHistory="workHistory"></WorkHistoryEditor>
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
  import WorkHistoryEditor from './WorkHistoryEditor.vue'
  export default{
    components:{Profile,WorkHistoryEditor},
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
          {company:'',content:''}
        ]
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
