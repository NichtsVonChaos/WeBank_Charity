<template>
  <div class="main-cnt">
    <div class="bg"></div>
    <div class="top-right">
      <div class="tr-btn-box" v-show="!isLogin">
        <div class="tr-btn" @click="loginVisible=true">机构登录</div>
        <div class="tr-btn" @click="registerVisible=true">机构注册</div>
      </div>
      <div class="tr-name" v-show="isLogin">{{more.name}}</div>
    </div>
    <div class="search-cnt">
      <div class="search-title">查询音乐版权信息</div>
      <div class="search-box">
        <el-input placeholder="输入音乐名称" v-model="musicName"></el-input>
        <el-input placeholder="输入作者" v-model="musicAuthor"></el-input>
        <el-button plain type="success" icon="el-icon-search" circle @click="clickSearch"></el-button>
      </div>
    </div>

    <div class="more-cnt">
      <div class="switch-box">
        <div :class="switchClass(1)" @click="switchItem(1)">版权信息</div>
        <div :class="switchClass(2)" @click="switchItem(2)">历史记录</div>
        <div :class="switchClass(3)" @click="switchItem(3)">机构信息</div>
      </div>
      <div class="cnts">
        <div v-if="isLogin">
          <div class="copyright-box" v-show="isShowBox(1)">
            <div class="--box">
              <div class="title">登记信息</div>
              <div class="line">
                <div class="item">
                  <span class="label">作品名称：</span>
                  <span class="value">{{music.name}}</span>
                </div>
                <div class="item">
                  <span class="label">登记时间：</span>
                  <span class="value">{{music.publish_time}}</span>
                </div>
                <div class="item">
                  <span class="label">录制时间：</span>
                  <span class="value">{{music.record_time}}</span>
                </div>
              </div>
            </div>
            <div class="--box">
              <div class="title">作者信息</div>
              <div class="item">
                <span class="label">作者：</span>
                <span class="value">{{music.author}}</span>
              </div>
            </div>
            <div class="--box">
              <div class="title">版权人信息</div>
              <div class="line">
                <div class="item">
                  <span class="label">姓名：</span>
                  <span class="value">{{music.owner}}</span>
                </div>
                <div class="item">
                  <span class="label">身份证号码：</span>
                  <span class="value">{{music.code}}</span>
                </div>
              </div>
              <div class="item">
                <span class="label">所在地：</span>
                <span class="value">{{music.address}}</span>
              </div>
              <div class="line">
                <div class="item">
                  <span class="label">联系电话：</span>
                  <span class="value">{{music.phone}}</span>
                </div>
                <div class="item">
                  <span class="label">电子邮箱：</span>
                  <span class="value">{{music.email}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="history-box" v-show="isShowBox(2)">暂无</div>
          <div class="info-box" v-show="isShowBox(3)">
            <div class="item">
              <span>机构名称：</span>
              <span>{{more.name}}</span>
            </div>
            <div class="item">
              <span>所在地：</span>
              <span>{{more.location}}</span>
            </div>
            <div class="item">
              <span>联系方式：</span>
              <span>{{more.phone}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- login dialog -->
    <el-dialog title="机构登录" :visible.sync="loginVisible" width="30%" center append-to-body>
      <div class="ld-value">
        <div class="label">私钥：</div>
        <el-input class="myinput" v-model="privateKey" placeholder="请输入私钥"></el-input>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="clickLogin">登 录</el-button>
      </div>
    </el-dialog>
    <!-- register dialog -->
    <el-dialog title="机构注册" :visible.sync="registerVisible" width="30%" center append-to-body>
      <div class="d-cnt">
        <div class="d-line">
          <div class="label">姓名：</div>
          <el-input class="value" v-model="register.name"></el-input>
        </div>
        <div class="d-line">
          <div class="label">所在地：</div>
          <el-input class="value" v-model="register.location"></el-input>
        </div>
        <div class="d-line">
          <div class="label">联系电话：</div>
          <el-input class="value" v-model="register.phone"></el-input>
        </div>
        <div class="d-line">
          <div class="label">电子邮箱：</div>
          <el-input class="value" v-model="register.email"></el-input>
        </div>
      </div>
      <div slot="footer">
        <el-button type="primary" @click="clickRegister">确定申请</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginVisible: false,
      registerVisible: false,
      active: 1,
      musicName: '',
      musicAuthor: '',
      showLogin: true,
      privateKey: '',
      music: {
        name: ' ',
        publish_time: ' ',
        record_time: ' ',
        author: ' ',
        owner: ' ',
        code: ' ',
        address: ' ',
        phone: ' ',
        email: ' '
      },
      register: {
        name: '',
        location: '',
        phone: '',
        email: '',
        privateKey: this.$store.state.privateKey
      },
      more: {
        name: ' ',
        location: ' ',
        phone: ' '
      }
    }
  },
  computed: {
    isLogin() {
      if (this.$store.state.isLogin && this.$store.state.userType === 'judge') {
        return true
      }
      return false
    }
  },
  methods: {
    switchItem(type) {
      if (this.active === type) return
      this.active = type
    },
    switchClass(type) {
      if (this.active === type) return 'switch-item switch-item-active'
      return 'switch-item'
    },
    isShowBox(item) {
      if (this.active === item) return true
      return false
    },
    clickSearch() {
      // to do
      if (!this.isLogin) {
        this.$message.error('请先登录')
        return
      }
      this.axios
        .post('/api/judgesearch', {
          musicname: this.musicName,
          singer: this.musicAuthor,
          privateKey: this.$store.state.privateKey
        })
        .then(e => {
          let res = e.data
          if (res.success === 0) {
            this.$message.error('无结果')
            return
          }
          let music = res.data.music
          let user = res.data.user
          this.music.name = music.name
          this.music.author = music.singer
          this.music.owner = user.name
          this.music.code = user.id
          this.music.address = user.location
          this.music.phone = user.phone
          this.music.email = user.email
        })
    },
    clickLogin() {
      // to do
      this.axios
        .post('/api/login', { privateKey: this.privateKey })
        .then(res => {
          res = res.data
          if (res.success === 0) {
            this.$message.error('私钥错误')
          } else {
            let user = res.data
            this.$store.commit('initSetState', {
              privateKey: this.privateKey,
              userType: 'judge',
              isLogin: true
            })
            this.$store.commit('setUserType', user.kind)
            this.$store.commit('setUser', user)
            this.more.name = user.name
            this.more.location = user.location
            this.more.phone = user.phone
            this.$message.success('登录成功')
          }
        })
        .catch(e => {
          this.$message.error('私钥错误')
        })
      this.loginVisible = false
    },
    clickRegister() {
      // to do
      this.axios.post('/api/judgeapply', this.register).then(e => {
        let res = e.data
        if (res.success === 1) {
          this.$message.success('认证成功')
        } else {
          this.$message.error('认证失败')
        }
      })
      this.registerVisible = false
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../assets/css/default';

.main-cnt {
  .bg {
    position: fixed;
    top: 0px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(128, 64, 255, 0.2);
    z-index: -1;
  }

  .top-right {
    position: absolute;
    top: 80px;
    right: 36px;

    .tr-name {
      font-size: 1.25rem;
      color: #303133;
    }

    .tr-btn {
      width: 120px;
      line-height: 36px;
      text-align: center;
      background-color: #fff;
      margin-top: 10px;
      border-radius: 8px;
      cursor: pointer;
      border: 1px solid #b7b7b7;
      noselect();

      &:hover {
        background-color: #f5f5f5;
        color: _color_default;
        border: 1px solid _color_default;
      }
    }
  }

  .search-cnt {
    width: 680px;
    margin: 50px auto;

    .search-title {
      font-size: 1.5rem;
      color: _color_default;
      margin-bottom: 15px;
    }

    .search-box {
      display: flex;
      justify-content: space-between;

      .el-input {
        width: 300px;
      }
    }
  }
}

.more-cnt {
  width: 760px;
  padding: 30px 10px 20px 30px;
  margin: 50px auto;
  background-color: #fefefe;
  border-radius: 8px;
  min-height: 360px;

  .switch-box {
    width: 360px;
    display: flex;
    border: 1px solid #c7c7cc;
    line-height: 45px;
    margin-bottom: 20px;
    border-radius: 8px;

    .switch-item {
      cursor: pointer;
      noselect();
      width: 120px;
      text-align: center;
      border-right: 1px solid #c7c7cc;

      &:first-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }

      &:last-child {
        border-right: 0px solid #c7c7cc;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
      }

      &:hover {
        background-color: #dedede;
        color: _color_default;
      }
    }

    .switch-item-active {
      background-color: #eee;
      color: _color_default;
    }
  }
}

.copyright-box {
  .--box {
    margin-bottom: 20px;

    .title {
      color: #909399;
      width: 120px;
      border-bottom: 1px solid #909399;
    }

    .line {
      display: flex;
    }

    .item {
      width: 250px;
      margin-top: 8px;
    }
  }
}

.info-box {
  margin-top: 80px;
  margin-left: 30px;

  .item {
    margin-top: 30px;
  }
}

.ld-value {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .label {
    font-size: 1.125rem;
  }

  .myinput {
    width: 350px;
  }
}

.d-cnt {
  width: 450px;
  margin: 0 auto;

  .d-line {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    .label {
      width: 90px;
    }

    .value {
      width: 300px;
    }
  }
}
</style>
