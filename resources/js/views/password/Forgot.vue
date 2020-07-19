<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        {{ $t("general.Reset Password") }}
                    </div>

                    <div class="card-body">
                        <!-- session toast succes -->
                        <!-- <div class="alert alert-success" role="alert">
                            {{ session("status") }}
                        </div> -->
                        <!-- End Toast -->

                        <form>
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
                                    v-model="email"
                                />
                                <span
                                    v-for="message in errors.email"
                                    v-bind:key="message"
                                    class="invalid-feedback"
                                >
                                    {{ message }}
                                </span>
                            </div>

                            <div class="form-group row mb-0">
                                <div>
                                    <button @click.prevent="send()" type="submit" class="btn btn-link">
                                        {{ $t("general.Send instructions")}}
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
import { mapState } from 'vuex';
export default {
    data: function() {
        return {
            email: '',      
        }
    },
    computed: {
        ...mapState({
            errors: state => state.general.errors
        })
    },
    methods: {
        send: function() {
            this.$store.dispatch("auth/pwd_email", this.email)
        }
    }
};
</script>
