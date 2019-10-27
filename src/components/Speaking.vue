<template>
  <div id="speaking-drawer" class="speaking">
    <!-- <div class="alert alert-success alert-dismissible fade show" role="alert">
      I am Speaking!
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button> -->
    <!-- </div> -->
    <h2>Speaking</h2>
    
    <b-card-group columns>
      <b-card v-b-toggle.collapse-1
          title="Nordic APIs"
          img-src="https://i.imgur.com/zW0trRP.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
      >

          <b-collapse id="collapse-1" class="mt-2">
            <b-card>
              <b-card-text><b-link href="https://nordicapis.com/events/austin-api-summit-2019/" target="_blank">Austin API Summit</b-link> in Austin, Texas</b-card-text>
              <b-card-text>May 2019</b-card-text>

              <b-card-text>
                <b-link href="https://nordicapis.com/sessions/fake-it-till-you-make-it-mock-servers-for-agile-development/" target="_blank" class="card-link">
                  Fake it till you make it: mock servers for agile development
                </b-link>
                <b-link href="https://www.youtube.com/watch?v=FI6IDPpBPQ0&feature=youtu.be" target="_blank" class="card-link"><font-awesome-icon :icon="['fas', 'video']" /></b-link>
              </b-card-text>

              <b-card-text>
                <b-link href="https://nordicapis.com/sessions/simplify-and-optimize-your-workflow-how-an-api-first-approach-can-help/" target="_blank" class="card-link">
                  Simplify and Optimize Your Workflow – How an API-first Approach Can Help
                </b-link>
              </b-card-text>
            </b-card>
          </b-collapse>
      </b-card>

      <b-card v-b-toggle.collapse-1
          title="DevNet Create"
          img-src="https://i.imgur.com/vi5OLmE.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
      >
          <b-collapse id="collapse-1" class="mt-2">
            <b-card>
              <b-card-text><b-link href="https://developer.cisco.com/devnetcreate/2019/" target="_blank">DevNet Create</b-link> in Mountain View, CA</b-card-text>
              <b-card-text>April 2019</b-card-text>

              <b-card-text>
                Interview about Postman with SiliconANGLE theCUBE
                <b-link href="https://youtu.be/GTfLGXi9LDg" target="_blank" class="card-link"><font-awesome-icon :icon="['fas', 'video']" /></b-link>
              </b-card-text>

              <b-card-text>
                Creating a Community of 6 Million +
                <b-link href="https://youtu.be/mFww5YaDkZo" target="_blank" class="card-link"><font-awesome-icon :icon="['fas', 'video']" /></b-link>
              </b-card-text>

              <b-card-text>
                Fake APIs for Real Developers: Mock Servers for Agile Development
              </b-card-text>
            </b-card>
          </b-collapse> 
      </b-card>

          <b-card v-b-toggle.collapse-1
          title="API World"
          img-src="https://pbs.twimg.com/media/EGdIEpeVAAUk7qb.jpg:large"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
      >
          <b-collapse id="collapse-1" class="mt-2">
            <b-card>
              <b-card-text><b-link href="https://apiworld.co/" target="_blank">API World</b-link> in San Jose, CA</b-card-text>
              <b-card-text>October 2019</b-card-text>

              <b-card-text>
                <b-link href="https://sched.co/Vn3p" target="_blank" class="card-link">Standing on the Shoulders of APIs</b-link>
              </b-card-text>
            </b-card>
          </b-collapse>
      </b-card>
    </b-card-group>

    <div>
      <b-card v-b-toggle.collapse-1 variant="primary">Other events</b-card>
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <b-card-text><b-link href="https://apiworld.co/" target="_blank">API World</b-link> in San Jose, CA</b-card-text>
          <b-card-text><b-link href="https://apiworld.co/" target="_blank">API World</b-link> in San Jose, CA</b-card-text>
          <b-card-text><b-link href="https://apiworld.co/" target="_blank">API World</b-link> in San Jose, CA</b-card-text>
          <b-card-text><b-link href="https://apiworld.co/" target="_blank">API World</b-link> in San Jose, CA</b-card-text>

        </b-card>
      </b-collapse>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Speaking'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#speaking-drawer {
  margin: 40px;
}

#speaking-drawer b-card {
  background-color: whitesmoke;
}
</style>