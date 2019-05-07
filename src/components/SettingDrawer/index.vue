<template>
  <div>
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
    >
      <template v-slot:handle>
        <div class="handle" @click="visible = !visible">
          <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
        </div>
      </template>
      <div>
        <h2>Theme Setting</h2>
        <a-radio-group
          @change="e => handleSettingChange('navTheme', e.target.value)"
          :value="$route.query.navTheme || 'dark'"
        >
          <a-radio value="dark">Black</a-radio>
          <a-radio value="light">White</a-radio>
        </a-radio-group>

        <h2>Nav Mode</h2>
        <a-radio-group
          @change="e => handleSettingChange('navLayout', e.target.value)"
          :value="$route.query.navLayout || 'left'"
        >
          <a-radio value="left">Left</a-radio>
          <a-radio value="top">Top</a-radio>
        </a-radio-group>
      </div>
    </a-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  methods: {
    onClose() {
      this.visible = false;
    },
    handleSettingChange(type, val) {
      this.$router.push({ query: { ...this.$route.query, [type]: val } });
    }
  }
};
</script>

<style lang="less" scoped>
.handle {
  position: absolute;
  top: 50%;
  right: 100%;
  width: 48px;
  height: 48px;
  background: #1890ff;
  color: #fff;
  font-size: 20px;
  text-align: center;
  line-height: 48px;
  border-radius: 3px 0 0 3px;
}
</style>
