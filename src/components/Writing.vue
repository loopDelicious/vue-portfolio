<template>
  <div id="writing-drawer" class="writing">
    <h2>Writing</h2>

    <b-card-group deck>
        <b-link href="https://medium.com/better-practices/chaos-d3ef238ec328" target="_blank">
            <b-card
                title="Learn how your Kubernetes clusters respond to failure using Gremlin and Grafana"
                img-src="https://miro.medium.com/max/10368/1*Yeu19v1w20PpePBBPISaJQ.jpeg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
            >
                <b-card-text>
                    Building resilient APIs with chaos engineering
                </b-card-text>
            </b-card>
        </b-link>
    
        <b-link href="https://medium.com/better-practices/introducing-better-practices-e9cf14cf0c88" target="_blank">
            <b-card
                title="Introducing Better Practices"
                img-src="https://miro.medium.com/max/3076/1*vOBMJyHlysk2xuVoszs0vw.png"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
            >
                <b-card-text>
                    A new technical blog to share better software engineering practices with the Postman community
                </b-card-text>
            </b-card>
        </b-link>

        <b-link href="https://medium.com/better-practices/deploying-a-scalable-web-application-with-docker-and-kubernetes-a5000a06c4e9" target="_blank">
            <b-card
                title="Deploying a scalable web application with Docker and Kubernetes"
                img-src="https://miro.medium.com/max/7982/1*_z6K0v2SvBINFuFzWhAHQA.jpeg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
            >
                <b-card-text>
                    Learn how to test and deploy a Node.js app using containers and an orchestration engine
                </b-card-text>
            </b-card>
        </b-link>

        <b-link href="https://medium.com/better-practices/reverse-engineering-an-api-403fae885303" target="_blank">
            <b-card
                title="Reverse engineering an API"
                img-src="https://miro.medium.com/max/7408/1*Y2et8qgv-rmXlEyMUaTBJg.png"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
            >
                <b-card-text>
                    Gain a deeper understanding of a public or private API, especially for ones that aren’t well-documented
                </b-card-text>
            </b-card>
        </b-link>

        <b-link href="https://medium.com/better-practices/acing-your-apis-what-you-need-to-know-for-test-automation-e3fdba3519b9" target="_blank">
            <b-card
                title="Acing your API tests — what you need to know for test automation"
                img-src="https://miro.medium.com/max/10368/1*pJFKwSNu4A0nJCUZ9d4KZw.jpeg"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
            >
                <b-card-text>
                    We’ll break it down, with examples, so you can test early and often.
                </b-card-text>
            </b-card>
        </b-link>

        <b-link href="https://medium.com/better-practices/dont-get-techcrunched-performance-testing-for-your-http-apis-3196e40f6b70" target="_blank">
            <b-card
                title="Don’t get TechCrunched: performance testing for your HTTP APIs"
                img-src="https://miro.medium.com/max/3120/1*HW-r4Stc052Sn381sIRMHQ.png"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
            >
                <b-card-text>
                    Using AWS Lambda to run concurrent functions with Newman
                </b-card-text>
            </b-card>
        </b-link>
    </b-card-group>

  </div>
</template>

<script>
export default {
  name: 'Writing'
}
</script>

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