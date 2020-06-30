<template>
  <div class="home" :style="backgroundDiv">
    <div class="slogan">公益链 献出您的爱心</div>
    <div class="search-box">
      <!-- <el-input placeholder="输入音乐名称" v-model="musicName"></el-input>
      <el-input placeholder="输入作者" v-model="musicAuthor"></el-input> -->
      <el-button plain type="success" @click="clickSearch">展示项目</el-button>
    </div>

    <div class="show-box" v-show="isShow">
      <div class="music">
        <div class="line">
          <div class="item">
            <span class="label">项目名称：</span>
            <span class="value">{{music[0].name}}</span>
          </div>
          <div class="item">
            <span class="label">发起者：</span>
            <span class="value">{{music[0].author}}</span>
          </div>
          <div class="apply-btn" @click="dialogVisible=true;id=0">查看详情</div>
        </div>
      </div>
    </div>
    <div class="show-box" v-show="isShow">
      <div class="music">
        <div class="line">
          <div class="item">
            <span class="label">项目名称：</span>
            <span class="value">{{music[1].name}}</span>
          </div>
          <div class="item">
            <span class="label">发起者：</span>
            <span class="value">{{music[1].author}}</span>
          </div>
          <div class="apply-btn" @click="dialogVisible=true;id=1">查看详情</div>
        </div>
      </div>
    </div>
        <div class="show-box" v-show="isShow">
      <div class="music">
        <div class="line">
          <div class="item">
            <span class="label">项目名称：</span>
            <span class="value">{{music[2].name}}</span>
          </div>
          <div class="item">
            <span class="label">发起者：</span>
            <span class="value">{{music[2].author}}</span>
          </div>
          <div class="apply-btn" @click="dialogVisible=true;id=2">查看详情</div>
        </div>
      </div>
    </div>
        <div class="show-box" v-show="isShow">
      <div class="music">
        <div class="line">
          <div class="item">
            <span class="label">项目名称：</span>
            <span class="value">{{music[3].name}}</span>
          </div>
          <div class="item">
            <span class="label">发起者：</span>
            <span class="value">{{music[3].author}}</span>
          </div>
          <div class="apply-btn" @click="dialogVisible=true;id=3">查看详情</div>
        </div>
      </div>
    </div>
        <div class="show-box" v-show="isShow">
      <div class="music">
        <div class="line">
          <div class="item">
            <span class="label">项目名称：</span>
            <span class="value">{{music[4].name}}</span>
          </div>
          <div class="item">
            <span class="label">发起者：</span>
            <span class="value">{{music[4].author}}</span>
          </div>
          <div class="apply-btn" @click="dialogVisible=true;id=4">查看详情</div>
        </div>
      </div>
    </div>
        <div class="show-box" v-show="isShow">
      <div class="music">
        <div class="line">
          <div class="item">
            <span class="label">项目名称：</span>
            <span class="value">{{music[5].name}}</span>
          </div>
          <div class="item">
            <span class="label">发起者：</span>
            <span class="value">{{music[5].author}}</span>
          </div>
          <div class="apply-btn" @click="dialogVisible=true;id=5">查看详情</div>
        </div>
      </div>
    </div>
    <div class="show-box" v-show="isShow">
      <div class="music">
        <div class="line">
          <div class="item">
            <span class="label">项目名称：</span>
            <span class="value">{{music[6].name}}</span>
          </div>
          <div class="item">
            <span class="label">发起者：</span>
            <span class="value">{{music[6].author}}</span>
          </div>
          <div class="apply-btn" @click="dialogVisible=true;id=6">查看详情</div>
        </div>
      </div>
    </div>
    <div class="show-box" v-show="isShow">
      <div class="music">
        <div class="line">
          <div class="item">
            <span class="label">项目名称：</span>
            <span class="value">{{music[7].name}}</span>
          </div>
          <div class="item">
            <span class="label">发起者：</span>
            <span class="value">{{music[7].author}}</span>
          </div>
          <div class="apply-btn" @click="dialogVisible=true;id=7">查看详情</div>
        </div>
      </div>
      <el-row justify=center>
        <el-button type="primary">上一页</el-button>
        <el-button type="primary">下一页</el-button>
      </el-row>
    </div>
    <el-dialog
      title="捐款项目详情"
      :visible.sync="dialogVisible"
      width="610px"
      center
      append-to-body
      top="20px"
    >
      <div class="dialog-cnt">
        <div class="box">
          <div class="title">公益项目信息</div>
          <div class="line">
            <div class="const-item">
              <span class="label">项目名称：</span>
              <span class="value">{{music[id].name}}</span>
            </div>
            <div class="const-item">
              <span class="label">发起者：</span>
              <span class="value">{{music[id].author}}</span>
            </div>
           <!-- <div class="const-item">
              <span class="label">受益者：</span>
              <span class="value">{{owner}}</span>
            </div> -->
          </div>
        </div>
        <div class="box">
            <div class="xinxiitem">
              <span class="label">项目详细描述：</span>
              <span class="value">{{music[id].xinxi}}</span>
            </div>
        </div>
        <div class="box">
            <div class="xinxiitem">
              <span class="label">目标金额：</span>
              <span class="value">{{ music[id].price }}</span>
            </div>
        </div>
        <div class="box">
            <div class="xinxiitem">
              <span class="label">已筹金额：</span>
              <span class="value">{{ music[id].yichou}}</span>
            </div>
        </div>
        <!-- <div class="box">
          <div class="title"></div>
          <div class="item">
            <span class="label">购买用途：</span>
            <el-input class="input-value" v-model="music.purpose"></el-input>
          </div>
          <div class="item">
            <span class="label">授权地域：</span>
            <el-input class="input-value" v-model="music.address"></el-input>
          </div>
          <div class="item">
            <span class="label">授权期限：</span>
            <el-input class="input-value" v-model="music.period"></el-input>
            <span>&ensp;月</span>
          </div>
          <div class="item">
            <span class="label">其他说明：</span>
            <el-input class="input-value" v-model="music.desc"></el-input>
          </div>
        </div> -->

        <div class="box">
          <div class="title">填写捐款人信息</div>
          <div class="line">
            <div class="item">
              <span class="label">姓&emsp;名：</span>
              <el-input class="input-value" v-model="name"></el-input>
            </div>
          </div>
        </div>

        <div class="box">
          <div class="title">捐款金额</div>
          <div class="price-line">
            <span>金&emsp;额：</span>
            <el-input class="input-value" v-model="price"></el-input>
          </div>
        </div>
        <div class="dialog-footer">
          <el-button type="primary" @click="clickApply">确定捐款</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  data() {
    return {
      dialogVisible: false,
      isShow: false,
      backgroundDiv: {
        backgroundImage: 'url(' + require('../assets/img/DSC_0018.jpg') + ')'
      },
      faqiren: '',
      xinxi: '',
      target: '',
      id: 0,
      price: '',
      name: '',
      shuzu: [],
      music: [{
        id: '1',
        bin: '',
        name: '',
        author: '',
        owner: 'XXX',
        alltime: '',
        phone: '', // 联系电话
        price: '', // 价格
        xinxi: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        yichou: 0
      },
      {
        id: '2',
        bin: '',
        name: '',
        author: '',
        owner: 'XXX',
        alltime: '',
        // purpose: '', // 购买用途
        // address: '', // 授权地域
        // period: '', // 授权期限
        // desc: '', // 其他说明
        // asker: '', // 授权人姓名
        phone: '', // 联系电话
        price: '', // 价格
        xinxi: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        yichou: 0
      },
      {
        id: '3',
        bin: '',
        name: '',
        author: '',
        owner: 'XXX',
        // alltime: '',
        // purpose: '', // 购买用途
        // address: '', // 授权地域
        // period: '', // 授权期限
        // desc: '', // 其他说明
        // asker: '', // 授权人姓名
        phone: '', // 联系电话
        price: '', // 价格
        xinxi: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        yichou: 0
      },
      {
        id: '4',
        bin: '',
        name: '',
        author: '',
        owner: 'XXX',
        alltime: '',
        purpose: '', // 购买用途
        address: '', // 授权地域
        period: '', // 授权期限
        desc: '', // 其他说明
        asker: '', // 授权人姓名
        phone: '', // 联系电话
        price: '', // 价格
        xinxi: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        yichou: 0
      },
      {
        id: '5',
        bin: '',
        name: '',
        author: '',
        owner: 'XXX',
        alltime: '',
        purpose: '', // 购买用途
        address: '', // 授权地域
        period: '', // 授权期限
        desc: '', // 其他说明
        asker: '', // 授权人姓名
        phone: '', // 联系电话
        price: '', // 价格
        xinxi: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        yichou: 0
      },
      {
        id: '6',
        bin: '',
        name: '',
        author: '',
        owner: 'XXX',
        alltime: '',
        purpose: '', // 购买用途
        address: '', // 授权地域
        period: '', // 授权期限
        desc: '', // 其他说明
        asker: '', // 授权人姓名
        phone: '', // 联系电话
        price: '', // 价格
        xinxi: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        yichou: 0
      },
      {
        id: '7',
        bin: '',
        name: '',
        author: '',
        owner: 'XXX',
        alltime: '',
        purpose: '', // 购买用途
        address: '', // 授权地域
        period: '', // 授权期限
        desc: '', // 其他说明
        asker: '', // 授权人姓名
        phone: '', // 联系电话
        price: '', // 价格
        xinxi: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        yichou: 0
      },
      {
        id: '8',
        bin: '',
        name: '',
        author: '',
        owner: 'XXX',
        alltime: '',
        purpose: '', // 购买用途
        address: '', // 授权地域
        period: '', // 授权期限
        desc: '', // 其他说明
        asker: '', // 授权人姓名
        phone: '', // 联系电话
        price: '', // 价格
        xinxi: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
        yichou: 0
      }]
    }
  },
  methods: {
    clickSearch() {
      // To do
      if (this.$store.state.isLogin) {
        // this.axios
        //   .post('/api/search', {
        //     privateKey: this.$store.state.privateKey,
        //     mName: this.musicName,
        //     singer: this.musicAuthor
        //   })
        //   .then(e => {
        //     let res = e.data
        //     let music = res.data
        //     console.log(music)
        //     if (res.success === 1) {
        //       this.isShow = true
        //       this.music.bin = music.bin
        //       this.music.name = music.mName
        //       this.music.author = music.singer
        //       this.music.owner = music.owner
        //       this.music.alltime = music.alltime
        //       console.log(music)
        //     } else {
        //       this.$message.info('无结果')
        //     }
        //   })
        this.axios.get('/api/getAllItemsId?privateKey=' + this.$store.state.privateKey).then(e => {
          // var data0 = e.data[0] + ''
          console.log(e.data)
          var daichuli = e.data.substring(1, e.data.length - 1)
          console.log(daichuli)
          daichuli = daichuli.replace(',', 'a')
          daichuli = daichuli.replace(',', 'a')
          daichuli = daichuli.replace(',', 'a')
          daichuli = daichuli.replace(',', 'a')
          daichuli = daichuli.replace(',', 'a')
          daichuli = daichuli.replace(',', 'a')
          daichuli = daichuli.replace(',', 'a')
          console.log(daichuli)
          var chuli1 = daichuli.split('a')
          console.log(chuli1)
          this.music[0].id = chuli1[0]
          this.axios.get('/api/get_item_publisher_name?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.music[0].id).then(d => {
            this.music[0].author = d.data
          })
          this.axios.get('/api/get_item_item_name?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.music[0].id).then(d => {
            this.music[0].name = d.data
          })
          this.axios.get('/api/get_item_target_amount?privateKey=1&item_id=' + this.music[0].id).then(d => {
            this.music[0].price = d.data
          })
          this.axios.get('/api/get_item_description?privateKey=1&item_id=' + this.music[0].id).then(d => {
            this.music[0].xinxi = d.data
          })
          this.axios.get('/api/get_item_donation_amount?privateKey=1&item_id=' + this.music[0].id).then(d => {
            this.music[0].yichou = d.data
          })
          this.music[1].id = chuli1[2]
          this.axios.get('/api/get_item_publisher_name?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.music[1].id).then(d => {
            this.music[1].author = d.data
          })
          this.axios.get('/api/get_item_item_name?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.music[1].id).then(d => {
            this.music[1].name = d.data
          })
          this.axios.get('/api/get_item_target_amount?privateKey=1&item_id=' + this.music[1].id).then(d => {
            this.music[1].price = d.data
          })
          this.axios.get('/api/get_item_description?privateKey=1&item_id=' + this.music[1].id).then(d => {
            this.music[1].xinxi = d.data
          })
          this.axios.get('/api/get_item_donation_amount?privateKey=1&item_id=' + this.music[1].id).then(d => {
            this.music[1].yichou = d.data
          })
          this.music[2].id = chuli1[4]
          this.axios.get('/api/get_item_publisher_name?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.music[2].id).then(d => {
            this.music[2].author = d.data
          })
          this.axios.get('/api/get_item_item_name?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.music[2].id).then(d => {
            this.music[2].name = d.data
          })
          this.axios.get('/api/get_item_target_amount?privateKey=1&item_id=' + this.music[2].id).then(d => {
            this.music[2].price = d.data
          })
          this.axios.get('/api/get_item_description?privateKey=1&item_id=' + this.music[2].id).then(d => {
            this.music[2].xinxi = d.data
          })
          this.axios.get('/api/get_item_donation_amount?privateKey=1&item_id=' + this.music[2].id).then(d => {
            this.music[2].yichou = d.data
          })
          this.music[3].id = chuli1[6]
          this.axios.get('/api/get_item_publisher_name?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.music[3].id).then(d => {
            this.music[3].author = d.data
          })
          this.axios.get('/api/get_item_item_name?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.music[3].id).then(d => {
            this.music[3].name = d.data
          })
          this.axios.get('/api/get_item_target_amount?privateKey=1&item_id=' + this.music[3].id).then(d => {
            this.music[3].price = d.data
          })
          this.axios.get('/api/get_item_description?privateKey=1&item_id=' + this.music[3].id).then(d => {
            this.music[3].xinxi = d.data
          })
          this.axios.get('/api/get_item_donation_amount?privateKey=1&item_id=' + this.music[3].id).then(d => {
            this.music[3].yichou = d.data
          })
          this.music[4].id = chuli1[8]
          this.axios.get('/api/get_item_publisher_name?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.music[4].id).then(d => {
            this.music[4].author = d.data
          })
          this.axios.get('/api/get_item_item_name?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.music[4].id).then(d => {
            this.music[4].name = d.data
          })
          this.axios.get('/api/get_item_target_amount?privateKey=1&item_id=' + this.music[3].id).then(d => {
            this.music[4].price = d.data
          })
          this.axios.get('/api/get_item_description?privateKey=1&item_id=' + this.music[3].id).then(d => {
            this.music[4].xinxi = d.data
          })
          this.axios.get('/api/get_item_donation_amount?privateKey=1&item_id=' + this.music[5].id).then(d => {
            this.music[4].yichou = d.data
          })
          this.music[5].id = chuli1[10]
          this.axios.get('/api/get_item_publisher_name?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.music[5].id).then(d => {
            this.music[5].author = d.data
          })
          this.axios.get('/api/get_item_item_name?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.music[5].id).then(d => {
            this.music[5].name = d.data
          })
          this.axios.get('/api/get_item_target_amount?privateKey=1&item_id=' + this.music[5].id).then(d => {
            this.music[5].price = d.data
          })
          this.axios.get('/api/get_item_description?privateKey=1&item_id=' + this.music[5].id).then(d => {
            this.music[5].xinxi = d.data
          })
          this.axios.get('/api/get_item_donation_amount?privateKey=1&item_id=' + this.music[5].id).then(d => {
            this.music[5].yichou = d.data
          })
          this.music[6].id = chuli1[12]
          this.axios.get('/api/get_item_publisher_name?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.music[6].id).then(d => {
            this.music[6].author = d.data
          })
          this.axios.get('/api/get_item_item_name?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.music[6].id).then(d => {
            this.music[6].name = d.data
          })
          this.axios.get('/api/get_item_target_amount?privateKey=1&item_id=' + this.music[6].id).then(d => {
            this.music[6].price = d.data
          })
          this.axios.get('/api/get_item_description?privateKey=1&item_id=' + this.music[6].id).then(d => {
            this.music[6].xinxi = d.data
          })
          this.axios.get('/api/get_item_donation_amount?privateKey=1&item_id=' + this.music[6].id).then(d => {
            this.music[6].yichou = d.data
          })
          this.music[7].id = chuli1[14]
          this.axios.get('/api/get_item_publisher_name?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.music[7].id).then(d => {
            this.music[7].author = d.data
          })
          this.axios.get('/api/get_item_item_name?privateKey=' + this.$store.state.privateKey + '&item_id=' + this.music[7].id).then(d => {
            this.music[7].name = d.data
          })
          this.axios.get('/api/get_item_target_amount?privateKey=1&item_id=' + this.music[7].id).then(d => {
            this.music[7].price = d.data
          })
          this.axios.get('/api/get_item_description?privateKey=1&item_id=' + this.music[7].id).then(d => {
            this.music[7].xinxi = d.data
          })
          this.axios.get('/api/get_item_donation_amount?privateKey=1&item_id=' + this.music[8].id).then(d => {
            this.music[8].yichou = d.data
          })
          // this.axios.get('/api/get_item_publisher_name?item_id=' + this.shuzu[1]).then(e => {
          //   this.music[1].name = e.data
          // })
        })
        this.isShow = true
      } else {
        this.$message.error('请先登录')
      }
    },
    clickApply() {
      // To do
      // let arr = [
      //   this.music.asker,
      //   this.music.phone,
      //   this.music.purpose,
      //   this.music.address,
      //   this.music.period,
      //   this.music.desc,
      //   this.music.price
      // ]
      // let req = {
      //   music:
      //     this.music.name + '#' + this.music.author + '#' + this.music.alltime,
      //   to: this.music.owner,
      //   info: arr.join('#'),
      //   privateKey: this.$store.state.privateKey
      // }
      var privateKey1 = this.$store.state.privateKey
      // this.axios.get('/api/get_item_target_amount?privateKey=1&item_id=' + this.music[this.id].id).then(e => {
      //   this.target = e.data
      // })
      // this.axios.get('/api/get_item_description?privateKey=1&item_id=' + this.music[this.id].id).then(e => {
      //   this.xinxi = e.data
      // })
      console.log(this.music[this.id].id)
      this.axios.get('/api/donate?privateKey=' + privateKey1 + '&id=' + this.music[this.id].id + '&amount=' + this.price).then(e => {
        this.$message.success('捐赠成功!')
      })
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/default';

.home {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-size: 100% 100%;
}

.slogan {
  margin-top: 0px;
  font-size: 1.85rem;
  color: #E2E6EC;
  text-align: center;
}

.search-box {
  margin: 0px auto;
  color: #E2E6EC;
  text-align: center;
  justify-content: space-between;
}

.show-box {
  width: 60%;
  min-width: 800px;
  margin: 0px auto;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 1px;
  padding: 20px 30px 30px 40px;
  box-shadow: 0 2px 0px 0 rgba(0, 0, 0, 0.1);

  .title {
    font-size: 1.25rem;
    width: 30%;
    color: #606266;
    border-bottom: 1px solid #606266;
    margin-bottom: 20px;
  }

  .music {
    .line {
      display: flex;
      justify-content: space-between;
    }

    .item {
      width: 225px;
      font-size: 1rem;
      color: #303133;
    }

    .item2 {
      margin-top: 20px;
      font-size: 1rem;
      color: #303133;
    }
  }

  .apply-btn {
    width: 150px;
    line-height: 36px;
    text-align: center;
    margin: 25 px 0 auto;
    background-color: #F53C3C;
    color: #dedede;
    border-radius: 10px;
    cursor: pointer;
    noselect();

    &:hover {
      background-color: #dedede;
      color: #F53C3C;
    }
  }
  .el-row {
    text-align: center;
  }
}

.dialog-cnt {
  // margin-left: 15px;
  .box {
    .title {
      width: 120px;
      border-bottom: 1px solid #d0d0d0;
      color: #d0d0d0;
      margin-bottom: 8px;
    }

    .line {
      display: flex;
      justify-content: space-between;
    }

    .const-item {
      width: 180px;
      margin-right: 10px;
      margin-bottom: 10px;
    }

    .xinxiitem {
            width: 440px;
      margin-right: 10px;
      margin-bottom: 10px;
    }
    .item {
      // width: 180px;
      margin-right: 10px;
      margin-bottom: 10px;
    }

    .input-value {
      width: 180px;
    }

    .payway-box {
      display: flex;
      justify-content: center;

      .payway {
        cursor: pointer;
        width: 120px;
        line-height: 40px;
        text-align: center;
        border: 1px solid #d0d0d0;
        margin: 20px 10px 0;
        border-radius: 5px;
      }
    }
  }

  .dialog-footer {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
