<template>
  <header class="header" :class="{ active: scrolledNav }">
    <div class="container">
      <div class="header__wrapper">
        <a class="header__logo logo" href="#">
          <img class="logo__img" src="@/assets/logo.svg" alt="" />
        </a>
        <nav class="header__nav nav">
          <ul class="nav__list" v-show="!mobile">
            <li class="nav__item" v-for="link in links" :key="link.id">
              <router-link class="nav__link" :to="{ name: link.routerName }">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="header__hamburger" :class="{ active: mobileNav }">
          <i class="ri-menu-line" @click="toggleMobileNav" v-show="mobile"></i>
        </div>
        <transition name="mobile-nav">
          <ul class="mobile-nav" v-show="mobileNav">
            <li class="mobile-nav__item" v-for="link in links" :key="link.id">
              <router-link
                class="mobile-nav__link"
                :to="{ name: link.routerName }"
              >
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </transition>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null
    }
  },
  created() {
    window.addEventListener('resize', this.checkScreen)
    this.checkScreen()
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll)
    this.updateScroll()
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav
    },

    checkScreen() {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 800) {
        this.mobile = true
        return
      }
      this.mobile = false
      this.mobileNav = false
      return
    },

    updateScroll() {
      const scrollPosition = window.scrollY
      if (scrollPosition > 50) {
        this.scrolledNav = true
      } else {
        this.scrolledNav = false
      }
    }
  },
  inject: ['links']
}
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  transition: var(--transition);
	background-color: var(--white);
  color: var(--text-color);

  &.active {
    background-color: #fff;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }

  &__wrapper {
    display: flex;
    align-items: center;
    padding: 1rem 0;
  }

  &__logo {
    display: inline-flex;
    img {
      @media (max-width: 576px) {
        width: 90px;
      }
    }
  }

  &__nav {
    margin: 0 auto;
  }

  &__hamburger {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    height: 100%;
    right: 24px;
    z-index: 10;

    i {
      cursor: pointer;
      font-size: 24px;
      transition: 0.8s ease;
    }
  }
  &__hamburger.active i {
    transform: rotate(180deg);
  }
}

.nav {
  transition: var(--transition);

  &__list {
    display: flex;
  }

  &__item:not(:last-child) {
    margin-right: 1.56rem;
  }

  &__link {
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #1f1f1f;
    padding-bottom: 4px;
    border-bottom: 2px solid transparent;
  }

  &__link.active {
    color: #7d71b1;
    border-bottom-color: #7d71b1;
  }
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 10px;
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background-color: #7d71b1;
  top: 0;
  left: 0;

  &__link {
    color: #fff;
    font-size: 18px;
    padding-bottom: 4px;
    border-bottom: 2px solid transparent;
  }
  &__link.active {
    border-bottom-color: #fff;
  }
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: all 0.5s ease;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}
</style>
