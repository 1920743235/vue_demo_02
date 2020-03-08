<template>
  <div class="goodslist">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        :offset="50"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell @click="goDetail(item.id)" v-for="item in goodslist" :key="item.id">
          <van-image fit="cover" :src="item.img_url"></van-image>
          <p>{{ item.title }}</p>
          <div class="bottom_box">
            <div>
              <span>￥{{item.sell_price}}</span>
              <s>￥{{item.market_price}}</s>
            </div>
            <div>
              <span>热卖中</span>
              <span>剩{{item.stock_quantity}}件</span>
            </div>
          </div>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodslist: [],
      loading: false,
      finished: false,
      pageindex: 1,
      isLoading: false
    }
  },

  methods: {
    onLoad() {
      // 异步更新数据
      // console.log(123)
      this.pageindex++
      this.getList()
    },

    async getList(cb) {
      var { data: res } = await this.$Ajax.get('/api/getgoods?pageindex=' + this.pageindex)
      if (res.status === 1) {
        return (this.loading = true)
      }
      if (res.message < 10) {
        this.loading = false
        this.finished = true
        return
      }
      this.goodslist = [...this.goodslist, ...res.message]
      // console.log(res)
    },

    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.pageindex++
      }, 500)
    },

    goDetail(id) {
      this.$router.push({
        name:'detail',
        params: {
          id: id
        }
      })
    }
  },

  created() {
    this.getList()
  }
}
</script>

<style lang='less' scoped>
.van-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 5px 10px;
  .van-cell {
    width: 48%;
    border: 1px solid #ccc;
    margin: 10px 0px;
    padding: 0px;
    align-content: space-between;
    .van-cell__value--alone {
      // justify-content: center;
      text-align: center;
      .van-image {
        padding: 10px;
        min-height: 180px;
      }
    }
    img {
      min-height: 180px;
      height: 180px;
      margin: auto;
    }
    .van-cell__value {
      > p {
        font-size: 14px;
        color: #000;
        text-align: left;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
        padding: 4px 10px;
        height: 49px;
      }
    }
    .bottom_box {
      width: 100%;
      background: #eee;
      padding: 5px 0px;
      div:nth-child(1) {
        text-align: left;
        padding: 0px 10px;
        span:nth-child(1) {
          font-size: 16px;
          color: red;
          margin-right: 15px;
        }
      }
      div:nth-child(2) {
        display: flex;
        justify-content: space-between;
        padding: 0px 10px;
      }
    }
  }
}
</style>
