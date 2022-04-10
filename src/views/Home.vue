<template>
  <div>
    <swiper :navigation="true" :modules="modules" class="mySwiper">
      <swiper-slide>
        <section class="home slide-1">
          <div class="container">
            <div class="home__content">
              <h2 class="home__subtitle">
                Биочистка верхней одежды в Ташкенте
              </h2>
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
          <div class="container">
            <div class="home__content">
              <h2 class="home__subtitle">
                Биочистка верхней одежды в Ташкенте
              </h2>
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
          <div class="container">
            <div class="home__content">
              <h2 class="home__subtitle">
                Биочистка верхней одежды в Ташкенте
              </h2>
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
	padding-top: 50px;
  height: 768px;
  display: grid;
  align-content: center;
  background-position: center 98px;
  background-size: cover;
  background-repeat: no-repeat;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5));
	}

  &.slide-1 {
    background-image: url('@/assets/home-1.jpg');
  }
	&.slide-2 {
    background-image: url('@/assets/home-2.webp');
  }
	&.slide-3 {
    background-image: url('@/assets/home-3.jpg');
  }

  &__content {
    text-align: center;
  }

  &__title {
    max-width: 770px;
    margin: 0 auto;
    text-transform: uppercase;
    font-size: clamp(1.5rem, -1.5rem + 8vw, 3rem);
    font-weight: 700;
    line-height: calc(70 / 48 * 100%);
    color: #fff;
    margin-bottom: 40px;
  }

  &__subtitle {
    font-size: clamp(1.125rem, 0.6563rem + 1.5vw, 1.5rem);
    font-weight: 600;
    line-height: calc(33 / 24 * 100%);
    color: #fff;
    margin-top: 0;
    margin-bottom: 10px;
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
