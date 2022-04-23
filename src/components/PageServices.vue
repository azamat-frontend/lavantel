<template>
	<section class="services">
		<div class="section-text">
			<h2 class="section-text__title">Услуги и цены</h2>
			<p class="section-text__subtitle">Студия биочистки</p>
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
			<div class="services__tab">
				<div class="services__tab-item">Надбавка За Сложную Декоративную Отделку 10%-50%</div>
				<div class="services__tab-item">Надбавка За Пятновыводку 10%-50%</div>
			</div>

			<div class="services__cards">
				<div class="services__card">
					<div class="services__card-img">
						<img src="@/assets/images/card-01.jpg" alt="">
					</div>
					<div class="services__card-content">
						<h3 class="services__card-title">Биочистка Изделий Из Нубука и Замши</h3>
						<p class="services__card-description">Устранение загрязнений и восстановление первоначальной яркости цвета позволит радоваться любимой вещью долгое время.</p>
						<div class="services__card-price">
							<p><span>200.000</span>/до 70 см</p>
							<p><span>250.000</span>/до 70 см</p>
						</div>
					</div>
				</div>

				<div class="services__card">
					<div class="services__card-img">
						<img src="@/assets/images/card-01.jpg" alt="">
					</div>
					<div class="services__card-content">
						<h3 class="services__card-title">Биочистка Изделий Из Нубука и Замши</h3>
						<p class="services__card-description">Устранение загрязнений и восстановление первоначальной яркости цвета позволит радоваться любимой вещью долгое время.</p>
						<div class="services__card-price">
							<p><span>200.000</span>/до 70 см</p>
							<p><span>250.000</span>/до 70 см</p>
						</div>
					</div>
				</div>

				<div class="services__card">
					<div class="services__card-img">
						<img src="@/assets/images/card-01.jpg" alt="">
					</div>
					<div class="services__card-content">
						<h3 class="services__card-title">Биочистка Изделий Из Нубука и Замши</h3>
						<p class="services__card-description">Устранение загрязнений и восстановление первоначальной яркости цвета позволит радоваться любимой вещью долгое время.</p>
						<div class="services__card-price">
							<p><span>200.000</span>/до 70 см</p>
							<p><span>250.000</span>/до 70 см</p>
						</div>
					</div>
				</div>

				<div class="services__card">
					<div class="services__card-img">
						<img src="@/assets/images/card-01.jpg" alt="">
					</div>
					<div class="services__card-content">
						<h3 class="services__card-title">Биочистка Изделий Из Нубука и Замши</h3>
						<p class="services__card-description">Устранение загрязнений и восстановление первоначальной яркости цвета позволит радоваться любимой вещью долгое время.</p>
						<div class="services__card-price">
							<p><span>200.000</span>/до 70 см</p>
							<p><span>250.000</span>/до 70 см</p>
						</div>
					</div>
				</div>

				<div class="services__card">
					<div class="services__card-img">
						<img src="@/assets/images/card-01.jpg" alt="">
					</div>
					<div class="services__card-content">
						<h3 class="services__card-title">Биочистка Изделий Из Нубука и Замши</h3>
						<p class="services__card-description">Устранение загрязнений и восстановление первоначальной яркости цвета позволит радоваться любимой вещью долгое время.</p>
						<div class="services__card-price">
							<p><span>200.000</span>/до 70 см</p>
							<p><span>250.000</span>/до 70 см</p>
						</div>
					</div>
				</div>

				<div class="services__card">
					<div class="services__card-img">
						<img src="@/assets/images/card-01.jpg" alt="">
					</div>
					<div class="services__card-content">
						<h3 class="services__card-title">Биочистка Изделий Из Нубука и Замши</h3>
						<p class="services__card-description">Устранение загрязнений и восстановление первоначальной яркости цвета позволит радоваться любимой вещью долгое время.</p>
						<div class="services__card-price">
							<p><span>200.000</span>/до 70 см</p>
							<p><span>250.000</span>/до 70 см</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.services {
	padding-top: 100px;

	&__tab {
		display: flex;
		flex-wrap: wrap;
		column-gap: 20px;
		row-gap: 20px;
		justify-content: space-around;
		align-items: center;
	}

	&__tab-item {
		font-size: 14px;
		padding: 17px 0;
		box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
		width: 455px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	&__cards {
		padding-top: 25px;
		display: grid;
		justify-items: center;
		grid-template-columns: repeat(3, 1fr);
		grid-gap: 25px;
		@media (max-width: 1140px) {
			grid-template-columns: repeat(2, 1fr);
		}
		@media (max-width: 768px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}

	&__card {
		max-width: 357px;
		box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.2);
		@media (max-width: 1140px) {
			max-width: 450px;
		}
		@media (max-width: 1140px) {
			max-width: 100%;
		}
	}

	&__card-content {
		padding: 15px 15px 35px 15px;
	}

	&__card-price {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
}
</style>