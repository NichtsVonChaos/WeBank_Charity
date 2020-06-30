<template>
  <div class="option-cnt" :style="backgroundDiv">
      <div class="login-item" @click="clickOption('user')">点击登入</div>
      <!-- <div class="login-item" @click="clickOption('musician')">音乐人</div>
      <div class="login-item" @click="clickOption('company')">企业</div> -->
    <!-- login dialog -->
    <el-dialog :title="dialogTitle" :visible.sync="loginVisible" width="30%" center append-to-body>
      <div class="ld-value">
        <div class="label">私钥：</div>
        <el-input class="myinput" v-model="pwd" placeholder="请输入私钥"></el-input>
      </div>
      <div class="ld-register" @click="switchToRegister">点此注册</div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="clickLogin">登 录</el-button>
      </div>
    </el-dialog>
    <!-- register dialog -->
    <el-dialog title="用户注册" :visible.sync="registerVisible" width="30%" center append-to-body>
      <div class="register-box">
        <div class="reg-line">
          <div class="label">姓名：</div>
          <el-input class="myinput" v-model="name" placeholder="请输入姓名"></el-input>
        </div>
        <div class="reg-line" style="margin-top:30px">
          <div class="label">电话号码：</div>
          <el-input class="myinput" v-model="phone" placeholder="请输入电话号码"></el-input>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="clickRegister">注 册</el-button>
      </div>
    </el-dialog>
    <!-- register dialog -->
    <el-dialog title="请记住你的私钥！" :visible.sync="showVisible" width="30%" center append-to-body>
      <div class="register-box">
        <!-- <div class="reg-line">
          <span class="label">地址：</span>
          <span>{{show_address}}</span>
        </div> -->
        <div class="reg-line" style="margin-top:30px">
          <div class="label">私钥：</div>
          <span>{{show_key}}</span>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="showVisible = false">确 定</el-button>
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
      showVisible: false,
      pwd: '',
      name: '',
      phone: '',
      type: 'user',
      backgroundDiv: {
        backgroundImage:
          'url(' + require('../../assets/img/DSC_0018.jpg') + ')'
      },
      show_address: '',
      show_key: ''
    }
  },
  computed: {
    dialogTitle() {
      return '用户登录'
    }
  },
  methods: {
    clickOption(item) {
      this.type = item
      this.loginVisible = true
    },
    switchToRegister() {
      // this.loginVisible = false
      // if (this.type === 'musician') {
      //   this.$router.push('/musician')
      // } else if (this.type === 'company') {
      //   this.$router.push('/company')
      // } else {
      this.registerVisible = true
      // }
    },
    clickLogin() {
      // to do
      this.loginVisible = false
      this.axios
        .get('/api/login?privateKey=' + this.pwd)
        .then(res => {
          res = res.data
          var name1 = ''
          if (res.success === 0) {
            this.$message.error('私钥错误')
          } else {
            this.axios.get('/api/getUserName?privateKey=' + this.pwd).then(
              ccc => {
                if (ccc.success === 1) {
                  this.$message.error('没有获取名字')
                } else {
                  name1 = ccc.data
                  this.$store.commit('setName', name1)
                }
              }).catch(e => {
              this.$message.error('服务器异常')
            })
            this.axios.get('/api/getUserPhone?privateKey=' + this.pwd).then(
              ccc => {
                if (ccc.success === 1) {
                  this.$message.error('没有获取名字')
                } else {
                  this.$store.commit('setPhone', ccc.data)
                }
              }).catch(e => {
              this.$message.error('服务器异常')
            })
            this.axios.get('/api/getUserBalance?privateKey=' + this.pwd).then(
              ccc => {
                if (ccc.success === 1) {
                  this.$message.error('没有获取名字')
                } else {
                  this.$store.commit('setBalance', ccc.data)
                }
              }).catch(e => {
              this.$message.error('服务器异常')
            })
            this.$store.commit('initSetState', {
              privateKey: this.pwd,
              userType: 'user',
              isLogin: true
            })
            // this.$store.commit('setUser', user)
            this.$router.push('/center/info')
            this.$message.success('登录成功')
            console.log(this.$store.privateKey)
          }
        })
        .catch(e => {
          this.$message.error('服务器异常')
        })
      // var user = ''
      // this.$store.commit('initSetState', {
      //   privateKey: this.pwd,
      //   userType: user.type,
      //   isLogin: true
      // })
      // this.$store.commit('setUser', user)
      // this.$router.push('/center/info')
      // this.$message.success('登录成功')
    },
    clickRegister() {
      // to do
      this.registerVisible = false
      this.axios
        .get('/api/gen_account?name=' + this.name + '&phone=' + this.phone)
        .then(res => {
          if (res.data.success === 0) {
            this.$message.error('注册失败')
          } else {
            this.$message.success('注册成功')
            // this.show_address = res.data.data[0]
            this.showVisible = true
            this.show_key = res.data
          }
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/default';

.option-cnt {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  margin: 0 auto;
  background-size: 100% 100%;
}

// .login-cnt {
//   width: 10000px;
//   margin: 200px auto;
//   display: flex;
//   justify-content: space-between;
// }

.login-item {
  width: 180px;
  line-height: 100px;
  text-align: center;
  font-size: 1.25rem;
  color: #303133;
  border: 1px solid #909399;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  noselect();
  height: 100px;
  margin:auto;
  position: relative;

  &:hover {
    border-color: _color_default;
    color: #aaaaaa;
    font-size: 1.5rem;
    background-color: _color_default_alpha;
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

.ld-register {
  cursor: pointer;
  margin-top: 20px;
  text-align: right;
  text-decoration: underline;

  &:hover {
    color: _color_default;
  }
}

.register-box {
  .reg-line {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .label {
      font-size: 1rem;
    }

    .myinput {
      width: 320px;
    }
  }
}
</style>
