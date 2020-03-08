<template>
  <div id="app">
    <!-- 头部标题 -->
    <!-- <van-nav-bar
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      title="黑马程序员.vant"
    />-->
    <div class="header_box">
      <span @click="$router.go(-1)" v-if="$route.path!='/home'" class="goback">
        <van-icon style="margin-right:3px;" name="arrow-left" />返回
      </span>
      黑马程序员.vant
    </div>
    <router-view />
    <!-- 底部标签 -->
    <van-tabbar router v-if="getURL !== '/shopcar'" v-model="active">
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/member" icon="user-o">会员</van-tabbar-item>
      <van-tabbar-item to="/shopcar" icon="shopping-cart-o" :info="Info.length">购物车</van-tabbar-item>
      <van-tabbar-item to="/search" icon="search">搜寻</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'app',
  data() {
    return {
      active: 0,
      infoNum: 0
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapState(['Info']),
    getURL() {
      return this.$route.path
    }
  }
}
</script>
<style scoped>
#app{
  padding: 40px 0 50px 0;
  width:100%;
  height:100%;
  background: #fff;
  box-sizing: border-box;
}
.header_box {
  width:100%;
  height:40px;
  background: #1989fa;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-size: 14px;
  position: fixed;
  top:0;
  left:0;
  z-index:1;
}
.goback {
  position: fixed;
  top:0px;
  display: flex;
  align-items: center;
  left:15px;
}
.v-enter{
  transform: translateX(100%);
}
.v-enter-active{
  transition: transform 0.3s ease;
}
.v-enter-to{
  transform: translateX(0);
}

.v-leave{
  opacity: 1;
}
.v-leave-active{
  transition: opacity 0.3s;
}
.v-leave-to{
  opacity: 0.4;
}
</style>
