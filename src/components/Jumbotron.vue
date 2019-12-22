<template>
  <div class="jumbo mt-3">
    <b-jumbotron bg-variant="secondary" text-variant="white" fluid >
        <template v-slot:header>Joyce Lin</template>
        <template v-slot:lead><p style="color: palegreen;">Developer Relations</p></template>
        <div class="joyce-list">
          <p><font-awesome-icon :icon="['fas', 'map-marker-alt']" />  San Francisco, CA</p>
          <p><font-awesome-icon :icon="['fas', 'check-square']" />  Full Stack Engineer with Product Experience</p>
        </div>
<!-- 
        <hr class="my-4">

        <p>
        Joyce is a developer advocate with Postman, an API Development Environment (ADE) used by 8M+ users around the world. When she's not building things, writing, or speaking about tech, she enjoys laughing at her own jokes.
        </p> -->

    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Jumbo'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

.jumbotron {
  background: url("https://apod.nasa.gov/apod/image/1912/ElectricMilkyWay_Pedretti_1920.jpg") no-repeat center center;
  background-size: cover;
  height: 600px;
  text-align: left;
  /* margin: 0 0 10px 0; */
  /* background-image: url(../assets/cube-thumb.jpg); */
}

.joyce-list {
  color: darkgray;
  margin: 50px 0;
  font-weight: bold;
}

.joyce-list * {
  margin: 5px 15px 0 0;
}

</style>