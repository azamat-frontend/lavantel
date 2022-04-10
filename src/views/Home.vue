<template>
  <div>
    <swiper :navigation="true" :modules="modules" :loop="true" class="mySwiper">
      <swiper-slide>
        <section class="home slide-1">
					<picture>
						<source srcset="@/assets/home-1-large.jpg" media="(min-width: 1000px)" />
						<source srcset="@/assets/home-1-medium.jpg" media="(min-width: 600px)" />
						<img src="@/assets/home-1.jpg" alt="" />
					</picture>
          <div class="container">
            <div class="home__content">
              <h2 class="home__subtitle">Биочистка верхней одежды</h2>
              <h1 class="home__title">Первая в Ташкенте Студия Биочистки</h1>
              <router-link class="home__link" :to="{ name: 'Contacts' }"
                >Оставить Заявку</router-link
              >
            </div>
          </div>
        </section>
      </swiper-slide>

      <swiper-slide>
        <section class="home slide-2">
					<picture>
						<source srcset="@/assets/home-2-large.jpg" media="(min-width: 1000px)" />
						<source srcset="@/assets/home-2-medium.jpg" media="(min-width: 600px)" />
						<img src="@/assets/home-2.jpg" alt="" />
					</picture>
          <div class="container">
            <div class="home__content">
              <h2 class="home__subtitle">Биочистка верхней одежды</h2>
              <h1 class="home__title">Первая в Ташкенте Студия Биочистки</h1>
              <router-link class="home__link" :to="{ name: 'Contacts' }"
                >Оставить Заявку</router-link
              >
            </div>
          </div>
        </section>
      </swiper-slide>

      <swiper-slide>
        <section class="home slide-3">
					<picture>
						<source srcset="@/assets/home-3-large.jpg" media="(min-width: 1200px)" />
						<source srcset="@/assets/home-3-medium.jpg" media="(min-width: 768px)" />
						<img src="@/assets/home-3.jpg" alt="" />
					</picture>
          <div class="container">
            <div class="home__content">
              <h2 class="home__subtitle">Биочистка верхней одежды</h2>
              <h1 class="home__title">Первая в Ташкенте Студия Биочистки</h1>
              <router-link class="home__link" :to="{ name: 'Contacts' }"
                >Оставить Заявку</router-link
              >
            </div>
          </div>
        </section>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modules: [Navigation]
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  position: relative;
	z-index: 1;
  height: 768px;
  display: grid;
  align-content: center;

  &::before {
    content: '';
    position: absolute;
		z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    );
  }

	img {
		position: absolute;
		top: 98px;
		height: 768px;
		object-fit: cover;
		@media (max-width: 576px) {
			top: 79.14px;
			height: 565px;
		}
	}

  &__content {
    text-align: center;
		margin-top: 150px;
		@media (max-width: 768px) {
			margin-top: 0;
		}
  }

  &__title {
    max-width: 770px;
    margin: 0 auto;
    text-transform: uppercase;
    font-size: clamp(2rem, -1.5rem + 8vw, 3rem);
    font-weight: 700;
    line-height: calc(70 / 48 * 100%);
    color: #fff;
    margin-bottom: 40px;
  }

  &__subtitle {
    font-size: clamp(0.5rem, 0.6563rem + 1.5vw, 1.5rem);
    font-weight: 600;
    line-height: calc(33 / 24 * 100%);
    color: #fff;
    margin-top: 0;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  &__link {
    background: #7d71b1;
    border-radius: 6px;
    color: #fff;
    min-height: 65px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-width: 190px;
    width: 100%;
  }
}
</style>
