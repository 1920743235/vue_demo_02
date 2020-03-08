<template>
  <div id="home">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in lobolist" :key="index">
        <img v-lazy="image.img" />
      </van-swipe-item>
    </van-swipe>
    <!-- 主题按钮 -->
    <van-grid :column-num="3" :border="false">
      <van-grid-item to="news/News">
        <img src="../assets/syimg/menu1.png" alt />
        <span>新闻咨询</span>
      </van-grid-item>
      <van-grid-item to="photo/list">
        <img src="../assets/syimg/menu2.png" alt />
        <span>图片分享</span>
      </van-grid-item>
      <van-grid-item to="goods/list">
        <img src="../assets/syimg/menu3.png" alt />
        <span>商品购买</span>
      </van-grid-item>
      <van-grid-item to="msage">
        <img src="../assets/syimg/menu4.png" alt />
        <span>留言反馈</span>
      </van-grid-item>
      <van-grid-item to="videos">
        <img src="../assets/syimg/menu5.png" alt />
        <span>视频专区</span>
      </van-grid-item>
      <van-grid-item to="contactus">
        <img src="../assets/syimg/menu6.png" alt />
        <span>联系我们</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      lobolist: []
    }
  },
  created() {
    this.getlobolist()
  },
  methods: {
    async getlobolist() {
      const { data: res } = await this.$Ajax.get('/api/getlunbo')
      // console.log(res)
      if (res.status !== 0) return this.$notify('轮播图获取失败!')
      this.lobolist = res.message
    }
  }
}
</script>

<style lang="less" scoped>
.van-swipe-item img {
  width: 100%;
  height: 200px;
  object-fit: cover !important;
}
.van-grid-item img {
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
}
.van-grid-item span {
  font-size: 12px;
}
</style>
