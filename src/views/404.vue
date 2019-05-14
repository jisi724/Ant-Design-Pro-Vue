<template>
  <div>
    <img :src="antd" alt="ant design logo" style="width: 100px;" />
    <div style="text-align: center;">
      <IconFont type="icon-icon-test" style="font-size: 100px;" />
      Page Not Found
    </div>
  </div>
</template>

<script>
// can also use the SVG as component, see vue svg loader
import antd from "@/assets/antd.svg";
export default {
  data() {
    return {
      antd
    };
  }
};
</script>

<style></style>
