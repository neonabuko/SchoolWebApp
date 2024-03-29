<template>
  <header>
    <div>
      <nav class="navbar navbar-expand-md border-dark shadow" id="nav-wizard">
        <router-link to="/" class="navbar-brand mb-0 mx-2" href="#">
          <img src="./assets/wizard-logo.jpg" alt="logo" class="d-inline-block align-top nav-logo">
          <h5 class="d-inline-block ms-2 align-bottom">Wizard App</h5>
        </router-link>

        <button aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                class="navbar-toggler mx-2"
                data-bs-target="#nav-wizard-items"
                data-bs-toggle="collapse"
                type="button"
                id="nav-menu-button">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse text-end mx-2" id="nav-wizard-items">
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
          <div class="form-switch mx-1">
            <input
                class="form-check-input p-2"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                checked
                @click="toggleThemeSwitch">
          </div>
        </div>
      </nav>
    </div>
  </header>
  <router-view></router-view>
</template>
<script>
export default {
  data() {
    return {}
  }, methods: {
    toggleThemeSwitch() {
      let element = document.body;
      element.dataset.bsTheme = element.dataset.bsTheme === 'light' ? 'dark' : 'light'
    }
  }
}

</script>