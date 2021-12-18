<template>
  <div class="jumbo">
    <b-jumbotron bg-variant="secondary" text-variant="white" fluid >
        <Nav />
        <template v-slot:header>Joyce Lin</template>
        <template v-slot:lead><p class="secondary-text">Developer Relations</p></template>
        <div class="joyce-list">
          <p><font-awesome-icon :icon="['fas', 'location-arrow']" />  San Francisco, CA</p>
          <p><font-awesome-icon :icon="['fas', 'check-square']" />  Full Stack Engineer with Product Experience</p>
          <p><font-awesome-icon :icon="['fab', 'twitter']" /><b-link href="https://twitter.com/petuniagray" target="_blank">petuniaGray</b-link></p>
          <p><font-awesome-icon :icon="['fab', 'tiktok']" /><b-link href="https://www.tiktok.com/@joycejetson" target="_blank">joyceJetson</b-link></p>
        </div>
        <a class="scroll-button" href="#speaking-drawer">
          <div class="scroll-to-anchor">
            <font-awesome-icon :icon="['fas', 'chevron-down']" size="2x" />
          </div>
        </a>
    </b-jumbotron>
  </div>
</template>

<script>
import Nav from './Nav.vue'
export default {
  name: 'Jumbotron',
  components: {
    Nav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 40px 0 10px 0;
}
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
.mt-3 {
  margin-top: 0;
}
.jumbotron {
  background: url("https://apod.nasa.gov/apod/image/1912/ElectricMilkyWay_Pedretti_1920.jpg") no-repeat center center;
  background-size: cover;
  height: 600px;
  text-align: left;
  margin: 0 0 0 0;
  position: relative;
  /* background-image: url(../assets/cube-thumb.jpg); */
}
.secondary-text {
  color: aquamarine;
}
.joyce-list {
  color: darkgray;
  margin: 50px 0;
  font-weight: bold;
}
.joyce-list * {
  margin: 5px 15px 0 0;
}
.scroll-to-anchor {
    left: 0;
    position: absolute;
    text-align: center;
    color: darkgray;
    bottom: 0;
    margin-bottom: 10px;
    width: 100%;
}
.scroll-to-anchor svg:hover {
  color: lightgray;
}
/* animate link */
/* https://tobiasahlin.com/blog/css-trick-animating-link-underlines/ */
.joyce-list a:hover {
  color: lightgray;
}
.joyce-list a {
  position: relative;
  color: darkgray;
  text-decoration: none;
}
.joyce-list a:hover {
  color: lightgray;
}
.joyce-list a:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: mediumaquamarine;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}
.joyce-list a:hover:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
</style>