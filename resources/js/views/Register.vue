<template>
    <div id="register-page">
        <header class="text-center">
            <h1>Inscription</h1>
            <p>Trouvez l'équipe qui vous correspond</p>
        </header>
        <div class="container d-flex justify-content-center mt-5">
            <form class="col-md-5">
                <!-- Name -->
                <div class="form-group">
                    <label for="name" class="bmd-label-floating">
                        Nom
                    </label>
                    <input
                        :class="{ 'is-invalid': errors.name }"
                        type="text"
                        class="form-control"
                        id="name"
                        name="name"
                        v-model="user.name"
                    />
                    <span
                        v-for="message in errors.name"
                        :key="message"
                        class="invalid-feedback"
                    >
                        {{ message }}
                    </span>
                </div>

                <!-- Email -->
                <div class="form-group">
                    <label for="email" class="bmd-label-floating">
                        Adresse email
                    </label>
                    <input
                        :class="{ 'is-invalid': errors.email }"
                        type="email"
                        class="form-control"
                        id="email"
                        name="email"
                        v-model="user.email"
                    />
                    <span
                        v-for="message in errors.email"
                        :key="message"
                        class="invalid-feedback"
                    >
                        {{ message }}
                    </span>
                </div>

                <!-- passwords -->
                <div class="form-row">
                    <!-- password -->
                    <div class="form-group col-md-6">
                        <label for="password" class="bmd-label-floating">
                            Mot de passe
                        </label>
                        <input
                            :class="{ 'is-invalid': errors.password }"
                            type="password"
                            class="form-control"
                            id="password"
                            name="password"
                            v-model="user.password"
                        />
                    </div>
                    <!-- password confirmation -->
                    <div class="form-group col">
                        <label for="password" class="bmd-label-floating">
                            {{ $t("general.Confirm Password")}}
                        </label>
                        <input
                            :class="{
                                'is-invalid':
                                    errors.password ||
                                    user.password != user.password_confirmation
                            }"
                            type="password"
                            class="form-control"
                            id="password_confirmation"
                            name="password_confirmation"
                            v-model="user.password_confirmation"
                        />
                    </div>
                    <span
                        v-for="message in errors.password"
                        :key="message"
                        class="invalid-feedback"
                    >
                        {{ message }}
                    </span>
                </div>

                <div class="mt-3">
                    <button
                        @click.prevent="register()"
                        type="submit"
                        class="btn btn-block btn-outline-primary"
                    >
                        Inscription
                    </button>
                </div>
                <!-- </div>
                </div> -->
            </form>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    data: function() {
        return {
            user: {
                name: "",
                email: "",
                password: "",
                password_confirmation: ""
            }
        };
    },
    computed: {
        ...mapState({
            errors: state => state.general.errors
        })
    },
    methods: {
        register: function() {
            this.$store.dispatch("auth/register", this.user);
        }
    }
};
</script>
