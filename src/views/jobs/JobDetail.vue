<template>
    <div v-if="job">

        <h1>JobDetails View {{ id }}</h1>
        <h2>{{ job.title }}</h2>
        <h3>{{ job.salary }}</h3>
        <h3>{{ job.location }}</h3>
        <h3>{{ job.type }}</h3>
        <h3>{{ job.description }}</h3>
    
    <ul>
        <li v-for="(requirement,index) in job.requirements" :key="index">{{ requirement }}</li>
    </ul>
        
    </div>
    
</template>

<script>
export default {
    data() {
        return {
    //         id: this.$route.params.id
            job: null
    
        }
    }
    ,
    props: {
    id: {
        type: String,
        required: true
    }
    },
    mounted() {
        fetch('http://localhost:3000/jobs/' + this.id)
        .then((res)=>{
            // console.log(res)
            return res.json()
        })
        .then((data)=>{
            // console.log(data)
            this.job = data
        })
    }

}
</script>

<style>

h1, h2, h3 {
    font-family: Arial, sans-serif;
    color: rgb(16, 69, 105);
}
ul {
    list-style-type: disc;
    margin-left: 20px;
}
li {
    margin-bottom: 5px;
    color: #aa0000;
}

</style>