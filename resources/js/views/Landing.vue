<template>
    <div id="landing-page">
        <h1>Landing page</h1>
        {{ user.email }}
    </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import { mapState } from 'vuex';
export default {
    name: "Landing",
    components: {
        Navbar
    },
    computed: {
        ...mapState({
            user: state => state.auth.user,
        })
    },
    created: function() {
        // this.$store.dispatch("samples/index");
    }
};
</script>

<style lang="scss" scoped></style>
