<template>
  <div id="app" v-bind:class="{previewMode:previewMode}">
    <Topbar class="topbar"  v-on:click="preview"/>
    <main>
      <Editor v-bind:resume="resume" class="editor"/>
      <Preview v-bind:resume="resume" class="preview"/>
    </main>
    <el-button id="exitPreview" v-on:click="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
  import Topbar from './components/Topbar.vue'
  import Editor from './components/Editor.vue'
  import Preview from './components/Preview.vue'

  export default {
    data(){
      return {
        previewMode:false,
        resume:{
          profile: {
            name: '',
            city: '',
            birth: ''
          },
          workHistory:[
            {company:'',content:''}
          ],
          studyHistory:[
            {school:'',degree:'',duration:''}
          ],
          projects:[
            {name:'',content:''}
          ],
          awards:[
            {name:''}
          ],
          contact: {QQ:'',wechat:'',email:'',phone:''}

        }
      }

    },
    components: {
      Topbar, Editor, Preview
    },
    methods:{
      preview(){
        this.previewMode=true
      },
      exitPreview(){
        this.previewMode=false
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height:100vh;
    display: flex;
    flex-direction: column;
  }
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .topbar{
    position:relative;
    z-index:1;
    box-shadow: 0 0 3px rgba(0,0,0,0.2);
  }
  main{
    background-color: #ddd;
    display: flex;
    flex:1;
  }
  main > .editor{
    width:30em;
    margin:16px 8px 16px 16px;
    background-color: #fff;
    box-shadow: 0 0 3px rgba(0,0,0,0.2);
    border-radius: 4px;
    overflow:hidden;
  }
  main > .preview{
    flex:1;
    margin:16px 16px 16px 8px;
    background-color: #fff;
    box-shadow: 0 0 3px rgba(0,0,0,0.2);
    border-radius: 4px;

  }
  .previewMode #topbar{
    display: none;
  }
  .previewMode main>#editor{
    display: none;
  }
  .previewMode main>#preview{
    max-width:800px;
    margin:32px auto;
  }
  #exitPreview{
    display: none;
  }
  .previewMode #exitPreview{
    position:fixed;
    bottom:16px;
    right:16px;
  }
</style>
