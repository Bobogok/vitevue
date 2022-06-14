<template>
  <div>
    <!-- <Hello
      title="Название"
      :style="{ 'background-color': '#' + color }"
      @some-shit="generateNewColor"
    />
    <div>
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">{{ checked }}</label>
    </div>
    <div>
      <input
        type="checkbox"
        v-model="toggle"
        true-value="да"
        false-value="нет"
      />
    </div>
    <div>
      <Input v-model="searchText" />
    </div>
    <div>
      <button v-on:click="show = !show">Переключить</button>
      <transition name="text">
        <p v-if="show">привет</p>
      </transition>
    </div>
    <div>
      <input type="radio" id="home" :value="home" v-model="method" />
      <label for="home">Home</label>
      <input type="radio" id="business" :value="business" v-model="method" />
      <label for="business">Business</label>
    </div> -->
    <div class="popup" v-if="side">
      <div class="popup__wrapper" :class="popupSide"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Hello from '../components/Hello.vue';
import Input from '../components/Input.vue';

export default {
  data() {
    return {
      question: '',
      answer: 'Пока вы не зададите вопрос, я не могу ответить!',
      color: '',
      checked: false,
      toggle: 'Нет',
      searchText: 'adaddad',
      show: true,
      method: 'Home Address',
      home: 'Home Address',
      business: 'Business Address',
      side: '',
    };
  },
  components: { Hello, Input },
  mounted() {
    document.body.addEventListener('click', (e) => {
      const body = document.querySelector('body') as HTMLBodyElement;
      if (body?.offsetWidth / 2 > e.clientX) {
        this.side = 'left';
      } else {
        this.side = 'right';
      }
    });
    // this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  beforeDestroy() {
    document.body.removeEventListener('click', (e) => {
      const body = document.querySelector('body') as HTMLBodyElement;
      if (body?.offsetWidth / 2 > e.clientX) {
        this.side = 'left';
      } else {
        this.side = 'right';
      }
    });
  },
  watch: {
    // эта функция запускается при любом изменении вопроса
    question: function (newQuestion, oldQuestion) {
      console.log(newQuestion, oldQuestion);
      this.answer = 'Ожидаю, когда вы закончите печатать...';
    },
    toggle() {
      console.log(this.toggle);
    },
    method() {
      console.log(this.method);
    },
    side() {
      console.log(this.side);
    },
  },
  computed: {
    popupSide() {
      if (this.side === '') return;

      if (this.side === 'left') {
        return 'popup__wrapper--leftSide';
      } else {
        return 'popup__wrapper--rightSide';
      }
    },
  },
  methods: {
    generateNewColor($event: any) {
      this.color = $event;
    },
    bar() {
      return this.color;
    },
  },
};
</script>

<style lang="scss" scoped>
.popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &__wrapper {
    position: relative;
    padding: 24px;
    width: 302px;
    height: 132px;
    background: #ffffff;
    box-shadow: 1px 5px 22px 1px rgba(94, 111, 122, 0.1);

    &--rightSide {
      border-radius: 16px 0px 16px 16px;
    }

    &--leftSide {
      border-radius: 0px 16px 16px 16px;
    }
  }
}

.button {
  background-color: green;
}

/* анимация текста */
.text-enter-active,
.text-leave-active {
  transition: opacity 0.5s;
}
.text-enter, .text-leave-to /* .text-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
