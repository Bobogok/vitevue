<template>
  <main>
    <header class="header">
      <nav
        class="container swiper swiper-container swiper-free-mode header__menu-wrapper"
      >
        <Transition name="fadeControls">
          <button ref="prevButton" class="preview-slider-button--prev">
            Prev
          </button>
        </Transition>
        <div class="swiper-wrapper header__menu">
          <div
            class="swiper-slide header__menu-elem"
            v-for="elem in menu"
            :key="elem"
          >
            {{ elem }}
          </div>
        </div>
        <button class="preview-slider-button--next">Next</button>
      </nav>
    </header>
    <button @click="showAttr">showAttr</button>
  </main>
</template>

<script lang="ts">
import Swiper, { FreeMode, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import '../node_modules/swiper/swiper-bundle.min.css';

Swiper.use([FreeMode, Navigation]);
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
        navigation: {
          nextEl: '.preview-slider-button--next',
          prevEl: '.preview-slider-button--prev',
        },
        resizeObserver: true,
      },
      prevButton: false,
    };
  },
  mounted() {
    // this.$nextTick(() => {
    new Swiper('.header__menu-wrapper', this.swiperOptions);
    // });
  },
  methods: {
    showAttr() {
      this.prevButton = this.$refs.prevButton!.disabled as boolean;
    },
  },
  watch: {
    prevButton() {
      console.log(this.prevButton);
    },
  },
};
</script>

<style scoped>
.swiper-button-disabled {
  opacity: 0;
}

.fadeControls-enter-active,
.fadeControls-leave-active {
  transition: opacity 0.5s ease;
}

.fadeControls-enter-from,
.fadeControls-leave-to {
  opacity: 1;
}
</style>
