<template>
  <the-header></the-header>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader
  },
  data() {
    return {
      links: [
        {
          id: 1,
          name: 'Главная',
          routerName: 'Home'
        },
        {
          id: 2,
          name: 'О нас',
          routerName: 'About'
        },
        {
          id: 3,
          name: 'Услуги',
          routerName: 'Services'
        },
        {
          id: 4,
          name: 'Наши работы',
          routerName: 'Works'
        },
        {
          id: 5,
          name: 'Отзывы',
          routerName: 'Reviews'
        },
        {
          id: 6,
          name: 'Контакты',
          routerName: 'Contacts'
        }
      ]
    }
  },
  provide() {
    return {
      links: this.links
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');

:root {
  --text-color: #1f1f1f;
  --white: #fff;
  --transition: 0.3s ease;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
	width: 100%;
  display: block;
  height: auto;
  border: none;
}

#app {
	padding-bottom: 100px;
}

.container {
  width: 100%;
  position: relative;
  z-index: 1;
  padding: 0 1rem;
  margin: 0 auto;
}

@media (max-width: 1400px) {
  .container {
    max-width: 1320px;
  }
}

@media (max-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

@media (max-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (max-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (max-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 992px) {
  .container {
    padding: 0 2rem;
  }
}
</style>
