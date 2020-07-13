<template>
    <div>
        <header>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <router-link :to="{name: 'Landing'}" class="navbar-item">Breeze</router-link>
                </div>

                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMain">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>

                <div id="navbarMain" class="navbar-menu">
                    <div class="navbar-start">
                        
                    </div>
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <a href="/login" class="button is-primary">Login</a>
                                <a href="/register" class="button is-light">Register</a>
                            </div>
                        </div>
                    </div>
                </div>

            </nav>
        </header>
        <router-view />
    </div>
</template>

<script>
export default {};
</script>