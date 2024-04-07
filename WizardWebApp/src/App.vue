<template>
  <header>
    <div>
      <nav class="navbar navbar-expand-sm border-dark shadow-sm" id="nav-wizard">
        <router-link to="/" class="" href="#">
          <a class="nav-title navbar-brand">Wizard App</a>
        </router-link>

        <i aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
          class="navbar-toggler" data-bs-target="#nav-wizard-items" data-bs-toggle="collapse" type="button"
          id="nav-menu-button">
          <i class="fas fa-navicon"></i>
        </i>

        <div class="collapse navbar-collapse justify-content-end" id="nav-wizard-items">

          <ul class="navbar-nav" ref="navLinks">
            <li class="navbar-list" v-for="route in routes">
              <router-link class="nav-link mx-2 p-0" :class="{ 'tab-active': isTabActive(route.at(0)) }" :to="route.at(0)">
                {{ route.at(1) }}
              </router-link>
            </li>
          </ul>

          <div class="theme-changer flex-items-center d-inline-flex">
            <i class="fas fa-sun mx-2" id="sun" :style="{ color: !darkThemeIsOn ? 'orange' : 'gray' }"></i>
            <div class="form-switch">
              <input class="form-check-input " type="checkbox" role="switch" id="flexSwitchCheckChecked"
                @click="toggleThemeSwitch">
            </div>
            <i class="fas fa-moon" id="moon" :style="{ color: darkThemeIsOn ? 'lightskyblue' : 'gray' }"></i>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <router-view></router-view>

  <footer class="footer mt-3" role="contentinfo">
    <h2 class='sr-only'>Footer</h2>
    <div class="d-flex flex-justify-center flex-items-center flex-column-reverse flex-lg-row flex-wrap flex-lg-nowrap">
      <div class="d-flex flex-items-center flex-shrink-0 mx-2">
        <router-link aria-label="Homepage" title="GitHub" class="small mx-2 mb-1" to="/">
          <img src="./assets/wizard-logo.jpg" style="height: 30px; width: 30px; border-radius: 50%" alt="logo">
        </router-link>
        <span class="small">
          &copy; 2024 Wizard App
        </span>
      </div>

    </div>
  </footer>
</template>
<script>
import { appRoutes } from '../src/scripts/variables'

export default {
  data() {
    return {
      darkThemeIsOn: false,
      routes: [...appRoutes]
    }
  }, methods: {
    toggleThemeSwitch() {
      let element = document.body;
      element.dataset.bsTheme = element.dataset.bsTheme === 'light' ? 'dark' : 'light'
      this.checkIsDarkThemeOn()
    },
    checkIsDarkThemeOn() {
      this.darkThemeIsOn = document.getElementById('flexSwitchCheckChecked').checked
    },
    isTabActive(route) {
      return this.$route.path === route
    }
  }, mounted() {
    this.checkIsDarkThemeOn()
  }
}

</script>