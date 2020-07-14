<template>
    <div id="login-page">
        <header class="text-center">
            <h1>Inscription</h1>
            <p>Trouvez l'équipe qui vous correspond</p>
        </header>
        <div class="container d-flex justify-content-center">
            <form class="col-md-5">
                <!-- Name -->
                <div class="form-group">
                    <label for="name" class="bmd-label-floating">
                        Nom
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="name"
                        name="name"
                    />
                </div>

                <!-- Email -->
                <div class="form-group">
                    <label for="email" class="bmd-label-floating">
                        Adresse email
                    </label>
                    <input
                        type="email"
                        class="form-control"
                        id="email"
                        name="email"
                    />
                    <span class="bmd-help">
                        Nous ne partageons aucune donnée, pas même votre email!
                    </span>
                </div>

                <!-- passwords -->
                <div class="form-row">
                    <!-- password -->
                    <div class="form-group col">
                        <label for="password" class="bmd-label-floating">
                            Mot de passe
                        </label>
                        <input
                            type="password"
                            class="form-control"
                            id="password"
                            name="password"
                        />
                    </div>
                    <!-- password confirmation -->
                    <div class="form-group col">
                        <label for="password" class="bmd-label-floating">
                            Confirmation
                        </label>
                        <input
                            type="password"
                            class="form-control"
                            id="password_confirmation"
                            name="password_confirmation"
                        />
                    </div>
                    <div class="form-group">
                        <small class="form-text text-muted">
                            Utilisez au moins huit caractères avec des lettres,
                            des chiffres et des symboles
                        </small>
                    </div>
                </div>

                <div class="form-group">
                    <button type="submit" class="btn btn-primary">
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
import Navbar from "@/components/Navbar.vue";

export default {};
</script>
