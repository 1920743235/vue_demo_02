<template>
  <div>
    <div>
      <div v-for="item in list" :key="item.id" class="article">
        <h4>{{ item.title }}</h4>
        <span class="newsTime">{{ item.add_time | dateFormat }}</span>
        <span class="goods">点赞:{{ item.click }}</span>
        <div v-html="item.content" class="content"></div>
      </div>
    </div>
    <div>
      <coms/>
    </div>
  </div>
</template>
<script>
import coms from '../Comment'
export default {
  data() {
    return {
      list: [],
      id: 0
    }
  },
  created() {
    this.getDetailId()
  },
  methods: {
    // 获取所有菜单
    async getDetailId() {
      const { data: res } = await this.$Ajax.get(
        '/api/getnew/' + this.$route.params.id
      )
      this.list = res.message
      // console.log(this.list)
    }
  },
  components: {
    coms
  }
}
</script>
<style lang="less" scoped>
.article {
  width: 94%;
  padding: 0 10px;
  font-size: 12px;
  h4 {
    text-align: center;
    color: #1989fa;
    font-size: 14px;
  }
  .newsTime {
    float: left;
    color: #1989fa;
  }
  .goods {
    float: right;
    color: #1989fa;
  }
  .content {
    padding-top: 5px;
    clear: both;
    border-top: 1.5px #ccc solid;
  }
}
</style>
