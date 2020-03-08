<template>
  <div>
    <!-- 头部标签栏 -->
    <van-tabs v-model="active" @change="tabChange(active)">
      <van-tab v-for="item in tabList" :title="item.title" :name="item.id" :key="item.id">
        <!-- {{ item.title }} -->
        <!-- 图片列表 -->
        <ul>
          <li v-for="item in imageList" class="image" @click="toDetail(item.id)" :key="item.id">
            <div>
              <img v-lazy="item.img_url" :src="item.img_url" />
            </div>
            <div :class="active !== 0 ? 'bottom-none' : 'bottom'">
              <p>{{ item.title }}</p>
              <p>{{ item.zhaiyao }}</p>
            </div>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      tabList: [],
      // 图片列表
      imageList: [],
      // 图片路径
      // picList: [],
      cateId: 0
    }
  },
  created() {
    this.getTabList()
  },
  methods: {
    async getTabList() {
      const { data: res } = await this.$Ajax.get('/api/getimgcategory')
      // console.log(res)
      res.message.unshift({ title: '全部', id: 0 })
      this.tabList = res.message
      // console.log(this.tabList)
      this.getPicList()
    },
    tabChange(id) {
      // console.log(id)
      this.cateId = id
      this.getPicList()
      this.cateId = 0
    },
    async getPicList() {
      const { data: res } = await this.$Ajax.get(`/api/getimages/${this.cateId}`)
      // console.log(res)
      // console.log(res.message)
      // res.message.forEach(item => {
      //   this.picList.push(item.img_url)
      // })
      // console.log(this.picList)
      this.imageList = res.message
    },
    toDetail(id) {
      this.$router.push(`/photo/info/${id}`)
    }
  }
}
</script>

<style lang="less" scoped>
.image {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  margin: 10px;
}
.image img {
  width: 100%;
  height: 100%;
}
.bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
  background: rgba(0, 0, 0, 0.3);
}
.bottom-none {
  display: none;
}
p {
  font-size: 12px;
  color: #fff;
  margin-top: 5px;
  padding: 0 5px;
  text-align: left;
}
.van-tabs {
  margin-bottom: 60px;
}
</style>
