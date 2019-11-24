<template>
  <div id="building-drawer" class="building">
    <h2>Building</h2>
    <div class="mt-3">
      <b-card-group deck v-for="(project, index) in building" 
              v-bind:item="project"
              v-bind:key="index"
          >
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img :src="project.imgSrc" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body :title="project.projectTitle">
                <b-link 
                  :href="project.projectLink" target="_blank">
                  <b-card-text>
                    {{project.projectDescription}}
                  </b-card-text>
                </b-link>
                <template v-if="project.githubLink">
                  <b-link v-bind:href="project.githubLink" target="_blank" class="card-link"><font-awesome-icon :icon="['fab', 'github']" /></b-link>
              </template>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script src="./building.js"></script>

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