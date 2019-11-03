<template>
  <div id="speaking-drawer" class="speaking">
    <!-- <div class="alert alert-success alert-dismissible fade show" role="alert">
      I am Speaking!
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button> -->
    <!-- </div> -->
    <h2>Speaking</h2>
    <div>{{events.speaking}}</div>
    <b-card-group deck v-for="(event, index) in events.speaking" 
      v-bind:item="event"
      v-bind:key="index"
    >
      <b-card v-b-toggle.collapse-1
          :title="event.eventName"
          :img-src="event.imgSrc"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
      >
          <b-collapse id="collapse-1" class="mt-2">
            <b-card>
              <b-card-text><b-link :href="event.eventLink" target="_blank">{{event.eventName}}</b-link> in {{event.eventLocation}}</b-card-text>
              <b-card-text>{{event.eventDate}}</b-card-text>
              <template v-if="event.talks.length">
                <b-card-text v-for="(talk, index) in event.talks" 
                  v-bind:item="talk"
                  v-bind:key="index"
                >
                  <b-link v-bind:href="talk.talkLink" target="_blank" class="card-link">
                    {{talk.talkTitle}}
                  </b-link>
                  <template v-if="talk.talkVideo">
                    <b-link v-bind:href="talk.talkVideo" target="_blank" class="card-link"><font-awesome-icon :icon="['fas', 'video']" /></b-link>
                  </template>
                </b-card-text>
              </template>
            </b-card>
          </b-collapse>
      </b-card>
    </b-card-group> 

    <div>
      <b-card v-b-toggle.collapse-1 variant="primary">Other events</b-card>
      <b-collapse id="collapse-1" class="mt-2">
        <b-card v-for="(event, index) in events.otherEvents"
          v-bind:item="event"
          v-bind:key="index"
        >
          <b-card-text><b-link v-bind:href="event.otherEventLink" target="_blank">{{event.otherEventName}}</b-link> in {{event.otherEventLocation}}</b-card-text>
        </b-card>
      </b-collapse>
    </div>

  </div>
</template>

<script src="./speaking.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#speaking-drawer {
  margin: 40px;
}

#speaking-drawer b-card {
  background-color: chartreuse;
}
</style>