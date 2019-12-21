<template>
  <div id="writing-drawer" class="writing">
    <h2>Writing</h2>
    <div class="mt-3">
      <b-card-group deck v-for="(article, index) in writing" 
              v-bind:item="article"
              v-bind:key="index"
              class="text-left mb-3"
          >
          <b-link 
              :href="article.articleLink" target="_blank">
              <b-card
                  :title="article.articleTitle"
                  :img-src="article.imgSrc"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 20rem;"
                  class="mb-2"
              >
                  <b-card-text>
                      {{article.articleBlurb}}
                  </b-card-text>
              </b-card>
          </b-link>
      </b-card-group>
    </div>
  </div>
</template>

<script src="./writing.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background-color: pink;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#writing-drawer {
  margin: 40px;
}

#writing-drawer b-card {
  background-color: greenyellow;
}
</style>

// TODO - embedded videos (if any), icon for external link, add pipe to separate video icon, accordion is weird - make smaller thumbnails in a grid