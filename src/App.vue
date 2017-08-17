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
</style>
