<template>
    <div>
        <div :class="{ 'nav-open': active }">
            <nav class="navbar fixed-top navbar-expand-lg navbar-light">
                <div class="container">
                    <div class="navbar-translate">
                        <router-link
                            class="navbar-brand"
                            :to="{ name: 'Landing' }"
                        >
                            <div class="d-lg-none">
                                <span v-if="landing">Breeze</span>
                                <span v-else id="navBack">
                                    <i class="material-icons">arrow_back</i>
                                    <!-- {{ $route.name }} -->
                                    {{ $t("pages." + $route.name) }}
                                </span>
                            </div>

                            <div class="d-none d-lg-block">
                                <span>BreezeLogo</span>
                            </div>
                        </router-link>
                        <button
                            :class="{ 'is-active': active }"
                            @click="toggle()"
                            class="hamburger hamburger--spin d-lg-none"
                            type="button"
                        >
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>

                    <div class="collapse navbar-collapse" id="navbarToggler">
                        <header class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <router-link
                                class="text-center nav-link d-lg-none"
                                :to="{ name: 'Landing' }"
                            >
                                BreezeLogo Breeze
                            </router-link>
                        </header>
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li v-if="!user" class="nav-item">
                                <router-link
                                    class="nav-link"
                                    :to="{ name: 'Login' }"
                                    >Connexion</router-link
                                >
                            </li>
                            <li v-if="!user" class="nav-item">
                                <router-link
                                    class="nav-link"
                                    :to="{ name: 'Register' }"
                                    >Inscription</router-link
                                >
                            </li>
                            <li v-if="user" class="nav-item">
                                <router-link
                                    class="nav-link"
                                    :to="{ name: 'Home' }"
                                    >Home</router-link
                                >
                            </li>
                            <li v-if="user" class="nav-item">
                                <a
                                    class="nav-link"
                                    href="#"
                                    @click.prevent="logout"
                                >
                                    Déconnexion
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";

export default {
    name: "Navbar",
    computed: {
        landing: function() {
            return this.$route.name == "Landing";
        },
        ...mapState({
            user: state => state.auth.user,
            active: state => state.navbar.active
        })
    },
    methods: {
        logout: function() {
            this.$store.dispatch("auth/logout");
        },
        toggle: function() {
            this.$store.dispatch("navbar/toggle");
        }
    }
};
</script>
