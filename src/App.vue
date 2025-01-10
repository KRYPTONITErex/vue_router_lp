<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{name: 'jobs'}">Jobs</router-link>
  </nav>
  <router-view/>

  <button @click="redirect">Redirect</button>
  <button @click="forward">Go Forward</button>
  <button @click="back">Go Back</button>
</template>
 
<script>
export default {
  methods: {
    redirect() {
      this.$router.push({name: 'home'})
    },
    forward() {
      this.$router.go(1)
    },
    back() {
      this.$router.go(-1)
    } 
  }
}
</script>

<style>
/* General Styles */
#app {
  font-family: 'Orbitron', sans-serif; /* Gaming-style font */
  text-align: center;
  color: #fff;
  background-color: #0f0f0f; /* Dark gaming background */
  margin: 0 auto;
  padding: 20px;
}

/* Navbar Styles */
nav {
  padding: 20px;
  background-color: #1a1a1a; /* Dark grey navbar */
  border-bottom: 3px solid #3d3d3d; /* Subtle border */
  margin-bottom: 20px;
  display: flex;
  justify-content: center; /* Center the navigation links */
  gap: 20px; /* Space between links */
}

nav a {
  font-weight: bold;
  color: #00ffc6; /* Neon green */
  text-decoration: none;
  padding: 10px 15px;
  border: 2px solid transparent; /* Transition border */
  border-radius: 5px;
  transition: all 0.3s ease-in-out; /* Smooth effects */
}

nav a.router-link-exact-active {
  color: #ff0077; /* Neon pink for active links */
  background-color: #333; /* Highlight background */
  box-shadow: 0 0 10px #ff0077; /* Neon glow for active link */
}

nav a:hover {
  color: #0f0;
  border-color: #00ffc6; /* Neon green border on hover */
  box-shadow: 0 0 10px #00ffc6; /* Neon green glow */
}

/* Button Styles */
button {
  padding: 12px 24px;
  margin: 10px 5px;
  font-size: 16px;
  font-weight: bold;
  background: linear-gradient(135deg, #ff0077, #00ffc6); /* Neon gradient */
  color: #fff;
  border: none;
  border-radius: 10px; /* Smooth rounded corners */
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 255, 198, 0.3); /* Subtle glow */
  transition: all 0.3s ease-in-out;
}

button:hover {
  background: linear-gradient(135deg, #00ffc6, #ff0077); /* Reverse gradient */
  transform: scale(1.1); /* Enlarge button slightly */
  box-shadow: 0 8px 20px rgba(255, 0, 119, 0.5); /* Stronger glow */
}

button:active {
  transform: scale(0.95); /* Slight shrink on click */
}

/* Background Enhancements */
body {
  background: #0f0f0f; /* Dark background */
  background-image: radial-gradient(circle, #222 0%, #0f0f0f 60%);
  color: #ffffff;
}

/* Add Gaming Glow Effect */
body::after {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  pointer-events: none;
  box-shadow: inset 0 0 50px #00ffc6;
  z-index: -1;
}
</style>