<template>
    <b-navbar class="navigation" toggleable="sm" type="dark" variant="transparent" fixed="top">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="pl-5" inline>
                <b-nav-item-dropdown text="☰" style="font-size: 32px;" no-caret>
                    <b-dropdown-item href="#jumbotron">Home</b-dropdown-item>
                    <b-dropdown-item href="#speaking-drawer">Speaking</b-dropdown-item>
                    <b-dropdown-item href="#writing-drawer">Writing</b-dropdown-item>
                    <b-dropdown-item href="#building-drawer">Building</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigation {
    /* padding: 4rem 2rem; */
    /* margin: 0 0 0 0; */
}
</style>
