<template>
    <h1>Job View</h1>
    <div v-for="job in jobs" :key="job.id">
        <router-link :to="{name: 'jobdetails', params:{id: job.id}}">
            <h3>{{ job.title }}</h3>
        </router-link>
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
        fetch('http://localhost:3000/jobs/')
        .then((res)=>{
            // console.log(res)
            return res.json()
        })
        .then((data)=>{
            // console.log(data)
            this.jobs = data
        })
    }
}

</script>

<style>
.job{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    width: 60%;
    cursor: pointer;
    color: crimson
}


</style>