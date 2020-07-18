<template>
    <div id="login-page">
        <header class="text-center">
            <h1>Connexion</h1>
            <p>Trouvez l'équipe qui vous correspond</p>
        </header>
        <div class="container d-flex justify-content-center mt-5">
            <form class="col-md-5">
                <!-- Email -->
                <div class="form-group">
                    <label for="email" class="bmd-label-floating">
                        {{ $t("general.Email address") }}
                    </label>
                    <input
                        :class="{'is-invalid' : errors.email}"
                        type="email"
                        class="form-control"
                        id="email"
                        name="email"
                        v-model="credentials.email"
                    />
                    <span v-for="message in errors.email" v-bind:key="message" class="invalid-feedback">
                        {{ message }}
                    </span>
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
                        :class="{'is-invalid' : errors.email}"
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
                <div class="row">
                    <button
                        @click.prevent="login()"
                        type="submit"
                        class="btn btn-block btn-outline-primary"
                    >
                        {{ $t("general.login") }}
                    </button>
                </div>
                <div class="row justify-content-center">
                    <router-link class="reset_link" :to="{ name: 'ForgotPassword' }">
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
import { mapState } from 'vuex';

export default {
    data: function() {
        return {
            credentials: {
                email: "",
                password: "",
                rememberme: false
            }
        };
    },
    computed: {
        ...mapState({
            errors: state => state.general.errors
        })
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
    // display: block;
    // text-align: center;
    color: rgb(33, 37, 41);

}
</style>