<template>
  <div class="info-cnt">
    <!-- <div v-if="calType('company')">
      <div class="info-line">
        <div class="label">名称</div>
        <div class="value">{{name}}</div>
      </div>
      <div class="info-line">
        <div class="label">企业编码</div>
        <div class="value">{{code}}</div>
      </div>
      <div class="info-line">
        <div class="label">所在地</div>
        <div class="value">{{address}}</div>
      </div>
      <div class="info-line">
        <div class="label">联系电话</div>
        <div class="value">{{phone}}</div>
      </div>
      <div class="info-line">
        <div class="label">电子邮箱</div>
        <div class="value">{{email}}</div>
      </div>
    </div> -->
    <!-- <div v-else-if="calType('musician')">
      <div class="info-line">
        <div class="label">姓名</div>
        <div class="value">{{name}}</div>
      </div>
      <div class="info-line">
        <div class="label">身份证号码</div>
        <div class="value">{{code}}</div>
      </div>
      <div class="info-line">
        <div class="label">所在地</div>
        <div class="value">{{address}}</div>
      </div>
      <div class="info-line">
        <div class="label">联系电话</div>
        <div class="value">{{phone}}</div>
      </div>
      <div class="info-line">
        <div class="label">电子邮箱</div>
        <div class="value">{{email}}</div>
      </div>
    </div> -->
    <!-- <div v-else> -->
      <div class="info-line">
        <div class="label">姓名</div>
        <div class="value">{{name}}</div>
      </div>
      <div class="info-line">
        <div class="label">联系电话</div>
        <div class="value">{{phone}}</div>
      </div>
      <div class="info-line">
        <div class="label">剩余余额</div>
        <div class="value">{{money}}</div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'info-cnt',
  data() {
    return {
      name: '请刷新',
      code: '请刷新',
      address: '请刷新',
      phone: '请刷新',
      email: '请刷新',
      money: '请刷新'
    }
  },
  methods: {
    calType(type) {
      if (this.$store.state.userType === type) return true
      return false
    }
  },
  beforeMount() {
    this.name = this.$store.state.name
    this.phone = this.$store.state.phone
    this.money = this.$store.state.balance
  }
}
</script>

<style lang="stylus" scoped>
_border_color = #ddd;
_border_color_light = #e9e9e9;

.info-cnt {
  border: 1px solid _border_color;
  width: 600px;
  padding: 30px 15px;
  margin: 100px auto;
  border-radius: 8px;

  .info-line {
    display: flex;
    justify-content: space-between;
    font-size: 1.125rem;
    border-bottom: 1px solid _border_color_light;
    line-height: 60px;
    padding: 0 10px;

    .label {
      color: #606166;
      font-size: 1rem;
    }

    .value {
      color: #303133;
      width: 500px;
      text-align: right;
      word-wrap: break-word;
    }

    &:first-child {
      border-top: 1px solid _border_color_light;
    }
  }
}
</style>
