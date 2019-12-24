<template>
  <div id="speaking-drawer" class="speaking">
    <h2>Speaking</h2>
    <!-- FEATURED -->
    <div class="featured mt-3">
      <h5 style="color: silver; text-align: left;">PINNED</h5>
      <b-card-group deck >
        <b-link v-for="(event,index) in events.featured"
          :key="index"
          :href="event.talkLink" target="_blank">
          <div class="card-wrapper">
            <b-card overlay
              :img-src="event.imgSrc">
              <b-card-text>
                <b-link :href="event.eventLink" target="_blank" class="card-link"><h3>{{event.eventName}}</h3></b-link>
                <b-link :href="event.talkLink" target="_blank" class="card-link">{{event.talkTitle}}</b-link><br>
                <b-link :href="event.talkLink" target="_blank" class="card-link"><font-awesome-icon :icon="['fas', 'external-link-alt']" /></b-link>
              </b-card-text>
            </b-card>
          </div>
        </b-link>
      </b-card-group>
    </div>
    <hr>
    <!-- GENERAL -->
    <div class="general mt-3">
      <b-card-group deck>
          <b-link v-for="(event,index) in events.speaking"
              :key="index"
              :href="event.talks[0].talkVideo ? event.talks[0].talkVideo : event.eventLink" target="_blank">
              <div class="card-wrapper">
                <b-card overlay
                    :img-src="event.imgSrc"
                    class="mb-2">
                <b-card-text>
                  <b-link :href="event.eventLink" target="_blank" class="card-link"><h3>{{event.eventName}}</h3></b-link>
                  <b-link :href="event.talks[0].talkLink ? event.talks[0].talkLink : event.eventLink" target="_blank" class="card-link">{{event.talks[0].talkTitle}}</b-link><br>
                  <b-link :href="event.talks[0].talkVideo ? event.talks[0].talkVideo : event.eventLink" target="_blank" class="card-link"><font-awesome-icon :icon="['fas', 'external-link-alt']" /></b-link>
                 </b-card-text>
                </b-card>
              </div>
          </b-link>
      </b-card-group>
    </div>
    <hr>
    <!-- OTHER -->
    <div class="other mt-3">
      <b-button class="main-button" block v-b-toggle.collapse-1 >Other Talks</b-button>
      <b-collapse id="collapse-1" class="mt-2">
        <b-list-group v-for="(event,index) in events.otherEvents"
            :key="index"
            style="display: flex; align-items: center; text-align: left">
            <b-list-group-item button class="b-list-events" >
              <b-link :href="event.otherEventLink" target="_blank">{{event.otherEventName}}</b-link>
              | {{event.otherEventLocation}}
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
  color: whitesmoke;
  font-weight: bold;
}
.featured {
  display: inline-block;
}
.featured .card-text {
  font-weight: bold;
}
.general * {
  display: inline-block;
}
.general img {
  /* height: auto;
  max-height: 230px;
  /* background: transparent no-repeat center; */
  /* background-size: cover; */
}
.general .card-text {
  font-weight: normal;
}
/* .general .card-wrapper { */
  /* background-color: #202020; */
  /* position: relative; */
  /* height: 200px; */
/* } */
.card-wrapper * {
  max-width: 20rem;
}
#speaking-drawer .other .main-button {
  /* box-shadow: 2px 3px rgba(0, 0, 0, 0.3); */
  border-radius: 0;
  border: 0;
  background-color: silver;
  color: dimgray;
  font-weight: bolder;
}
.list-group-item:last-child {
  border-radius: 0;
  border-color: transparent;
  border-bottom: 1px solid whitesmoke;
}
#speaking-drawer img {
  height: 200px;
  background-size: cover;
  -webkit-filter: brightness(50%);
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
  color: darkgreen;
}
#speaking-drawer .other a:hover{
  color: limegreen;
  text-decoration: none;
}
#speaking-drawer .b-list-events {
  cursor: default;
}
#speaking-drawer .card-img {
  width: initial;
}
</style>
