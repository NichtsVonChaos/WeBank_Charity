<template>
  <div class="order-cnt">
    <el-button plain type="success" @click="clickShuaxin">刷新</el-button>
    <div class="order-box" v-for="(order,idx) in orderList" :key="idx">
      <div class="head">
        <div class="item item1">
          <span class="label">项目名称：</span>
          <span class="value">{{order.name}}</span>
        </div>
        <div class="item item3">
          <span class="label">已筹金额：</span>
          <span class="value">{{order.yichou}}</span>
        </div>
        <div class="item item3">
          <span class="label">目标金额：</span>
          <span class="value">{{order.price}}</span>
        </div>
      </div>
      <div class="main">
        <div class="line">
          <div class="item item1">
            <span class="label">受益人：</span>
            <span class="value">{{order.author}}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="order-box" v-for="(order,idx) in orderList" :key="idx">
      <div class="head">
        <div class="item item1">
          <span class="label">项目名称：</span>
          <span class="value">{{order.name}}</span>
        </div>
        <div class="item item3">
          <span class="label">已筹金额：</span>
          <span class="value">{{order.order_time}}</span>
        </div>
                <div class="item item3">
          <span class="label">目标金额：</span>
          <span class="value">{{target}}</span>
        </div>
      </div>
      <div class="main">
        <div class="line">
          <div class="item item1">
            <span class="label">受益人：</span>
            <span class="value">{{order.author}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="order-box" v-for="(order,idx) in orderList" :key="idx">
      <div class="head">
        <div class="item item1">
          <span class="label">项目名称：</span>
          <span class="value">{{order.name}}</span>
        </div>
        <div class="item item3">
          <span class="label">已筹金额：</span>
          <span class="value">{{order.order_time}}</span>
        </div>
                <div class="item item3">
          <span class="label">目标金额：</span>
          <span class="value">{{target}}</span>
        </div>
      </div>
      <div class="main">
        <div class="line">
          <div class="item item1">
            <span class="label">受益人：</span>
            <span class="value">{{order.author}}</span>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
var testList = [
  {
    id: '',
    author: '',
    is_auth: true,
    yichou: '',
    price: '',
    name: ''
  },
  {
    id: '',
    author: '',
    is_auth: true,
    yichou: '',
    price: '',
    name: ''
  },
  {
    id: '',
    author: '',
    is_auth: true,
    yichou: '',
    price: '',
    name: ''
  }
]

export default {
  data() {
    return {
      orderList: testList
    }
  },
  // beforeMount() {
  //   this.axios
  //     .post('/api/', { privateKey: this.$store.state.privateKey })
  //     .then(e => {
  //       let res = e.data
  //       if (res.success === 0) {
  //         this.$message.error(res.message)
  //         return
  //       }
  //       let arr = res.data
  //       this.orderList = []
  //       for (let i of arr) {
  //         let music = i.music.split('#')
  //         let info = i.info.split('#')
  //         let tmp = {
  //           start: i.start,
  //           to: i.to,
  //           name: music[0],
  //           author: music[1],
  //           record_time: music[2],
  //           order_time: music[3],
  //           owner: info[0],
  //           phone: info[1],
  //           use: info[2],
  //           location: info[3],
  //           period: info[4],
  //           desc: info[5],
  //           price: info[6],
  //           is_auth: i.valid,
  //           auth_str: i.valid ? '是' : '否'
  //         }
  //         this.orderList.push(tmp)
  //       }
  //     })
  // },
  methods: {
    clickShuaxin() {
      this.axios.get('/api/getUserPartItemsId?privateKey=' + this.$store.state.privateKey).then(d => {
        console.log(d.data)
        var daichuli = d.data.substring(1, d.data.length - 1)
        daichuli = daichuli.replace(',', 'a')
        daichuli = daichuli.replace(',', 'a')
        daichuli = daichuli.replace(',', 'a')
        daichuli = daichuli.replace(',', 'a')
        daichuli = daichuli.replace(',', 'a')
        daichuli = daichuli.replace(',', 'a')
        daichuli = daichuli.replace(',', 'a')
        var chuli1 = daichuli.split('a')
        this.orderList[0].id = chuli1[0]
        console.log(this.orderList[0].id)
        // 找到私钥 然后去找其他信息
        this.axios.get('/api/get_item_publisher_name?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.orderList[0].id).then(e => {
        // this.music[0].author = d.data //找到作者
          this.orderList[0].author = e.data
          console.log(this.orderList[0].author)
        })
        this.axios.get('/api/get_item_item_name?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.orderList[0].id).then(e => {
          // this.music[0].name = d.data    //项目名
          this.orderList[0].name = e.data
        })
        this.axios.get('/api/get_item_target_amount?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.orderList[0].id).then(e => {
        // this.music[0].price = d.data 目标金额
          this.orderList[0].price = e.data
        })
        this.axios.get('/api/get_item_donation_amount?privateKey=1&item_id=' + this.orderList[0].id).then(e => {
        //  this.music[0].yichou = d.data
          this.orderList[0].yichou = e.data
        })
        this.orderList[1].id = chuli1[2]
        this.axios.get('/api/get_item_publisher_name?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.orderList[1].id).then(e => {
        // this.music[0].author = d.data //找到作者
          this.orderList[1].author = e.data
          console.log(this.orderList[1].author)
        })
        this.axios.get('/api/get_item_item_name?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.orderList[1].id).then(e => {
          // this.music[0].name = d.data    //项目名
          this.orderList[1].name = e.data
        })
        this.axios.get('/api/get_item_target_amount?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.orderList[1].id).then(e => {
        // this.music[0].price = d.data 目标金额
          this.orderList[1].price = e.data
        })
        this.axios.get('/api/get_item_donation_amount?privateKey=1&item_id=' + this.orderList[1].id).then(e => {
        //  this.music[0].yichou = d.data
          this.orderList[1].yichou = e.data
        })

        this.orderList[2].id = chuli1[4]
        this.axios.get('/api/get_item_publisher_name?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.orderList[2].id).then(e => {
        // this.music[0].author = d.data //找到作者
          this.orderList[2].author = e.data
          console.log(this.orderList[2].author)
        })
        this.axios.get('/api/get_item_item_name?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.orderList[2].id).then(e => {
          // this.music[0].name = d.data    //项目名
          this.orderList[2].name = e.data
        })
        this.axios.get('/api/get_item_target_amount?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.orderList[2].id).then(e => {
        // this.music[0].price = d.data 目标金额
          this.orderList[2].price = e.data
        })
        this.axios.get('/api/get_item_donation_amount?privateKey=1&item_id=' + this.orderList[2].id).then(e => {
        //  this.music[0].yichou = d.data
          this.orderList[2].yichou = e.data
        })
        // this.axios.get('/api/get_item_publisher_name?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.testList[1].id).then(d => {
        // // this.music[0].author = d.data //找到作者
        // })
        // this.axios.get('/api/get_item_item_name?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.testList[1].id).then(d => {
        //   // this.music[0].name = d.data    //项目名
        // })
        // this.axios.get('/api/get_item_target_amount?privateKey=1&item_id=' + this.testList[1].id).then(d => {
        // // this.music[0].price = d.data 目标金额
        // })
        // this.axios.get('/api/get_item_donation_amount?privateKey=1&item_id=' + this.testList[1].id).then(d => {
        // //  this.music[0].yichou = d.data
        // })

        // this.axios.get('/api/get_item_publisher_name?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.testList[2].id).then(d => {
        // // this.music[0].author = d.data //找到作者
        // })
        // this.axios.get('/api/get_item_item_name?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.testList[2].id).then(d => {
        //   // this.music[0].name = d.data    //项目名
        // })
        // this.axios.get('/api/get_item_target_amount?privateKey=1&item_id=' + this.testList[2].id).then(d => {
        // // this.music[0].price = d.data 目标金额
        // })
        // this.axios.get('/api/get_item_donation_amount?privateKey=1&item_id=' + this.testList[2].id).then(d => {
        // //  this.music[0].yichou = d.data
        // })
      }

      )
    }

  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/default';

.order-box {
  width: 800px;
  margin: 60px auto;
  border: 1px solid #e9e9e9;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  .head, .line {
    display: flex;
    justify-content: space-between;
  }

  .head {
    padding: 25px 20px 20px 20px;
    border-bottom: 1px solid #dedede;
  }

  .main {
    padding: 10px 20px 20px 20px;
  }

  .line {
    line-height: 40px;
    margin-top: 10px;
  }

  .item {
    .label {
      color: #a0a0a0;
    }

    .value {
      color: #303133;
    }
  }

  .item1 {
    width: 300px;
  }

  .item2 {
    width: 240px;
  }

  .item3 {
    width: 220px;
  }

  .certify {
    cursor: pointer;
    width: 150px;
    border: 1px solid _color_default;
    color: _color_default;
    text-align: center;
    border-radius: 10px;
    noselect();

    &:hover {
      background-color: _color_default;
      color: #fff;
    }
  }

  .certify-disable {
    cursor: not-allowed;
    width: 150px;
    border: 1px solid #d0d0d0;
    color: #d0d0d0;
    text-align: center;
    border-radius: 10px;
    noselect();
  }
}
</style>
