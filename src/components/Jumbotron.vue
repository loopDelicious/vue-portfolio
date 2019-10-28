<template>
  <div class="jumbo">
    <b-jumbotron bg-variant="info" text-variant="white" fluid>
        <template v-slot:header>Joyce Lin</template>

        <template v-slot:lead>
        Full Stack Engineer with Product experience
        </template>

        <hr class="my-4">

        <p>
        Joyce is a developer advocate with Postman, an API Development Environment (ADE) used by 8M+ users around the world. When she's not building things, writing, or speaking about tech, she enjoys laughing at her own jokes.
        </p>

        <b-button variant="primary" href="#speaking-drawer">Speaking</b-button>
        <b-button variant="success" href="#writing-drawer">Writing</b-button>
        <b-button variant="primary" href="#">Do Something</b-button>

    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Jumbo'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>