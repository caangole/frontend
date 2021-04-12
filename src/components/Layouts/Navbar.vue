<template>
  <div class="app-navbar">
       <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">Vue Apollo</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <li class="nav-item">
            <router-link class='nav-link' to='/'>Inicio</router-link>
        </li>
        <li class="nav-item">
            <router-link class='nav-link' to='/about'>Nosotros</router-link>
        </li>
        <li class="nav-item">
            <router-link class='nav-link' to='/auth/login'>Ingresar</router-link>
        </li>
        <li class="nav-item">
            <router-link class='nav-link' to='/auth/register'>Registrarse</router-link>
        </li>
        <li class="nav-item">
            <router-link class='nav-link' to='/dashboard/my-profile'>Perfil</router-link>
        </li>
        <li class="nav-item">
            <router-link class='nav-link' to='/dashboard/my-posts'>Mis posts</router-link>
        </li>
        <li class="nav-item">
            <router-link class='nav-link' to='/dashboard/logout'>Salir</router-link>
        </li>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {

}
</script>
