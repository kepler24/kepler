<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>你好</swiper-slide>
    <swiper-slide>我是高奇</swiper-slide>
    <swiper-slide>一个web前端开发工程师</swiper-slide>
    <swiper-slide>喜欢敲代码打篮球</swiper-slide>
    <swiper-slide>最爱的是我的小星星</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
  export default {
     components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
    name: 'home',
    data() {
      return {
        swiperOptions: {
          direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 30,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    created() {

    },
    methods:{
    }

    
  }
</script>
<style scoped>
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.swiper-container {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>