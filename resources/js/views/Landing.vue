<template>
    <div id="landing-page">
        <h1>Landing page</h1>
    </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
    name: "Landing",
    components: {
        Navbar
    },
    created: function() {
        // this.$store.dispatch("samples/index");
    }
};
</script>

<style lang="scss" scoped></style>
