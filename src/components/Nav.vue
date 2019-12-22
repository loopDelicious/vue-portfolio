<template>

    <b-navbar toggleable="sm" type="light" variant="transparent" fixed="top" >
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
            <b-navbar-nav class="pl-5" inline>
                <b-nav-item-dropdown text="☰" style="font-size: 32px;" no-caret>
                    <b-dropdown-item href="#speaking-drawer">speaking</b-dropdown-item>
                    <b-dropdown-item href="#writing-drawer">writing</b-dropdown-item>
                    <b-dropdown-item href="#building-drawer">building</b-dropdown-item>
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

</style>
