<template>
  <div id="app">
    <div v-if="loading">555555555</div>
    <span v-else>
      <div id="nav">
        <router-link to="/">首页</router-link>
        <router-link to="/pics">pic</router-link>
        <router-link to="/docs">doc</router-link>
      </div>
      <router-view />
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    let mulitImg = [
      require("./assets/cloud_one.png"),
      require("./assets/cloud_two.png"),
      require("./assets/cloud_three.png")
    ];
    let promiseAll = [];
    let img = [];
    let imgTotal = mulitImg.length;
    for (let i = 0; i < imgTotal; i++) {
      promiseAll[i] = new Promise((resolve, reject) => {
        img[i] = new Image();
        img[i].src = mulitImg[i];
        img[i].onload = function() {
          resolve(img[i]);
          reject()
        };
      });
    }
    Promise.all(promiseAll).then(img => {
      this.loading = false
      console.log(img)
    });
    //  let bgImg = new Image()
    // bgImg.src = require("./assets/cloud_one.png")
    // bgImg.onload = () => {
    //   console.log(123456)
    // }
  }
};
</script>
<style >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  text-decoration: none;
}
#nav {
  height: 50px;
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  top: 0;
  left: 0;
  font-size: 24px;
  z-index: 99;
}
#nav a {
  color: skyblue;
  display: inline-block;
  padding: 0 20px 0;
  height: 50px;
  background: white;
  opacity: 0.5;

  line-height: 50px;
}
#nav a:hover {
  color: skyblue;
  background-color: #fff;
  opacity: 1;
}
</style>
