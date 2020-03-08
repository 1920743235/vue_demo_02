<template>
  <div style='padding-bottom:50px'>
    <van-loading type="spinner" color="#1989fa" v-if="isend" vertical />
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-card :title="item.title" :thumb="item.img_url" v-for="item in list" :key="item.id" @click="goDetail(item.id)">
        <div slot="price">发表时间：{{ item.add_time | dateFormat }}</div>
        <div slot="num">点击：{{ item.click }}</div>
      </van-card>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      isLoading: false,
      isend: true,
      vertical: true
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      setTimeout(async () => {
        const { data: res } = await this.$Ajax.get('/api/getnewslist')
        // console.log(res)
        if (res.status !== 0) {
          return this.$message.error('请求数据失败')
        }
        this.list = res.message
        // console.log(this.list)
        this.isend = false
        if (this.isLoading) {
          this.isLoading = false
        }
      }, 500)
    },
    onRefresh() {
      this.getList()
    },
    goDetail(id) {
      this.$router.push('/news/detail/' + id)
    }
  }
}
</script>

<style lang="less" scoped>
.van-card {
  background-color: #fff;
  margin: 0 10px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  .van-card__thumb {
    width: 42px;
    height: 42px;
  }
  .van-card__content {
    min-height: 0px;
    .van-card__title {
      font-size: 14px;
      font-weight: 700;
      color: #000;
      height: 17px;
    }
    .van-card__bottom,
    .van-card__price {
      color: #226aff;
      line-height: 30px;
    }
  }
}
</style>
