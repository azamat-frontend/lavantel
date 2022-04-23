<template>
  <div class="works">
    <div class="section-text">
      <h2 class="section-text__title">НАШИ РАБОТЫ</h2>
      <p class="section-text__subtitle">Фотографии выполненных работы</p>
      <svg
        width="100"
        height="9"
        viewBox="0 0 100 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          y="3"
          width="100"
          height="3"
          rx="1.5"
          fill="url(#paint0_linear_282_88)"
        />
        <rect x="40" width="20" height="9" rx="4.5" fill="#7D71B1" />
        <defs>
          <linearGradient
            id="paint0_linear_282_88"
            x1="99"
            y1="4.00007"
            x2="0.499998"
            y2="4.5001"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#566991" stop-opacity="0" />
            <stop offset="0.395201" stop-color="#7D71B1" />
            <stop offset="0.599265" stop-color="#7D71B1" />
            <stop offset="1" stop-color="#566991" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <swiper
      :breakpoints="{ 0: { slidesPerView: 1 }, 992: { slidesPerView: 2 } }"
      :navigation="{nextEl: '.nextArrow', prevEl: '.prevArrow'}"
      :slidesPerView="2"
      :spaceBetween="30"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="slide-image">
          <img src="@/assets/images/works-01.jpg" alt="" />
        </div>
        <div class="slide-image">
          <img src="@/assets/images/works-02.jpg" alt="" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-image">
          <img src="@/assets/images/works-03.jpg" alt="" />
        </div>
        <div class="slide-image">
          <img src="@/assets/images/works-04.jpg" alt="" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-image">
          <img src="@/assets/images/works-01.jpg" alt="" />
        </div>
        <div class="slide-image">
          <img src="@/assets/images/works-02.jpg" alt="" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-image">
          <img src="@/assets/images/works-03.jpg" alt="" />
        </div>
        <div class="slide-image">
          <img src="@/assets/images/works-04.jpg" alt="" />
        </div>
      </swiper-slide>
      <div class="slider-navigation">
        <div class="slider-arrow prevArrow">
          <img src="@/assets/images/prev.svg" alt="">
        </div>
        <div class="slider-arrow nextArrow">
          <img src="@/assets/images/next.svg" alt="">
        </div>
      </div>
    </swiper>
    
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      modules: [Navigation]
    }
  }
}
</script>

<style lang="scss" scoped>
.works {
  padding-top: 100px;
  padding-bottom: 100px;

  .swiper {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 5px;
    // height: 355px;
  }
  .slide-image {
    // height: 355px;
    width: 275px;
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    object-fit: cover;
  }
  .slider-navigation {
    width: 100%;
    display: flex;
    column-gap: 25px;
    padding: 10px 0;
    justify-content: center;
    align-items: center;
  }
  .slider-arrow {
    cursor: pointer;
    width: 40px;
    height: 40px;
  }
  .prevArrow {
    
  }

  .nextArrow {
    
  }
}
</style>