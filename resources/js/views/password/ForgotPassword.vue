<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">{{ $t("general.Reset Password") }}</div>

                    <div class="card-body">
                        <!-- session toast succes -->
                        <!-- <div class="alert alert-success" role="alert">
                            {{ session("status") }}
                        </div> -->
                        <!-- End Toast -->

                        <form>
                            <div class="form-group row">
                                <label
                                    for="email"
                                    class="col-md-4 col-form-label text-md-right"
                                >
                                    {{ $t("general.Email address") }}
                                </label>

                                <div class="col-md-6">
                                    <input
                                        id="email"
                                        type="email"
                                        class="form-control @error('email') is-invalid @enderror"
                                        name="email"
                                        required
                                        autocomplete="email"
                                        autofocus
                                    />

                                    <!-- Error helper -->
                                    <!-- <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span> -->
                                    <!-- End error -->
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button
                                        type="submit"
                                        class="btn btn-primary"
                                    >
                                        Envoyer le lien de réinitialisation du
                                        mot de passe
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
export default {};
</script>
