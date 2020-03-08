<template>
  <div>
    <h4 class="h-1">{{ value.title }}</h4>
    <p>
      <span class="time">{{ value.add_time | dateFormat }}</span>
      <span class="click">点击：{{ value.click }}</span>
    </p>
    <hr />
    <ul>
      <li v-for="(item, i) in mageList" :key="i">
        <img :src="item.src" alt="" @click="looking(item.src)" :showIndex="false" />
      </li>
    </ul>
    <div>
      <span v-html="value.content"></span>
    </div>
    <com/>
  </div>
</template>

<script>
import { ImagePreview } from 'vant'
import com from '../Comment'
export default {
  data() {
    return {
      value: {},
      mageList: [],
      imgArr: [],
      ImagePreview: '',
      id: 0
    }
  },
  created() {
    this.getTitleList()
    this.getMageList()
  },
  methods: {
    async getTitleList() {
      const { data: res } = await this.$Ajax.get('/api/getimageInfo/' + this.$route.params.id)
      this.value = res.message[0]
    },
    async getMageList() {
      const { data: res } = await this.$Ajax.get('/api/getthumimages/' + this.$route.params.id)
      this.mageList = res.message
      this.mageList.forEach(item => {
        this.imgArr.push(item.src)
      })
    },
    looking(img, id) {
      this.ImagePreview = ImagePreview(this.imgArr)
    }
  },
  components: {
    com
  }
}
</script>

<style lang="less" scoped>
.h-1 {
  text-align: center;
  color: #26a2ff;
  font-size: 15px;
}
p {
  display: block;
  overflow: hidden;
  .time {
    float: left;
    font-size: 13px;
    color: #8f8f94;
  }
  .click {
    float: right;
    font-size: 13px;
    color: #8f8f94;
  }
}
ul {
  list-style: none;
  margin: 10px 0;
  padding: 0 5px;
  overflow: hidden;
  li {
    float: left;
    width: 33.3333%;
    padding: 5px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    img {
      width: 100%;
      -webkit-box-shadow: 1px 0 8px 1px rgba(0, 0, 0, 0.3);
      box-shadow: 1px 0 8px 1px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
