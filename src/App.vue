<template>
  <div class="app-main-container">
    <b-navbar toggleable="lg" type="dark" variant="dark" class="fixed-top">
      <b-link to="/" class="navbar-brand">Vue Simple App</b-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-link to="/" class="nav-link">Home</b-link>
          <b-link to="/contact" class="nav-link">Contact</b-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view />
  </div>
</template>

<style lang="scss" scoped>
  .app-main-container {
    font-size: 1rem;
    padding-top: 3.625rem;

    h1 {
      margin: 2rem 0;
    }

    .navbar-dark .navbar-nav a.nav-link {
      color: gray;
    }

    .navbar-dark .navbar-nav .nav-link.router-link-exact-active {
      color: white;
    }
  }
</style>