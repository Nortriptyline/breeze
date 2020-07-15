<template>
    <div>
        <Navbar />
        <main>
            <router-view />
        </main>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Navbar from "@/components/Navbar.vue";
export default {
    components: {
        Navbar
    },
    watch: {
        $route(to, from) {
            // Close drawer on route changing if it is open.
            if (this.active) {
                this.$store.dispatch("navbar/toggle");
            }
        }
    },
    computed: {
        ...mapState({
            active: state => state.navbar.active
        })
    },
    mounted: function() {
        // this.$store.dispatch("auth/synchronize");
    }
};
</script>
