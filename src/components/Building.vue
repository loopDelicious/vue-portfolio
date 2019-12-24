<template>
  <div id="building-drawer" class="building">
    <h2>Building</h2>
    <div class="general mt-3">
      <b-card-group deck>
        <b-link v-for="(project, index) in building" 
          :key="index"
          :href="project.projectLink" 
          target="_blank">
          <div class="card-wrapper">
            <b-card no-body
                style="max-width: 540px;"
                class="overflow-hidden mb-3">
                <template v-slot:header>
                  <h3>{{project.projectTitle}}</h3>
                </template>
                <b-card-img :src="project.imgSrc"></b-card-img>
                <template v-slot:footer>
                  <small class="text-muted text-left">{{project.projectDescription}}</small><br>
                    <div class="social-icons text-left">
                      <b-link v-if="project.githubLink" :href="project.githubLink" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /></b-link>
                      <b-link v-if="project.projectArticle" :href="project.projectArticle" target="_blank"><font-awesome-icon :icon="['fab', 'medium']" /></b-link>
                      <b-link v-if="project.projectVideo" :href="project.projectVideo" target="_blank"><font-awesome-icon :icon="['fab', 'youtube']" /></b-link>
                    </div>
                </template>
            </b-card>
          </div>
        </b-link>
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
.social-icons {
  margin: 5px 0;
}
.social-icons a:after { 
  content: "|"; 
  padding: 0 1em; 
}
.social-icons a:last-child:after { 
  content: ""; 
  padding: 0; 
}
</style>