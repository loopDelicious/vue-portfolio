<template>
  <div id="writing-drawer" class="writing">
    <h2>Writing</h2>
    <!-- FEATURED -->
    <div class="featured mt-3">
      <h5>PINNED</h5>
        <b-card-group deck class="featured-contents">
          <b-link v-for="(article, index) in data.featured" 
            :key="index"
            :href="article.articleLink" 
            target="_blank">
            <div class="card-wrapper">
              <b-card overlay img-top
                  :img-src="article.imgSrc"
                  class="text-left mb-3 card-contents">
                  <div class="article-title"><h4>{{article.articleTitle}}</h4></div>
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
      <b-card-group deck class="general-contents">
          <b-link v-for="(article, index) in data.writing" 
            :key="index"
            :href="article.articleLink" 
            target="_blank">
            <div class="card-wrapper">
              <b-card overlay
                  :img-src="article.imgSrc"
                  class="text-left mb-3 card-contents">
                  <div class="article-title"><h4>{{article.articleTitle}}</h4></div>
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
      <b-button class="main-button" block v-b-toggle="'collapse2'" > 
        <span class="when-opened">
         <font-awesome-icon :icon="['fas', 'chevron-circle-down']" />
        </span>
        <span class="when-closed">
            <font-awesome-icon :icon="['fas', 'chevron-circle-right']" />
        </span>
        Other Writings 
      </b-button>
      <b-collapse id="collapse2" class="mt-2">
        <b-list-group v-for="(article,index) in data.otherWriting"
            :key="index">
            <b-list-group-item button class="b-list-writings" >
              {{article.articleDate[1]}} | <b-link :href="article.articleLink" target="_blank">{{article.articleTitle}}</b-link>
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
#writing-drawer h5 {
  color: silver; 
  text-align: left;
}
#writing-drawer .card-img {
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  height: 200px;
}
.featured-contents, .general-contents {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
#writing-drawer a {
  color: whitesmoke;
}
#writing-drawer img {
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
.card-wrapper * {
  max-width: 20rem;
  height: 288px;
}
.card-wrapper h4 {
  color: whitesmoke;
}
.card-wrapper h4:hover {
  color: aquamarine;
}
.other .main-button {
  /* box-shadow: 2px 3px rgba(0, 0, 0, 0.3); */
  border-radius: 0;
  border: none;
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
#writing-drawer .other a {
  color: #2c3e50;
  font-weight: bold;
}
#writing-drawer .other a:hover{
  color: mediumaquamarine;
  text-decoration: none;
}
#writing-drawer .b-list-writings {
  cursor: default;
}
#writing-drawer .card-img-top {
  /* width: initial; */
}
.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
    display: none;
}
</style>
