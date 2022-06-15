<template>
  <header class="header">
    <nav
      class="container swiper swiper-container swiper-free-mode header__menu-wrapper"
    >
      <div class="swiper-wrapper header__menu">
        <div
          class="swiper-slide header__menu-elem"
          v-for="elem in menu"
          :key="elem"
        >
          {{ elem }}
        </div>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import Swiper, { FreeMode } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

Swiper.use([FreeMode]);
// import '../node_modules/swiper/swiper-bundle.min.css';

// import 'swiper/css';
// import 'swiper/css/free-mode';

// Swiper.use([Navigation, Pagination]);
// import 'swiper/css';
// import 'swiper/css/free-mode';

const mockHeaderMenu = [
  'скидки до 50%',
  'Лазерные нивелиры',
  'осциллографы',
  'бесконтактные термометры',
  'тахеометры',
  'лазерные уровни',
  'толщиномеры',
  'бесконтактные термометры',
  'Полевые контроллеры',
  'скидки до 50%',
  'Лазерные нивелиры',
  'осциллографы',
  'бесконтактные термометры',
  'тахеометры',
  'лазерные уровни',
  'толщиномеры',
  'бесконтактные термометры',
];

export default {
  name: 'HeaderMenu',
  data() {
    return {
      menu: mockHeaderMenu,
      swiperOptions: {
        // loop: true,
        lazy: true,
        freeMode: true,
        spaceBetween: 30,
        preloadImages: false,
        // autoplay: {
        //   delay: 6000,
        //   disableOnInteraction: false,
        // },
        slidesPerView: 5,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        // navigation: {
        //   nextEl: '.preview-slider-button--next',
        //   prevEl: '.preview-slider-button--prev',
        // },
        resizeObserver: true,
      },
    };
  },
  mounted() {
    // this.$nextTick(() => {
    new Swiper('.header__menu-wrapper', this.swiperOptions);
    // });
  },
};
</script>

<style scoped>
/* .swiper-container {
  width: 600px;
  height: 300px;
} */
</style>
