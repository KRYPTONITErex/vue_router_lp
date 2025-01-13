<template>
  <div>
    <h1>Jobs</h1>

    <div class="box" v-for="job in jobs" :key="job.id">
      <router-link class="router-link" :to="{name: 'jobdetails', params: {id: job.id}}">
        <ul>
          <li class="title">{{job.title}}</li>
          <li>Location: {{job.location}}</li>
          <li>Salary: {{job.salary}}</li>
        </ul>
      </router-link>
            
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

      jobs: []

    }
  },
  mounted() {
      fetch('http://localhost:3000/jobs')
      .then((res)=>{
        // console.log(res);
        return res.json();
      })
      .then((data)=>{
        // console.log(data);
        this.jobs = data
      })

    }

}
</script>

<style>

.box {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;

}

.title {
  font-weight: bold;
  font-size: 20px;
  color: crimson;

}

.router-link {
  text-decoration: none;
  color: #1d1c1c;

}

li {
  max-width: 800px;
  list-style-type: none;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 8px; /* Rounded corners */
  margin: 10px;
  background-color: #f9f9f9; /* Light background */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  transition: transform 0.2s, background-color 0.2s; /* Smooth hover effect */


}

li:hover {
  transform: scale(1.03); /* Slightly larger on hover */
  background-color: #f0f0f0; /* Slightly darker background on hover */

}

ul {
  padding: 0; /* Remove default padding */
  margin: 0; /* Remove default margin */

}




</style>