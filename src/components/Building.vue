<template>
  <div id="building-drawer" class="building">
    <h2>Building</h2>
    <!-- FEATURED -->
    <div class="featured mt-3">
      <h5 style="color: silver; text-align: left;">PINNED</h5>
      <b-card-group deck>
          <div class="card-wrapper" v-for="(project, index) in building.featured" 
            :key="index">
            <b-card no-body
                style="max-width: 540px;"
                class="overflow-hidden mb-3">

                <template v-if="project.projectLink">
                  <b-link :href="project.projectLink" target="_blank">
                    <b-card-img :src="project.imgSrc"></b-card-img>  
                  </b-link>   
                </template>

                <template v-else>
                  <b-card-img :src="project.imgSrc"></b-card-img>
                </template>

                <div class="carousel-caption"><h1>{{project.projectTitle}}</h1></div>
                <template v-slot:footer>
                  <small class="text-left">{{project.projectDescription}}</small>
                    <div class="social-icons text-left">
                      <b-link v-if="project.projectLink" :href="project.projectLink" target="_blank"><font-awesome-icon :icon="['fas', 'external-link-alt']" class="fa-lg" /></b-link>
                      <b-link v-if="project.githubLink" :href="project.githubLink" target="_blank"><font-awesome-icon :icon="['fab', 'github']" class="fa-lg" /></b-link>
                      <b-link v-if="project.projectArticle" :href="project.projectArticle" target="_blank"><font-awesome-icon :icon="['fab', 'medium']" class="fa-lg" /></b-link>
                      <b-link v-if="project.projectVideo" :href="project.projectVideo" target="_blank"><font-awesome-icon :icon="['fab', 'youtube']" class="fa-lg" /></b-link>
                    </div>
                </template>
            </b-card>
          </div>
      </b-card-group>
    </div>
    <hr>
    <!-- GENERAL -->
    <div class="general mt-3">
      <b-card-group deck>
          <div class="card-wrapper" v-for="(project, index) in building.building" 
            :key="index">
            <b-card no-body
                style="max-width: 540px;"
                class="overflow-hidden mb-3">

                <template v-if="project.projectLink">
                  <b-link :href="project.projectLink" target="_blank">
                    <b-card-img :src="project.imgSrc"></b-card-img>  
                  </b-link>   
                </template>

                <template v-else>
                  <b-card-img :src="project.imgSrc"></b-card-img>
                </template>

                <div class="carousel-caption"><h1>{{project.projectTitle}}</h1></div>
                <template v-slot:footer>
                  <small class="text-muted text-left">{{project.projectDescription}}</small><br>
                    <div class="social-icons text-left">
                      <b-link v-if="project.projectLink" :href="project.projectLink" target="_blank"><font-awesome-icon :icon="['fas', 'external-link-alt']" class="fa-lg" /></b-link>
                      <b-link v-if="project.githubLink" :href="project.githubLink" target="_blank"><font-awesome-icon :icon="['fab', 'github']" class="fa-lg" /></b-link>
                      <b-link v-if="project.projectArticle" :href="project.projectArticle" target="_blank"><font-awesome-icon :icon="['fab', 'medium']" class="fa-lg" /></b-link>
                      <b-link v-if="project.projectVideo" :href="project.projectVideo" target="_blank"><font-awesome-icon :icon="['fab', 'youtube']" class="fa-lg" /></b-link>
                    </div>
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
#building-drawer {
  margin: 40px;
}
.featured {
  display: inline-block;
}
.general * {
  display: inline-block;
}
#building-drawer a {
  color: dimgray;
  /* font-weight: bold; */
}
#building-drawer a:hover {
  text-decoration: none;
}
.card-footer {
  text-align: left;
} 
.carousel-caption {
  margin-bottom: 30px; 
}
.social-icons {
  margin: 10px 0;
}
.social-icons svg {
  color: gray;
}
.social-icons svg:hover {
  color: mediumaquamarine;
}
.social-icons a {
  /* display: inline-block;     
  position: relative;    
  z-index: 1;      */
  /* padding: 2em;     
  margin: -2em;  */
}
.social-icons a:hover {
  color: mediumaquamarine;
}
.social-icons a:after { 
  content: "|"; 
  margin: 0 15px;
  /* padding: 0 10px; */
}
.social-icons a:last-child:after { 
  content: ""; 
}
#building-drawer img {
  height: 400px;
  background-size: cover;
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
#building-drawer .carousel-caption {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
}
#building-drawer .card-img {
  width: initial;
}
</style>