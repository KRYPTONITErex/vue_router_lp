<template>

  <nav>
    <router-link :to="{name:'home'}">Home</router-link> |
    <router-link :to="{name: 'about'}">About</router-link> |
    <router-link :to="{name: 'jobs'}">Jobs</router-link>
  </nav>
  <router-view></router-view>

  <button @click="redirect">Redirect</button>
  <button @click="goforward">Go Forward</button>
  <button @click="goback">Go Back</button>

</template>

<script>

export default {
  methods: {
      goback(){
        this.$router.go(-1);
      },
      goforward(){
        this.$router.go(1);
      },
      redirect(){
        this.$router.push({name: 'home'})
      }
    }
  }

</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
}

nav {
  padding: 20px;
  background-color: #f0f0f0; /* Light background for the navbar */
  border-bottom: 2px solid #ccc; /* Subtle border for separation */
  margin-bottom: 20px; /* Spacing below the nav */
  display: flex;
  justify-content: center; /* Center links horizontally */
  gap: 15px; /* Space between links */
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px 15px; /* Add padding around links */
  transition: background-color 0.3s, color 0.3s; /* Smooth hover effect */
  border-radius: 5px; /* Rounded corners */
}

nav a.router-link-exact-active {
  color: #fff; /* White text for active link */
  background-color: #01484a; /* Highlight active link */
  padding: 10px 15px;
  border-radius: 5px; /* Rounded corners */
}

nav a:hover {
  background-color: #01484a; /* Highlight on hover */
  color: #fff; /* White text on hover */
}

button {
  padding: 10px 20px;
  margin: 10px 5px;
  font-size: 16px;
  background-color: #01484a; /* Consistent theme with nav */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s; /* Smooth hover effect */
}

button:hover {
  background-color: #ffe600; /* Hover effect color */
  color: #01484a; /* Invert text color on hover */
}

button:active {
  transform: scale(0.98); /* Button press effect */
}

</style>