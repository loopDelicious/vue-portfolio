<template>
  <div id="building-drawer" class="building">
    <h2>Building</h2>
    <!-- FEATURED -->
    <div class="featured mt-3">
      <h5 style="color: silver; text-align: left;">PINNED</h5>
      <b-card-group deck class="featured-contents">
          <div class="card-wrapper" v-for="(project, index) in building.featured" 
            :key="index">
            <b-card overlay
                :img-src="project.imgSrc"
                style="max-width: 540px;"
                class=" mb-3">
                <div class="title">
                  <template v-if="project.projectLink">
                    <b-link :href="project.projectLink" target="_blank">
                      <div class="building-title"><h1>{{project.projectTitle}}</h1></div>
                    </b-link>   
                  </template>
                  <template v-else>
                    <div class="building-title"><h1>{{project.projectTitle}}</h1></div>
                  </template>
                </div>
                <template v-slot:footer>
                  <span class="text-left">{{project.projectDescription}}</span>
                    <b-list-group class="external-links">
                      <b-list-group-item button v-if="project.projectLink"><b-link :href="project.projectLink" target="_blank"><font-awesome-icon :icon="['fas', 'external-link-alt']" /> Check it out</b-link></b-list-group-item>
                      <b-list-group-item button v-if="project.githubLink"><b-link :href="project.githubLink" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /> GitHub</b-link></b-list-group-item>
                      <b-list-group-item button v-if="project.projectArticle"><b-link :href="project.projectArticle" target="_blank"><font-awesome-icon :icon="['fab', 'medium']" /> Medium blog</b-link></b-list-group-item>
                      <b-list-group-item button v-if="project.projectVideo"><b-link :href="project.projectVideo" target="_blank"><font-awesome-icon :icon="['fab', 'youtube']" /> YouTube demo</b-link></b-list-group-item>
                    </b-list-group>
                </template>
            </b-card>
          </div>
      </b-card-group>
    </div>
    <hr>
    <!-- GENERAL -->
    <div class="general mt-3">
      <b-card-group deck class="general-contents">
          <div class="card-wrapper" v-for="(project, index) in building.building" 
            :key="index">
            <b-card overlay
                :img-src="project.imgSrc"
                style="max-width: 540px;"
                class=" mb-3">
              <div class="title">
                <template v-if="project.projectLink">
                  <b-link :href="project.projectLink" target="_blank">
                    <div class="building-title"><h1>{{project.projectTitle}}</h1></div>
                  </b-link>   
                </template>
                <template v-else>
                  <div class="building-title"><h1>{{project.projectTitle}}</h1></div>
                </template>
              </div>
              <template v-slot:footer>
                <span class="text-left">{{project.projectDescription}}</span><br>
                  <b-list-group class="external-links">
                    <b-list-group-item button v-if="project.projectLink"><b-link :href="project.projectLink" target="_blank"><font-awesome-icon :icon="['fas', 'external-link-alt']" /> Check it out</b-link></b-list-group-item>
                    <b-list-group-item button v-if="project.githubLink"><b-link :href="project.githubLink" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /> GitHub</b-link></b-list-group-item>
                    <b-list-group-item button v-if="project.projectArticle"><b-link :href="project.projectArticle" target="_blank"><font-awesome-icon :icon="['fab', 'medium']" /> Medium blog</b-link></b-list-group-item>
                    <b-list-group-item button v-if="project.projectVideo"><b-link :href="project.projectVideo" target="_blank"><font-awesome-icon :icon="['fab', 'youtube']" /> YouTube demo</b-link></b-list-group-item>
                  </b-list-group>
              </template>
            </b-card>
          </div>
      </b-card-group>
    </div>
  </div>
</template>

<script src="./building.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html, body {
    height: 100%;
}
body {
    margin: 0;
}
#building-drawer {
  margin: 40px;
}
.featured-contents, .general-contents {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
#building-drawer a {
  color: dimgray;
}
#building-drawer a:hover {
  text-decoration: none;
  color: mediumaquamarine;
}
#building-drawer img {
  height: 400px;
  background-size: cover;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px);
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  -webkit-filter: brightness(50%);
  -webkit-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -o-transition: all 1s ease;
  -ms-transition: all 1s ease;
  transition: all 1s ease;
}
#building-drawer img:hover {
  -webkit-filter: brightness(100%);
}
#building-drawer .card-img {
  width: initial;
}
.title {
  height: 100%;
  padding: 20% 0;
}
.building-title {
  color: whitesmoke;
}
.building-title h1:hover {
  color: aquamarine;
}
.external-links {
  margin: 10px 0;
}
.external-links svg {
  margin: 0 10px;
}
.card-footer {
  text-align: left;
} 
</style>