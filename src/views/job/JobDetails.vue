<template>

    <div v-if="jobs">
      <h1>Job Details {{ id }}</h1>
      <h2>Title: {{jobs.title}}</h2>
      <p>info: {{jobs.description}}</p>
      <p>Location: {{jobs.location}}</p>
      <p>Salary: {{jobs.salary}}</p>

    </div>

</template>

<script>
export default {
  data() {
    return {

      jobs: null

    }
  },
  props: ['id']
  ,
  mounted() {
      fetch('http://localhost:3000/jobs/'+this.id)
      .then((res)=>{
        // console.log(res);
        return res.json();
      })
      .then((data)=>{
        console.log(data);
        this.jobs = data
      })

    }

}
</script>

<style>

</style>