<template>
  <div id="writing-drawer" class="writing">
    <h2>Writing</h2>
    <!-- FEATURED -->
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
    <!-- GENERAL -->
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
    <!-- OTHER -->
    <div class="other mt-3">
      <b-button class="main-button" block v-b-toggle="'collapse2'" ><font-awesome-icon :icon="['fas', 'pencil-alt']" /> Other Writings </b-button>
      <b-collapse id="collapse2" class="mt-2">
        <b-list-group v-for="(article,index) in data.otherWriting"
            :key="index"
            style="display: flex; align-items: center; text-align: left">
            <b-list-group-item button class="b-list-writings" >
              <b-link :href="article.articleLink" target="_blank">{{article.articleTitle}}</b-link>
              | {{article.articlePublication}}
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
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
}
#writing-drawer img {
  height: 250px;
  background-size: cover;
  -webkit-filter: brightness(50%);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}
#writing-drawer img:hover {
  -webkit-filter: brightness(100%);
}
.card-wrapper:hover img {
  opacity: 0.8;
}
.general * {
  display: inline-block;
}
.other .main-button {
  /* box-shadow: 2px 3px rgba(0, 0, 0, 0.3); */
  border-radius: 0;
  border: none;
  background-color: gainsboro;
  color: darkgreen;
  font-weight: bolder;
  padding: 15px;
}
.other .main-button:hover {
  color: limegreen;
}
.btn:focus,.btn:active {
   outline: none !important;
   box-shadow: none;
}
.other .main-button svg {
  margin-right: 10px;
}
.list-group-item:last-child {
  border-radius: 0;
  border-color: transparent;
  border-bottom: 1px solid whitesmoke;
}
#writing-drawer .other a {
  color: darkgreen;
  font-weight: bold;
}
#writing-drawer .other a:hover{
  color: limegreen;
  text-decoration: none;
}
#writing-drawer .b-list-writings {
  cursor: default;
}
#writing-drawer .card-img-top {
  width: initial;
}
</style>
