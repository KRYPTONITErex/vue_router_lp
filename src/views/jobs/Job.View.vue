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
            jobs: [
                {title: 'mechanic', id: 1, details: 'lorem ipsum'},
                {title: 'teacher', id: 2, details: 'lorem ipsum'}, 
                {title: 'designer', id: 3, details: 'lorem ipsum'},
            ]
        }
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