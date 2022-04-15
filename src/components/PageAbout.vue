<template>
	<section class="about">
		<div class="section-text">
			<h2 class="section-text__title">О нас</h2>
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
			<div class="about__content">
				<div class="about__image">
					<img src="@/assets/images/about-image.jpg" alt="" />
				</div>
				<div class="about__desc">
					<h2 class="about__title">Предоставляем Качественную Биочистку <span>Верхней Одежды</span></h2>
					<p class="about__subtitle">Бережная ручная чистка дорогих вам вещей с помощью экологически чистых бальзамов.</p>
					<ul class="about__list">
						<li class="about__item">Индивидуальный подход к каждому изделию</li>
						<li class="about__item">Использование только экологически чистых растительных бальзамов</li>
						<li class="about__item">Побочные эффекты исключены</li>
						<li class="about__item">Бесплатная услуга “ТЕСТ”</li>
						<li class="about__item">100% гарантия на сохранение цвета, размера и фурнитуры</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.about {

	&__content {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		align-items: center;
		gap: 2rem;
		@media (max-width: 769px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}

	&__image {
		@media (max-width: 768px) {
			margin-bottom: 25px;
		}
		img {
			height: 100%;
			object-fit: cover;
		}
	}

	&__desc {
	}

	&__title {
		font-weight: 700;
		max-width: 530px;
		font-size: clamp(1.5rem, 0.6563rem + 1.7vw, 2rem);
		line-height: calc(44 / 32 * 100%);
		margin-bottom: 20px;

		span {
			color:#7D71B1;
		}
	}

	&__subtitle {
		font-weight: 600;
		font-size: clamp(1rem, 0.6563rem + 1vw, 1rem);
		max-width: 578px;
		line-height: calc(27 / 20 * 100%);
		margin-bottom: 30px;

	}

	&__item {
		display: flex;
		align-items: center;
		column-gap: 15px;
		font-size: 14px;
		line-height: calc(19 / 14 * 100%);
		position: relative;
		padding-left: 40px;
		height: 30px;
		@media (max-width: 426px) {
			font-size: 12px;
			height: 35px;
		}

		&::before {
			content: '';
			position: absolute;
			width: 30px;
			height: 30px;
			background-image: url('@/assets/images/check-circle.png');
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
		}

		&:not(:last-child) {
			margin-bottom: 5px;
		}
	}
}
</style>