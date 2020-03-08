<template>
<<<<<<< HEAD
  <div>商品详情</div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>

<style lang="less" scoped>
=======
  <div>
  <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" name="viewport" />
  <van-swipe :autoplay="3000" indicator-color="white" class="lunbo">
  <van-swipe-item v-for="(item, index) in goodpic" :key="index"><img :src='item.src'></van-swipe-item>
</van-swipe>
<div v-for="(item, index) in goodDetails" :key="index.id">
  <div class="main">
    <span class="title">{{item.title}}</span>
    <p class="money"><span class="right">市场价: ￥{{item.market_price}}</span> 销售价<em>￥{{item.sell_price}}</em></p>
    <div class="count">
      <span class="number">购买数量</span>
    <van-stepper v-model="value" />
      <div class="btns">
        <button class="van-button van-button--info van-button--normal">
          <span class="van-button__text">立即购买</span>
        </button>
        <button @click="newId({id: item.id})" class="van-button van-button--danger van-button--normal">
          <span class="van-button__text">加入购物车</span>
        </button>
      </div>
      </div>
    </div>
    <div class="goodParams">
      <div class="title">商品参数</div>
      <div class="body">
        <p>商品货号: {{item.goods_no}}</p>
        <p>库存情况: {{item.stock_quantity}}</p>
        <p>上架时间: {{item.add_time}}</p>
      </div>
      <div class="btns">
        <button  class="van-button van-button--info van-button--large van-button--plain">
          <span  class="van-button__text">图文介绍</span>
        </button>
        <button class="van-button van-button--danger van-button--large van-button--plain">
          <span class="van-button__text">商品评论</span>
        </button>
      </div>
        </div>
        </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      // 商品详情数据
      goodDetails: [],
      // 加入购物车的商品数量
      value: 1,
      // 轮播图图片
      goodpic: [],
      uid:this.$route.params.id
    }
  },
  created(){
    this.getGoodPic()
    this.getGoodsdetails()
  },
  // mounted: function() {
  //   console.log(this.uid)
  // },
  methods: {
    ...mapMutations(['newInfo']),
    // 获取商品详情信息
    async getGoodsdetails() {
      const { data: res } = await this.$Ajax.get('/api/goods/getinfo/' + this.uid)
      // console.log(this.$route.params.id)
      if (res.status !== 0) {
        return this.$message.error('获取商品详情信息失败')
      }
      this.goodDetails = res.message
      // console.log(res.message)
    },
    // 获取轮播图图片
    async getGoodPic() {
      const { data: res } = await this.$Ajax.get('/api/getthumimages/' + this.uid)
      // console.log(res)
      if (res.status !== 0) {
        return this.$message.error('获取轮播图图片失败')
      }
      this.goodpic = res.message
    },
    newId(id) {
      this.newInfo(id)
    }
  }
}
</script>

<style scoped>
.lunbo {
  width: 99%;
  height: 232px;
  margin: 10px auto;
  border: 1px solid gray
}
img {
    width:300px;
    height:200px;
    display:block;
    margin:15px auto
}
.main {
  width: 99%;
  height: 212px;
  margin: auto;
  border: 1px solid gray
}
.title {
  display: block;
  margin: 10px;
  border-bottom: 1px solid #ccc
}
.money {
  font-size:14px;
  width: 323px;
  height: 40px;
  margin: 7px auto;
  color:#8F8F94
}
.right {
  margin-right: 10px
}
em {
  font-size:18px;
  font-style: normal;
  font-weight: 700;
  color:#FF0000
}
.count {
  font-size:14px;
  width: 323px;
  height: 52px;
  margin: 5px auto;
  color:#8F8F94;
  line-height: 30px
}
.number {
  float: left;
  margin-right: 10px
}
.van-button {
  height: 40px;
  font-size:14px;
  line-height: 14px;
  margin-right: 7px;
  margin-top:10px
}
.goodParams {
  width: 99%;
  height: 305px;
  border: 1px solid gray;
  margin: 10px auto
}
.body {
  color:#8F8F94;
  font-size:14px;
  margin:20px 20px
}
>>>>>>> dev
</style>
