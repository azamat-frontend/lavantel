<template>
  <header class="header" :class="{'scrolled-nav': scrolledNav}">
    <div class="container">
      <div class="header__wrap">
        <a class="logo" href="#">
          <img src="@/assets/logo.svg" alt="" />
        </a>
        <nav class="nav">
          <ul class="nav__list" v-show="!mobile">
            <li class="nav__item" v-for="link in links" :key="link.id">
              <router-link class="nav__link" :to="{ name: link.routerName }">
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="icon">
          <i
            class="ri-menu-line"
            @click="toggleMobileNav"
            v-show="mobile"
            :class="{ 'icon-active': mobileNav }"
          ></i>
        </div>
        <transition name="mobile-nav">
          <ul class="dropdown-nav" v-show="mobileNav">
            <li class="dropdown-nav__item" v-for="link in links" :key="link.id">
              <router-link class="dropdown-nav__link" :to="{ name: link.routerName }">
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
  z-index: 100;
  width: 100%;
  position: fixed;
  transition: 0.3s ease;
}
.header__wrap {
  display: flex;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  display: inline-flex;
}

.nav {
  margin: 0 auto;
  transition: 0.5s ease;
}
.nav__list {
  display: flex;
}

.nav__item:not(:last-child) {
  margin-right: 1.56rem;
}

.nav__link {
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #1f1f1f;
	padding-bottom: 4px;
	border-bottom: 2px solid transparent;
}

.nav__link.active {
  color: #7d71b1;
  border-bottom-color: #7d71b1;
}

.icon {
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
		transition: .8s ease;
  }
}

.icon-active {
	transform: rotate(180deg);
}

.dropdown-nav {
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

	.dropdown-nav__link {
		color: #fff;
		font-size: 18px;
		padding-bottom: 4px;
		border-bottom: 2px solid transparent;
	}
	.dropdown-nav__link.active {
		border-bottom-color: #fff;
	}
}

.scrolled-nav {
	background-color: #fff;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.header.scrolled-nav .logo {
	width: 100px;
}
.header.scrolled-nav .logo img {
	width: 100%;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active {
	transition: all .5s ease;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
	transform: translateX(-250px);
}

.mobile-nav-enter-to {
	transform: translateX(0);
}
</style>
