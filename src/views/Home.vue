<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide class="wall1 ">
      <div class="wall1_content animated swing">
        <p>你好<br>
        欢迎来</p>
      </div>
    </swiper-slide>
    <swiper-slide class="wall2"><div class="wall1_content animated swing">
        <p>你好<br>
        欢迎来</p>
      </div></swiper-slide>
    <swiper-slide class="wall3">3</swiper-slide>
    <swiper-slide class="wall4">4</swiper-slide>
    <swiper-slide class="wall5">5</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  name: "home",
  data() {
    return {
      swiperOptions: {
        direction: "vertical",
        slidesPerView: 1,
        // spaceBetween: 30,
        mousewheel: {
          sensitivity : 3,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  created() {},
  methods: {}
};
</script>
<style scoped>
@media  screen and (min-width:1025px){
    .wall1_content{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
  width: 600px;
  height: 600px;
  background-color: rgba(255, 255, 255, 0.5);
 border-radius: 300px;
  box-shadow:5px 5px 20px #333333;
}
.wall1_content p{
  width: 300px;
    font-size: 50px;
  }

}
@media  screen and (max-width:1024px) {
  .wall1_content{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
  width: 300px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.5);
 border-radius: 150px;
  box-shadow:5px 5px 20px #333333;
}
.wall1_content p{
  width: 150px;
    font-size: 25px;
  }

}
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
  background-color: #999;
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
.wall1{
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 2;
  background: url("http://attach.bbs.miui.com/forum/201304/25/195151szk8umd8or8fmfa5.jpg") no-repeat fixed center
}
.wall2{
  background: url("http://attach.bbs.miui.com/forum/201404/01/141958ecd21euizj4iiiez.jpg") center;
}
.wall3{
  background: url("http://attach.bbs.miui.com/forum/201204/17/1539083wxpexg5b0fbvzpv.jpg") center;
}
.wall4{
  background: url("http://attach.bbs.miui.com/forum/201306/23/110328s72xxse7lfis9fnd.jpg") center;
}
.wall5{
  background: url("http://attach.bbs.miui.com/forum/201311/17/174124tp3sa6vvckc25oc8.jpg") center;
}
/* .wall1,.wall2 {
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 2;
} */
/* .wall1::before ,.wall2::before{
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  filter: blur(1px);
  margin: -20px;
  z-index: -1;
} */

 
</style>