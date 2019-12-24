<template>
  <div id="speaking-drawer" class="speaking">
    <h2>Speaking</h2>

    <!-- FEATURED -->
    <div class="featured mt-3">
      <h5 style="color: silver; text-align: left;">PINNED</h5>
      <b-card-group deck >
        <b-link v-for="(event,index) in events.featured"
          :key="index"
          :href="event.eventLink" target="_blank">
          <div class="card-wrapper">
            <b-card overlay
              :title="event.eventName"
              :img-src="event.imgSrc">
              <b-card-text>{{event.talkTitle}} |  
                <b-link v-bind:href="event.talkLink" target="_blank" class="card-link"><font-awesome-icon :icon="['fas', 'external-link-alt']" /></b-link>
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
              :href="event.eventLink" target="_blank">
              <div class="card-wrapper">
                <b-card overlay
                    :title="event.eventName"
                    :img-src="event.imgSrc"
                    class="mb-2">
                <b-card-text>{{event.talks[0].talkTitle}} |  
                    <b-link v-bind:href="event.talks[0].talkVideo ? event.talks[0].talkVideo : event.talks[0].talkLink" target="_blank" class="card-link"><font-awesome-icon :icon="['fas', 'external-link-alt']" /></b-link>
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
          
            <template v-if="event.otherEventLink">
              <b-list-group-item button class="b-list-events" >
                <b-link :href="event.otherEventLink" target="_blank">{{event.otherEventName}}</b-link>
                | {{event.otherEventLocation}}
              </b-list-group-item>
            </template> 

            <template v-else>
              <b-list-group-item button disabled >
                {{event.otherEventName}} | {{event.otherEventLocation}}
              </b-list-group-item>
            </template>   

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
  min-width: 45%;
}
.card-wrapper:hover img {
  opacity: 0.8;
}
#speaking-drawer .other a {
  color: green;
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
</style>
