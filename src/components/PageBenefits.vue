<template>
  <section class="benefits">
    <div class="section-text">
			<h2 class="section-text__title">НАШИ ПРЕИМУЩЕСТВА</h2>
			<p class="section-text__subtitle">Почему нужно выбирать нас</p>
			<svg width="100" height="9" viewBox="0 0 100 9" fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<rect y="3" width="100" height="3" rx="1.5" fill="url(#paint0_linear_282_88)"/>
				<rect x="40" width="20" height="9" rx="4.5" fill="#7D71B1"/>
				<defs>
					<linearGradient id="paint0_linear_282_88" x1="99" y1="4.00007" x2="0.499998" y2="4.5001" gradientUnits="userSpaceOnUse">
						<stop stop-color="#566991" stop-opacity="0"/>
						<stop offset="0.395201" stop-color="#7D71B1"/>
						<stop offset="0.599265" stop-color="#7D71B1"/>
						<stop offset="1" stop-color="#566991" stop-opacity="0"/>
					</linearGradient>
				</defs>
			</svg>
		</div>

    <div class="container">
      <div class="benefits__cards">
        <div class="benefits__card">
          <div class="benefits__img">
            <img src="@/assets/images/benefits-01.svg" alt="">
          </div>
          <h3>Скидки</h3>
          <p>Гибкая Система Скидок <br /> От 10% До 30%</p>
        </div>
        <div class="benefits__card">
          <div class="benefits__img">
            <img src="@/assets/images/benefits-02.svg" alt="">
          </div>
          <h3>Доставка</h3>
          <p>Бесплатная Услуга <br /> Вывоза и Доставки</p>
        </div>
        <div class="benefits__card">
          <div class="benefits__img">
            <img src="@/assets/images/benefits-03.svg" alt="">
          </div>
          <h3>Цены</h3>
          <p>Качественная Биочистка <br /> По Приемлемым Ценам</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.benefits {
  background-color: #F2F1F7;
  padding-bottom: 100px;

  &__cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      grid-row-gap: 50px;
    }
  }

  &__card {
    max-width: 214px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &__img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: #BEB8D8;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 65px;
    }
  }
}
</style>