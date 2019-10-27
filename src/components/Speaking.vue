<template>
  <div class="speaking">
    <!-- <div class="alert alert-success alert-dismissible fade show" role="alert">
      I am Speaking!
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button> -->
    <!-- </div> -->

    <div>
      <b-card v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-card>
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <p class="card-text">Collapse contents Here</p>
        </b-card>
      </b-collapse>
    </div>

    <div>
      <b-card v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-card>
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <p class="card-text">Collapse contents Here</p>
        </b-card>
      </b-collapse>
    </div>

    <div>
      <b-card v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-card>
      <b-collapse id="collapse-1" class="mt-2">
        <b-card>
          <p class="card-text">Collapse contents Here</p>
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