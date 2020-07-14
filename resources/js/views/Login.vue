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
                    <label for="email" class="bmd-label-floating"
                        >Adresse email</label
                    >
                    <input
                        type="email"
                        class="form-control"
                        id="email"
                        name="email"
                    />
                    <span class="bmd-help"
                        >Nous ne partageons aucune donnée, pas même votre email
                        !</span
                    >
                </div>
                <!-- password -->
                <div class="form-group">
                    <label for="password" class="bmd-label-floating">
                        {{ $t('general.Password') }}
                    </label>
                    <input
                        type="password"
                        class="form-control"
                        id="password"
                        name="password"
                    />
                </div>

                <div class="checkbox">
                    <label for="rememberme">
                        <input type="checkbox" name="rememberme" /> Se rappeler
                        de moi
                    </label>
                </div>
                <div class="">
                    <button type="submit" class="btn btn-primary">
                        {{ $t('general.login') }}
                    </button>

                    <a class="btn btn-link" href="">
                        Mot de passe oublié ?
                    </a>
                </div>
                <!-- </div>
                </div> -->
            </form>
        </div>
    </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";

export default {
    components: {
        Navbar
    }
};
</script>
