<template>
  <div id="app">
    <Topbar class="topbar"/>
    <main>
      <Editor class="editor"/>
      <Preview class="preview"/>
    </main>
  </div>
</template>

<script>
  import Topbar from './components/Topbar.vue'
  import Editor from './components/Editor.vue'
  import Preview from './components/Preview.vue'

  export default {
    name: 'app',
    components: {
      Topbar, Editor, Preview
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
  .topbar{
    background-color: red;
  }
  main{
    background-color: green;
    display: flex;
    flex:1;
  }
  main > .editor{
    width:20em;
  }
  main > .preview{
    flex:1;
  }
</style>
