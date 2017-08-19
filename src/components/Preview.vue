<template>
  <div id="preview">
    <h1>{{resume.profile.name||'请填写名称'}}</h1>
    <p>{{resume.profile.city||'请填写城市'}}|{{resume.profile.birth||'请填写生日'}}</p>
    <section v-if="filter(resume.workHistory).length>0">
      <h2>工作经历</h2>
      <ul>
        <li v-for="work in filter(resume.workHistory)">
          {{work.company}}
          {{work.content}}
        </li>
      </ul>
    </section>
    <section v-if="filter(resume.studyHistory).length>0">
      <h2>学校</h2>
      <ul>
        <li v-for="study in filter(resume.studyHistory)">
          {{study.school}}
          {{study.degree}}
          {{study.duration}}
        </li>
      </ul>
    </section>
    <section v-if="filter(resume.projects).length>0">
      <!--{{filter(resume.projects)}}-->
      <h2>项目</h2>
      <ul>
        <li v-for="project in filter(resume.projects)">
          {{project.name}}
          {{project.content}}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    props: ['resume'],
    methods: {
      filter(array){
        return array.filter(item=>!this.isEmpty(item))
      },
      isEmpty(object){
        let empty = true
        for (let key in object) {
          if (object[key]) {
            empty = false
            break
          }
        }
        return empty
      }
    }
  }
</script>


<style>
  #preview {
    /*border:1px solid red;*/
    min-height: 100px;
  }
</style>
