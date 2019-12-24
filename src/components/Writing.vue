<template>
  <div id="writing-drawer" class="writing">
    <h2>Writing</h2>

    <div class="featured mt-3">
      <h5 style="color: silver; text-align: left;">PINNED</h5>
        <b-card-group deck>
          <b-link v-for="(article, index) in data.featured" 
            :key="index"
            :href="article.articleLink" 
            target="_blank">
            <div class="card-wrapper">
              <b-card overlay img-top
                  :title="article.articleTitle"
                  :img-src="article.imgSrc"
                  img-alt="Image"
                  tag="article"
                  style="max-width: 20rem;"
                  class="text-left mb-3 card-contents">
                  <template v-slot:footer>
                    <small class="text-muted">{{article.articleBlurb}}</small>
                  </template>
              </b-card>
            </div>
          </b-link>
      </b-card-group>
    </div>
    <hr>
    <div class="general mt-3">
      <b-card-group deck>
          <b-link v-for="(article, index) in data.writing" 
            :key="index"
            :href="article.articleLink" 
            target="_blank">
            <div class="card-wrapper">
              <b-card overlay img-top
                  :title="article.articleTitle"
                  :img-src="article.imgSrc"
                  img-alt="Image"
                  tag="article"
                  style="max-width: 20rem;"
                  class="text-left mb-3 card-contents">
                  <template v-slot:footer>
                    <small class="text-muted">{{article.articleBlurb}}</small>
                  </template>
              </b-card>
            </div>
          </b-link>
      </b-card-group>
    </div>
    <hr>
  </div>
</template>

<script src="./writing.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#writing-drawer {
  margin: 40px;
}
.featured {
  display: inline-block;
}
#writing-drawer a {
  color: whitesmoke;
  /* color: dimgray; */
}
#writing-drawer a:hover {
  /* text-decoration: none; */
  /* opacity: 0.8; */
  -webkit-filter: brightness(100%);
}
#writing-drawer img {
  -webkit-filter: brightness(50%);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}
.featured img:hover {
  -webkit-filter: brightness(100%);
}
.general * {
  display: inline-block;
}
</style>
