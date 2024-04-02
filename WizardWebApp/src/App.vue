<template>
  <header>
    <div>
      <nav class="navbar navbar-expand-md border-dark shadow-sm" id="nav-wizard">
        <router-link to="/" class="navbar-brand mb-0 mx-2" href="#">
          <img src="./assets/wizard-logo.jpg" alt="logo" class="d-inline-block align-top nav-logo">
          <h5 class="d-inline-block ms-2 align-bottom">Wizard App</h5>
        </router-link>

        <i aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                class="navbar-toggler mx-2"
                data-bs-target="#nav-wizard-items"
                data-bs-toggle="collapse"
                type="button"
                id="nav-menu-button">
          <i class="fas fa-navicon"></i>
        </i>

        <div class="collapse navbar-collapse mx-3" id="nav-wizard-items">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" to="/teachers">Teachers</router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" to="/interactive-classes">Interactive Classes</router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" to="/admin-center">Admin Center</router-link>
            </li>
          </ul>
          <div class="theme-changer flex-items-center d-inline-flex">
            <i class="fas fa-sun mx-2" id="sun"
               :style="{ color: !darkThemeIsOn ? 'orange' : 'gray'}"></i>
            
            <div class="form-switch">
              <input
                  class="form-check-input "
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  @click="toggleThemeSwitch">
            </div>
            
            <i class="fas fa-moon" id="moon" :style="{ color: darkThemeIsOn ? 'lightskyblue' : 'gray'}"></i>
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
export default {
  data() {
    return {
      darkThemeIsOn: false
    }
  }, methods: {
    toggleThemeSwitch() {
      let element = document.body;
      element.dataset.bsTheme = element.dataset.bsTheme === 'light' ? 'dark' : 'light'
      this.checkIsDarkThemeOn()
    },
    checkIsDarkThemeOn() {
      this.darkThemeIsOn = document.getElementById('flexSwitchCheckChecked').checked
    }
  }, mounted() {
    this.checkIsDarkThemeOn()
  }
}

</script>