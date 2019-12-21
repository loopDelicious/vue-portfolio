<template>
  <div id="speaking-drawer" class="speaking">
    <h2>Speaking</h2>

    <div>
      <b-card-group deck>
        <b-card 
          :title="events.featured[0].eventName"
          :img-src="events.featured[0].imgSrc"
          :href="events.featured[0].talkLink"
        >
          <b-card-text>{{events.featured[0].talkTitle}} |  
            <b-link v-bind:href="events.featured[0].talkLink" target="_blank" class="card-link"><font-awesome-icon :icon="['fas', 'external-link-alt']" /></b-link>
          </b-card-text>
        </b-card>

        <b-card 
          :title="events.featured[1].eventName"
          :img-src="events.featured[1].imgSrc"
          :href="events.featured[1].talkLink"
        >
          <b-card-text>{{events.featured[1].talkTitle}} |  
            <b-link v-bind:href="events.featured[1].talkLink" target="_blank" class="card-link"><font-awesome-icon :icon="['fas', 'external-link-alt']" /></b-link>
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>

    <div class="mt-3">
        <b-card-group deck >
            <b-link v-for="(event,index) in events.speaking"
                :key="index"
                :href="event.eventLink" target="_blank">
                <b-card 
                    :img-src="event.imgSrc"
                    :href="event.eventLink" target="_blank"
                    img-alt="event"
                    img-top
                    tag="event"
                    style="max-width: 20rem; min-width: 200px"
                    class="mb-2"
                >
                    <b-card-text>
                        {{event.eventName}}
                    </b-card-text>
                </b-card>
            </b-link>
        </b-card-group>
      </div>


    <!-- <div role="tablist">
      <b-card-group deck v-for="(event, index) in events.speaking" 
        v-bind:item="event"
        v-bind:index="event.id"
        v-bind:key="index"
      >
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle="'accordion-' + index" variant="info">{{event.eventName}} in {{event.eventLocation}}</b-button>
          </b-card-header>
            <b-collapse :id="'accordion-' + index" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card v-b-toggle="'collapse' + index"
                  :title="event.eventName"
                  :href="event.eventLink"
                  :img-src="event.imgSrc"
                  :img-alt="event.eventName"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-3"
                  bg-variant="dark" 
                  text-variant="white"
                ></b-card>
                <b-card-text><b-link :href="event.eventLink" target="_blank">{{event.eventName}}</b-link></b-card-text>
                
                <template v-if="event.talks.length">
                  <b-card-text v-for="(talk, index) in event.talks" 
                    v-bind:item="talk"
                    v-bind:key="index"
                  >
                    <b-list-group flush>
                      <b-list-group-item>
                        <b-link v-bind:href="talk.talkLink" target="_blank" class="card-link">
                          {{talk.talkTitle}}
                        </b-link>
                        <template v-if="talk.talkVideo">
                          <b-link v-bind:href="talk.talkVideo" target="_blank" class="card-link"><font-awesome-icon :icon="['fas', 'video']" /></b-link>
                        </template>
                      </b-list-group-item>
                    </b-list-group>
                  </b-card-text>
                </template>
            </b-card-body>
          </b-collapse>
        </b-card> -->
    

<!-- 
      <b-card v-b-toggle="'collapse' + index"
          :title="event.eventName"
          :img-src="event.imgSrc"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
          header-tag="header"
          role="tab"
      >
          <b-collapse :id="'collapse' + index" class="mt-2">
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
      </b-card> -->
    <!-- </b-card-group> 
    </div> -->
    <!-- <div>
      <b-card v-b-toggle.collapse-1 variant="primary">Other events</b-card>
      <b-collapse id="collapse-1" class="mt-2">
        <b-card v-for="(event, index) in events.otherEvents"
          v-bind:item="event"
          v-bind:key="index"
        >
          <b-card-text><b-link v-bind:href="event.otherEventLink" target="_blank">{{event.otherEventName}}</b-link> in {{event.otherEventLocation}}</b-card-text>
        </b-card>
      </b-collapse>
    </div> -->

  </div>
</template>

<script src="./speaking.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#speaking-drawer {
  margin: 40px;
}

#speaking-drawer.b-card {
  background-color: chartreuse;
}
</style>