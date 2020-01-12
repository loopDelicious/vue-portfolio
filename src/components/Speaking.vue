<template>
  <div id="speaking-drawer" class="speaking">
    <h2>Speaking</h2>
    <!-- UPCOMING -->
    <div class="upcoming mt-3">
      <h5>UPCOMING</h5>
      <b-card-group deck class="upcoming-contents">
        <b-link v-for="(event,index) in events.upcoming"
          :key="index"
          :href="event.talkLink" target="_blank">
          <div class="card-wrapper">
            <b-card overlay
              :img-src="event.imgSrc">
              <b-card-text class="card-wrapper-text">
                <b-link :href="event.eventLink" target="_blank" class="card-link"><h3>{{event.eventName}}</h3></b-link>
                <h3>{{event.eventDate[0]}} {{event.eventDate[1]}}</h3>
                <h3>{{event.eventLocation.split(',')[0]}}</h3>
              </b-card-text>
            </b-card>
          </div>
        </b-link>
      </b-card-group>
    </div>
    <hr>
    <!-- FEATURED -->
    <div class="featured mt-3">
      <h5>PINNED</h5>
      <b-card-group deck class="featured-contents" v-for="(event,index) in events.featured" :key="index">
        <div class="featured-card-wrapper">
          <b-card>
            <iframe width="560" height="315" :src="event.embedLink" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </b-card>
        </div>
      </b-card-group>
    </div>
    <hr>
    <!-- OTHER TALKS -->
    <div class="other mt-3">
      <b-button class="main-button" block v-b-toggle.collapse-1 >
        <span class="when-opened">
         <font-awesome-icon :icon="['fas', 'chevron-circle-down']" />
        </span>
        <span class="when-closed">
            <font-awesome-icon :icon="['fas', 'chevron-circle-right']" />
        </span>
         Other Talks
      </b-button>
      <b-collapse id="collapse-1" class="mt-2">
        <b-list-group v-for="(event,index) in events.otherEvents"
            :key="index">
            <b-list-group-item button class="b-list-events" >
              {{event.eventDate[1]}} | <b-link :href="event.eventLink" target="_blank">{{event.eventName}}</b-link>
              | {{event.eventLocation}}
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </div>
      <!-- OTHER VIDEOS -->
      <div class="other mt-3">
        <b-button class="main-button" block v-b-toggle.collapse-3 aria-controls="collapse-3" >
          <span class="when-opened">
          <font-awesome-icon :icon="['fas', 'chevron-circle-down']" />
          </span>
          <span class="when-closed">
              <font-awesome-icon :icon="['fas', 'chevron-circle-right']" />
          </span>
          Other Videos
        </b-button>
        <b-collapse id="collapse-3" class="mt-2">
          <b-list-group v-for="(video,index) in events.otherVideos"
              :key="index">
              <b-list-group-item button class="b-list-events" >
                {{video.videoDate[1]}} | <b-link :href="video.videoLink" target="_blank">{{video.videoTitle}}</b-link>
              </b-list-group-item>
            </b-list-group>
          </b-collapse>
        </div>
        <hr>
  </div>
</template>

<script src="./speaking.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#speaking-drawer {
  margin: 40px;
}
#speaking-drawer a {
  color: gainsboro;
  font-weight: bold;
}
#speaking-drawer a:hover {
  color: mediumaquamarine;
}
.speaking h5 {
  color: silver; 
  text-align: left;
  width: 100%;
}
.upcoming-contents {
  display: flex;
  justify-content: center;
}
.card-wrapper-text {
  height: 100%;
  padding: 20% 0;
}
.card-wrapper * {
  max-width: 20rem;
}
.featured {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}
.featured-contents {
  /* display: flex;
  justify-content: center;
  flex-wrap: wrap; */
  width: auto;
  margin: 10px;
  /* flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 50%; */
}
.featured-card-wrapper * {
  max-width: 30rem;
}
.featured-content>div:first-child {
  /* flex: 0 1 100%; */
}
/* .featured-card-wrapper {
  display: flex;
} */
.card-body {
  padding: 0;
  margin-bottom: -7px;
}
.other .main-button {
  /* box-shadow: 2px 3px rgba(0, 0, 0, 0.3); */
  border-radius: 0;
  border: 0;
  background-color: gainsboro;
  color: #2c3e50;
  font-weight: bolder;
  padding: 15px;
}
.other .main-button:hover {
  color: mediumaquamarine;
}
.btn:focus,.btn:active {
   outline: none !important;
   box-shadow: none;
}
.other .main-button svg {
  margin-right: 10px;
}
.other .list-group {
  display: flex; 
  align-items: center; 
  text-align: left;
}
.list-group-item:last-child {
  border-radius: 0;
  border-color: transparent;
  border-bottom: 1px solid whitesmoke;
}
#speaking-drawer img {
  height: 200px;
  background-size: cover;
  -webkit-filter: brightness(30%);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}
#speaking-drawer img:hover {
  -webkit-filter: brightness(100%);
}
.card-wrapper:hover img {
  opacity: 0.8;
}
#speaking-drawer .other a {
  color: #2c3e50;
}
#speaking-drawer .other a:hover{
  color: mediumaquamarine;
  text-decoration: none;
}
#speaking-drawer .b-list-events {
  cursor: default;
}
#speaking-drawer .card-img {
  width: initial;
}
#speaking-drawer .card-body {
  width: initial;
}
.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
    display: none;
}
</style>
