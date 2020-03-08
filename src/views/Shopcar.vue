<template>
  <div>
    <div v-if="shopcar.length !== 0">
      <van-card
        v-for="(item) in shopcar"
        :key="item.id"
        :num="item.cou"
        :price="item.sell_price"
        :title="item.title"
        :thumb="item.thumb_path"
      >
        <div slot="footer">
          <van-stepper v-model="item.cou" @input="prices" />
        </div>
      </van-card>
      <van-submit-bar :price="Number(Num + '00')" button-text="提交订单" @submit="onSubmit" />
    </div>
    <van-button v-else type="info" to="/goods/list">逛一逛</van-button>
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapState } from 'vuex'
// import _ from 'lodash'
export default {
  data() {
    return {
      shopcar: [],
      value: {},
      Num: 0,
      keyId: [],
      pX: 0
    }
  },
  created() {
    this.getShopcar()
  },
  methods: {
    async getShopcar() {
      const key = window.localStorage.getItem('gwc')
      JSON.parse(key).forEach(item => {
        this.keyId.push(item.id)
      })
      const { data: res } = await this.$Ajax.get(
        `/api/goods/getshopcarlist/${this.keyId.join(',')}`
      )
      //   this.shopcar = res.message
      // const from = _.cloneDeep(this.shopcar)
      // console.log(from)
      res.message.forEach(item => {
        this.value[item.id] = 1
        const newShopcar = {
          cou: this.value[item.id],
          id: item.id,
          title: item.title,
          sell_price: item.sell_price,
          thumb_path: item.thumb_path
        }
        this.Num += item.cou * item.sell_price
        this.shopcar.push(newShopcar)
      })
    },
    onSubmit() {},
    prices() {
      this.Num = 0
      this.shopcar.forEach(item => {
        this.Num += item.cou * item.sell_price
      })
    }
  },
  computed: {}
}
</script>

<style scoped>
.van-button {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
