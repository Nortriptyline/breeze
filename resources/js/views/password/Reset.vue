<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        {{ $t("general.Reset Password") }}
                    </div>

                    <div class="card-body">
                        <form>
                            <!-- <input
                                type="hidden"
                                name="token"
                                value="{{ $token }}"
                            /> -->

                            <!-- Email -->
                            <div class="form-group">
                                <label for="email" class="bmd-label-floating">
                                    {{ $t("general.Email address") }}
                                </label>
                                <input
                                    :class="{ 'is-invalid': errors.email }"
                                    type="email"
                                    class="form-control"
                                    id="email"
                                    name="email"
                                    required
                                    v-model="email"
                                />
                                <span
                                    v-for="message in errors.email"
                                    v-bind:key="message"
                                    class="invalid-feedback"
                                >
                                    {{ message }}
                                </span>
                                <span class="bmd-help">
                                    {{ $t("general.DataNotShared") }}
                                </span>
                            </div>

                            <!-- password -->
                            <div class="form-group">
                                <label
                                    for="password"
                                    class="bmd-label-floating"
                                    >{{ $t("general.Password") }}</label
                                >
                                <input
                                    :class="{ 'is-invalid': errors.password }"
                                    type="password"
                                    class="form-control"
                                    id="password"
                                    name="password"
                                    v-model="password"
                                    autocomplete="new-password"
                                />
                            </div>

                            <!-- password -->
                            <div class="form-group">
                                <label
                                    for="password_confirmation"
                                    class="bmd-label-floating"
                                    >{{ $t("general.Confirm Password") }}</label
                                >
                                <input
                                    :class="{
                                        'is-invalid':
                                            errors.password ||
                                            password != password_confirmation
                                    }"
                                    type="password"
                                    class="form-control"
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    v-model="password_confirmation"
                                    required
                                    autocomplete="new-password"
                                />
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button
                                        @click.prevent="pwd_reset()"
                                        type="submit"
                                        class="btn btn-primary"
                                    >
                                        {{ $t("general.Reset Password") }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    props: ['token'],
    data: function() {
        return {
            email: "",
            password: "",
            password_confirmation: ""
        };
    },
    computed: {
        ...mapState({
            errors: state => state.general.errors
        })
    },
    methods: {
        pwd_reset: function() {
            this.$store.dispatch("auth/pwd_reset", {
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
                token: this.token
            })
        }
    },
    mounted: function() {
        // Init email via le query
        this.email = this.$route.query.email;
    }
};
</script>
