<template>
  <header class="header" :class="{ active: scrolledNav }">
    <div class="container">
      <div class="header__wrapper">
        <a class="header__logo logo" href="#">
          <img class="logo__img" src="@/assets/logo.svg" alt="" />
        </a>
        <nav class="header__nav nav">
          <ul class="nav__list" v-show="!mobile">
            <li class="nav__item">
              <router-link class="nav__link" :to="{ name: 'home' }"
                >Главная</router-link
              >
            </li>
            <li class="nav__item">
              <router-link class="nav__link" :to="{ name: 'about' }"
                >О нас</router-link
              >
            </li>
            <li class="nav__item">
              <router-link class="nav__link" :to="{ name: 'services' }"
                >Услуги</router-link
              >
            </li>
            <li class="nav__item">
              <router-link class="nav__link" :to="{ name: 'works' }"
                >Наши работы</router-link
              >
            </li>
            <li class="nav__item">
              <router-link class="nav__link" :to="{ name: 'reviews' }"
                >Отзывы</router-link
              >
            </li>
            <li class="nav__item">
              <router-link class="nav__link" :to="{ name: 'contacts' }"
                >Контакты</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="header__hamburger" :class="{ active: mobileNav }">
          <i class="ri-menu-line" @click="toggleMobileNav" v-show="mobile"></i>
        </div>
        <transition name="mobile-nav">
          <ul class="mobile-nav" v-show="mobileNav">
            <li class="mobile-nav__item">
              <router-link class="mobile-nav__link" :to="{ name: 'home' }">
								<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m19.659 9.701-7-6.125a1 1 0 0 0-1.318 0l-7 6.125a1 1 0 0 0-.341.753V19a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8.546a1 1 0 0 0-.341-.753Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
								<span>Главная</span>
							</router-link>
            </li>
            <li class="mobile-nav__item">
              <router-link class="mobile-nav__link" :to="{ name: 'about' }">
								<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 20c0-1.657 2.239-3 5-3s5 1.343 5 3M18 14.25c1.766.462 3 1.52 3 2.75M6 14.25c-1.766.462-3 1.52-3 2.75M12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 10.236a3 3 0 1 0-4-4.472M6 10.236a3 3 0 0 1 4-4.472" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
								О нас
							</router-link>
            </li>
            <li class="mobile-nav__item">
              <router-link class="mobile-nav__link" :to="{ name: 'services' }">
								<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.93 4.47a17.516 17.516 0 0 0-3.86 0 .666.666 0 0 0-.587.577 16.817 16.817 0 0 0 0 3.907.666.666 0 0 0 .588.576c1.27.142 2.587.142 3.858 0a.666.666 0 0 0 .587-.576c.152-1.298.152-2.61 0-3.908a.666.666 0 0 0-.587-.576ZM4.903 2.98a19.017 19.017 0 0 1 4.192 0c.99.11 1.793.89 1.91 1.892a18.31 18.31 0 0 1 0 4.256 2.166 2.166 0 0 1-1.91 1.893c-1.382.154-2.81.154-4.192 0a2.166 2.166 0 0 1-1.91-1.893 18.316 18.316 0 0 1 0-4.256 2.166 2.166 0 0 1 1.91-1.892ZM8.93 14.47a17.514 17.514 0 0 0-3.86 0 .666.666 0 0 0-.587.576 16.817 16.817 0 0 0 0 3.908.666.666 0 0 0 .588.576c1.27.142 2.587.142 3.858 0a.666.666 0 0 0 .587-.576c.152-1.298.152-2.61 0-3.908a.666.666 0 0 0-.587-.576Zm-4.026-1.49a19.023 19.023 0 0 1 4.192 0c.99.11 1.793.89 1.91 1.892a18.31 18.31 0 0 1 0 4.256 2.166 2.166 0 0 1-1.91 1.892c-1.382.155-2.81.155-4.192 0a2.166 2.166 0 0 1-1.91-1.892 18.316 18.316 0 0 1 0-4.256 2.166 2.166 0 0 1 1.91-1.892ZM18.93 4.47a17.517 17.517 0 0 0-3.86 0 .666.666 0 0 0-.587.577 16.817 16.817 0 0 0 0 3.907.666.666 0 0 0 .588.576c1.27.142 2.587.142 3.858 0a.666.666 0 0 0 .587-.576c.152-1.298.152-2.61 0-3.908a.666.666 0 0 0-.587-.576Zm-4.026-1.49a19.017 19.017 0 0 1 4.192 0c.99.11 1.793.89 1.91 1.892a18.31 18.31 0 0 1 0 4.256 2.166 2.166 0 0 1-1.91 1.893c-1.382.154-2.81.154-4.192 0a2.166 2.166 0 0 1-1.91-1.893 18.322 18.322 0 0 1 0-4.256 2.166 2.166 0 0 1 1.91-1.892ZM18.93 14.47a17.514 17.514 0 0 0-3.86 0 .666.666 0 0 0-.587.576 16.817 16.817 0 0 0 0 3.908.666.666 0 0 0 .588.576c1.27.142 2.587.142 3.858 0a.666.666 0 0 0 .587-.576c.152-1.298.152-2.61 0-3.908a.666.666 0 0 0-.587-.576Zm-4.026-1.49a19.023 19.023 0 0 1 4.192 0c.99.11 1.793.89 1.91 1.892a18.31 18.31 0 0 1 0 4.256 2.166 2.166 0 0 1-1.91 1.892c-1.382.155-2.81.155-4.192 0a2.166 2.166 0 0 1-1.91-1.892 18.322 18.322 0 0 1 0-4.256 2.166 2.166 0 0 1 1.91-1.892Z" fill="currentColor"/></svg>
								Услуги
							</router-link>
            </li>
            <li class="mobile-nav__item">
              <router-link class="mobile-nav__link" :to="{ name: 'works' }">
								<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m12 2 .555-.832a1 1 0 0 0-1.11 0L12 2Zm9 6 .555.832a1 1 0 0 0 0-1.664L21 8Zm-9 6-.555.832a1 1 0 0 0 1.11 0L12 14ZM3 8l-.555-.832a1 1 0 0 0 0 1.664L3 8Zm8.445-5.168 9 6 1.11-1.664-9-6-1.11 1.664Zm9 4.336-9 6 1.11 1.664 9-6-1.11-1.664Zm-7.89 6-9-6-1.11 1.664 9 6 1.11-1.664Zm-9-4.336 9-6-1.11-1.664-9 6 1.11 1.664ZM21.555 12.832a1 1 0 0 0-1.11-1.664l1.11 1.664ZM12 18l-.555.832a1 1 0 0 0 1.11 0L12 18Zm-8.445-6.832a1 1 0 0 0-1.11 1.664l1.11-1.664Zm16.89 0-9 6 1.11 1.664 9-6-1.11-1.664Zm-7.89 6-9-6-1.11 1.664 9 6 1.11-1.664ZM21.555 16.832a1 1 0 0 0-1.11-1.664l1.11 1.664ZM12 22l-.555.832a1 1 0 0 0 1.11 0L12 22Zm-8.445-6.832a1 1 0 0 0-1.11 1.664l1.11-1.664Zm16.89 0-9 6 1.11 1.664 9-6-1.11-1.664Zm-7.89 6-9-6-1.11 1.664 9 6 1.11-1.664Z" fill="currentColor"/></svg>
								Наши работы
							</router-link>
            </li>
            <li class="mobile-nav__item">
              <router-link class="mobile-nav__link" :to="{ name: 'reviews' }">
								<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m7.185 19.605.536-.844a1 1 0 0 0-.852-.105l.316.949ZM3 21l-.949-.316a1 1 0 0 0 1.265 1.265L3 21Zm1.395-4.185.949.316a1 1 0 0 0-.105-.852l-.844.536ZM12 22c5.523 0 10-4.477 10-10h-2a8 8 0 0 1-8 8v2Zm-5.35-1.55A9.958 9.958 0 0 0 12 22v-2a7.958 7.958 0 0 1-4.28-1.24l-1.07 1.69Zm.219-1.794-4.185 1.395.632 1.898 4.185-1.395-.632-1.898Zm-2.92 2.66 1.395-4.185-1.898-.632-1.395 4.185 1.898.632ZM2 12c0 1.966.569 3.803 1.55 5.35l1.69-1.07A7.958 7.958 0 0 1 4 12H2ZM12 2C6.477 2 2 6.477 2 12h2a8 8 0 0 1 8-8V2Zm10 10c0-5.523-4.477-10-10-10v2a8 8 0 0 1 8 8h2Z" fill="currentColor"/></svg>
								Отзывы
							</router-link>
            </li>
            <li class="mobile-nav__item">
              <router-link class="mobile-nav__link" :to="{ name: 'contacts' }">
								<svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m9.503 4.257-.929.372.929-.372Zm1.054 2.636.929-.372-.929.372Zm-.32 2.023.768.64-.768-.64Zm-.568.68.768.641-.768-.64Zm.122 2.695L9.084 13l.707-.708Zm1.918 1.918.707-.708-.707.708Zm2.694.122-.64-.768.64.768Zm.681-.568.64.769-.64-.769Zm2.023-.32-.371.928.371-.928Zm2.636 1.054.371-.928-.371.928ZM4.895 4h2.75V2h-2.75v2Zm3.68.629 1.054 2.635 1.857-.743-1.055-2.635-1.857.743Zm.893 3.647-.567.68 1.537 1.281.567-.68-1.537-1.281Zm-.384 4.723 1.917 1.917 1.415-1.415-1.917-1.917L9.084 13Zm5.96 2.1.68-.567-1.28-1.537-.681.568 1.28 1.536Zm1.692-.728 2.635 1.055.743-1.857-2.636-1.055-.742 1.857ZM20 16.354v2.751h2v-2.75h-2ZM19.105 20C10.763 20 4 13.237 4 4.895H2C2 14.342 9.658 22 19.105 22v-2Zm.895-.895c0 .494-.4.895-.895.895v2A2.895 2.895 0 0 0 22 19.105h-2Zm-.629-3.68a1 1 0 0 1 .629.93h2a3 3 0 0 0-1.886-2.786l-.743 1.857Zm-3.647-.893a1 1 0 0 1 1.012-.16l.742-1.858a3 3 0 0 0-3.034.481l1.28 1.537Zm-4.723.384a3 3 0 0 0 4.042.183l-1.28-1.537a1 1 0 0 1-1.347-.06L11 14.915Zm-2.1-5.96A3 3 0 0 0 9.084 13l1.415-1.415a1 1 0 0 1-.062-1.347l-1.536-1.28Zm.728-1.692a1 1 0 0 1-.16 1.012l1.536 1.28a3 3 0 0 0 .48-3.035l-1.856.743ZM7.646 4a1 1 0 0 1 .928.629l1.857-.743A3 3 0 0 0 7.646 2v2ZM4.895 2A2.895 2.895 0 0 0 2 4.895h2C4 4.4 4.4 4 4.895 4V2Z" fill="currentColor"/></svg>
								Контакты
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
  }
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
  position: fixed;
  width: 100%;
  max-width: 250px;
  height: 100%;
  background-color: #7d71b1;
  top: 0;
  left: 0;
	padding: 22px 0 0 20px;

	&__item {
		
	}

  &__link {
		display: flex;
		align-items: center;
		column-gap: 10px;
    color: #fff;
    font-size: 18px;
		font-weight: 600;
		line-height: calc(25 / 18 * 100%);
		padding: 1rem 0 1rem .75rem;
  }
  &__link.active {
		color: #1f1f1f;
    background-color: #fff;
		border-radius: 10px 0px 0px 10px;
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
