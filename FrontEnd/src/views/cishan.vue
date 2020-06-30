<template>
  <div class="main-cnt" :style="backgroundDiv">
    <div class="music-btn" @click="dialogVisible=true">发起你的慈善项目</div>
    <el-dialog title="慈善项目申请" :visible.sync="dialogVisible" center width="40%" append-to-body>
      <div class="d-cnt">
        <div class="d-line">
          <div class="label">姓名：</div>
          <el-input class="value" v-model="name"></el-input>
        </div>
        <div class="d-line">
          <div class="label">慈善项目名:</div>
          <el-input class="value" v-model="xiangmuname"></el-input>
        </div>
        <div class="d-line">
          <div class="label">受益方:</div>
          <el-input class="value" v-model="shouyiren"></el-input>
        </div>
        <div class="d-line">
          <div class="label">联系电话：</div>
          <el-input class="value" v-model="phone"></el-input>
        </div>
        <div class="d-line">
          <div class="label">详细信息</div>
          <el-input class="value" v-model="xiangxi"></el-input>
        </div>
          <div class="d-line">
          <div class="label">需求捐款</div>
          <el-input class="value" v-model="money"></el-input>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="clickApply">确定申请</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      backgroundDiv: {
        backgroundImage: 'url(' + require('../assets/img/DSC02070.jpg') + ')'
      },
      name: '',
      xiangmuname: '',
      shouyiren: '',
      phone: '',
      xiangxi: '',
      money: '',
      privateKey: this.$store.state.privateKey
    }
  },
  methods: {
    clickApply() {
      this.axios.get('/api/publish?privateKey=' + this.privateKey + '&item_name=' + this.xiangmuname + '&beneficiary_name=' + this.shouyiren + '&target_amount=' + this.money + '&description=' + this.xiangxi).then(res => {
        this.$message.success('发起成功')
      })
      this.dialogVisible = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/css/default';

.main-cnt {
  position: fixed;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  background-size: 100% 100%;
}

.music-btn {
  background-color: #fff;
  width: 200px;
  line-height: 50px;
  border-radius: 10px;
  margin: 80px auto;
  text-align: center;
  font-size: 1.25rem;
  noselect();
  cursor: pointer;
  box-shadow: 0 2px 12px 0 rgba(120, 120, 120, 0.5);

  &:hover {
    background-color: #eee;
    color: _color_default;
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
      width: 360px;
    }
  }
}
</style>
