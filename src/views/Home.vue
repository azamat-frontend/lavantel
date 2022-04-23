<template>
  <div>
    <swiper :navigation="{nextEl: '.nextArrow', prevEl: '.prevArrow'}" :modules="modules" :loop="true" :speed="800" class="mySwiper">
			<div class="slider-navigation">
				<div class="slider-arrow prevArrow">
					<i class="ri-arrow-left-s-line"></i>
				</div>
				<div class="slider-arrow nextArrow">
					<i class="ri-arrow-right-s-line"></i>
				</div>
			</div>
      <swiper-slide>
        <section class="home slide-1">
          <picture>
            <source
              srcset="@/assets/images/home-1-large.webp"
              media="(min-width: 900px)"
            />
            <source
              srcset="@/assets/images/home-1-large.webp"
              media="(min-width: 768px)"
            />
            <img src="@/assets/images/home-1-small.webp" alt="" />
          </picture>
          <div class="container">
            <div class="home__content">
              <h2 class="home__subtitle">Биочистка верхней одежды</h2>
              <h1 class="home__title">Первая в Ташкенте Студия Биочистки</h1>
              <router-link class="home__link" :to="{ name: 'contacts' }"
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
              srcset="@/assets/images/home-2-large.webp"
              media="(min-width: 900px)"
            />
            <source
              srcset="@/assets/images/home-2-large.webp"
              media="(min-width: 768px)"
            />
            <img src="@/assets/images/home-2-small.webp" alt="" />
          </picture>
          <div class="container">
            <div class="home__content">
              <h2 class="home__subtitle">Биочистка верхней одежды</h2>
              <h1 class="home__title">Бесплатный вызов и доставка</h1>
              <router-link class="home__link" :to="{ name: 'contacts' }"
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
              srcset="@/assets/images/home-3-large.webp"
              media="(min-width: 900px)"
            />
            <source
              srcset="@/assets/images/home-3-large.webp"
              media="(min-width: 768px)"
            />
            <img src="@/assets/images/home-3-large.webp" alt="" />
          </picture>
          <div class="container">
            <div class="home__content">
              <h2 class="home__subtitle">Биочистка верхней одежды</h2>
              <h1 class="home__title">С заботой о наших клиентах</h1>
              <router-link class="home__link" :to="{ name: 'contacts' }"
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
        <a class="infos__card" href="https://goo.gl/maps/32p6Y2jQh1q2CgRG9" target="_blank">
          <i class="ri-map-pin-fill"></i>
          <div class="infos__txt">
            <h3 class="infos__title">Мы находимся:</h3>
            <p class="infos__subtitle">Toshkent, Labihovuz ko’chasi</p>
          </div>
        </a>
        <a class="infos__card" href="mailto:lavantel.tashkent@gmail.com" target="_blank">
          <i class="ri-mail-fill"></i>
          <div class="infos__txt">
            <h3 class="infos__title">Напишите нам:</h3>
            <p class="infos__subtitle">lavantel.tashkent@gmail.com</p>
          </div>
        </a>
        <a class="infos__card" href="tel:998997780500">
          <i class="ri-phone-fill"></i>
          <div class="infos__txt">
            <h3 class="infos__title">Свяжитесь с нами:</h3>
            <p class="infos__subtitle">+998 (99) 778-05-00</p>
          </div>
        </a>
      </div>
    </div>
  </div>

	<page-about></page-about>
	<page-services></page-services>
  <page-benefits></page-benefits>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

import PageAbout from '@/components/PageAbout'
import PageServices from '@/components/PageServices'
import PageBenefits from '@/components/PageBenefits'

export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide,
		PageAbout,
		PageServices,
    PageBenefits
  },
  data() {
    return {
      modules: [Navigation]
    }
  }
}
</script>

<style scoped lang="scss">
.slider-navigation {
	position: absolute;
	z-index: 2;
	top: 50%;
	transform: translateY(-50%);
	left: 100px;
	right: 100px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 0;
	
	@media (max-width: 1170px) {
		left: 70px;
		right: 70px;
	}
	@media (max-width: 1024px) {
		top: 55%;
	}
	@media (max-width: 768px) {
		left: 20px;
		right: 20px;
	}
	@media (max-width: 500px) {
		top: 70%;
	}

	@media (max-width: 347px) {
		
		left: 10px;
		right: 10px;
	}
}

.slider-arrow {
	height: 40px;
	width: 40px;
	border-radius: 6px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #7D71B1;
	color: #fff;
	font-size: 20px;
	cursor: pointer;
}
.home {
  position: relative;
	width: 100%;
  z-index: 1;
  height: 865px;
  display: grid;
  align-content: center;
	@media (max-width: 576px) {
		height: 720px;
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
		border: none;
    @media (max-width: 576px) {
      top: 79.14px;
      height: 640px;
    }
  }

  &__content {
    text-align: center;
		margin-top: 80px;
    @media (max-width: 768px) {
      margin-top: 9rem;
    }
  }

  &__title {
    max-width: 770px;
    margin: 0 auto;
    text-transform: uppercase;
    font-size: clamp(1.7rem, -1.5rem + 8vw, 3rem);
    font-weight: 700;
    line-height: calc(70 / 48 * 100%);
    color: #fff;
  }

  &__subtitle {
    font-size: clamp(12px, 0.6563rem + 1vw, 1.5rem);
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
		margin-top: 16px;
  }
} /* home end */

.infos {
  margin-top: -60px;
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
