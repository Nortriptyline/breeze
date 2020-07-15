<template>
    <div id="login-page">
        <header class="text-center">
            <h1>Connexion</h1>
            <p>Trouvez l'équipe qui vous correspond</p>
        </header>
        <div class="container d-flex justify-content-center">
            <form class="col-md-5">
                <!-- Email -->
                <div class="form-group">
                    <label for="email" class="bmd-label-floating">
                        {{ $t("general.Email address") }}
                    </label>
                    <input
                        type="email"
                        class="form-control"
                        id="email"
                        name="email"
                        v-model="credentials.email"
                    />
                    <span class="bmd-help">
                        {{ $t("general.DataNotShared") }}
                    </span>
                </div>
                <!-- password -->
                <div class="form-group">
                    <label for="password" class="bmd-label-floating">{{
                        $t("general.Password")
                    }}</label>
                    <input
                        type="password"
                        class="form-control"
                        id="password"
                        name="password"
                        v-model="credentials.password"
                    />
                </div>

                <div class="form-group form-check">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        name="rememberme"
                        v-model="credentials.rememberme"
                    />
                    <label class="form-check-label" for="rememberme">
                        Se rappeler de moi
                    </label>
                </div>
                <div>
                    <button
                        @click.prevent="login()"
                        type="submit"
                        class="btn btn-block btn-outline-primary"
                    >
                        {{ $t("general.login") }}
                    </button>

                    <router-link class="reset_link" :to="{ name: 'pwd_reset' }">
                        <small>
                        {{ $t("general.forgot password") }}
                        </small>
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";

export default {
    components: {
        Navbar
    },
    data: function() {
        return {
            credentials: {
                email: "",
                password: "",
                rememberme: false
            }
        };
    },
    methods: {
        login: function() {
            this.$store.dispatch("auth/login", this.credentials);
        }
    }
};
</script>

<style lang="scss" scoped>
.reset_link {
    display: block;
    text-align: center;
    color: rgb(33, 37, 41);

}
</style>