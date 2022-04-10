<template>
  <div>
    <swiper :navigation="true" :modules="modules" :loop="true" class="mySwiper">
      <swiper-slide>
        <section class="home slide-1">
          <picture>
            <source
              srcset="@/assets/home-1-large.jpg"
              media="(min-width: 1000px)"
            />
            <source
              srcset="@/assets/home-1-medium.jpg"
              media="(min-width: 600px)"
            />
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
            <source
              srcset="@/assets/home-2-large.jpg"
              media="(min-width: 1000px)"
            />
            <source
              srcset="@/assets/home-2-medium.jpg"
              media="(min-width: 600px)"
            />
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
            <source
              srcset="@/assets/home-3-large.jpg"
              media="(min-width: 1200px)"
            />
            <source
              srcset="@/assets/home-3-medium.jpg"
              media="(min-width: 768px)"
            />
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
  <div class="infos">
    <div class="container">
      <div class="infos__block">
        <div class="infos__card">
          <i class="ri-map-pin-fill"></i>
          <div class="infos__txt">
            <h3 class="infos__title">Мы находимся:</h3>
            <a class="infos__subtitle" href="https://goo.gl/maps/32p6Y2jQh1q2CgRG9">Toshkent, Labihovuz ko’chasi</a>
          </div>
        </div>
        <div class="infos__card">
          <i class="ri-mail-fill"></i>
          <div class="infos__txt">
            <h3 class="infos__title">Напишите нам:</h3>
            <a class="infos__subtitle" href="mailto:lavantel.tashkent@gmail.com">lavantel.tashkent@gmail.com</a>
          </div>
        </div>
        <div class="infos__card">
          <i class="ri-phone-fill"></i>
          <div class="infos__txt">
            <h3 class="infos__title">Свяжитесь с нами:</h3>
            <a class="infos__subtitle" href="tel:998997780500">+998 (99) 778-05-00</a>
          </div>
        </div>
      </div>
    </div>
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
	@media (max-width: 576px) {
		height: 565px;
	}

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
} /* home end */

.infos {
  margin-top: -80px;
  @media (max-width: 992px) {
    margin-top: 30px;
  }
  &__block {
    display: flex;
    @media (max-width: 992px) {
      flex-direction: column;
      row-gap: 15px;
    }
  }

  &__card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: calc(100% / 3);
    padding: 30px 0;
    @media (max-width: 992px) {
      border-radius: 6px;
    }

    i {
      font-size: 40px;
      margin-right: 6px;
      color: #fff;
    }
  }
  &__card:nth-child(odd) {
    background: #7d71b1;
  }
  &__card:nth-child(even) {
    background: #566991;
  }
  &__card:nth-child(1) {
    border-top-left-radius: 6px;
  }
  &__card:nth-child(3) {
    border-top-right-radius: 6px;
  }

  &__title {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    margin: 0;
  }
  &__subtitle {
    font-size: 14px;
    color: #fff;
    margin: 0;
  }
}
</style>
