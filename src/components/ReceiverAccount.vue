<template>
  <a-input-group compact>
    <a-select v-model="type" style="width: 130px;" @change="handleTypeChange">
      <a-select-option value="Visa">Visa</a-select-option>
      <a-select-option value="Paypel">Paypel</a-select-option>
    </a-select>
    <a-input
      style="width: calc(100% - 130px);"
      v-model="number"
      @change="handleNumberChange"
    />
  </a-input-group>
</template>

<script>
export default {
  props: {
    value: {
      type: Object
    }
  },
  data() {
    const { type, number } = this.value || {};
    return {
      type: type || "Visa",
      number: number || " "
    };
  },
  watch: {
    value(val) {
      Object.assign(this, val);
    }
  },
  methods: {
    handleTypeChange(val) {
      this.$emit("change", { ...this.value, type: val });
    },
    handleNumberChange(e) {
      this.$emit("change", { ...this.value, number: e.target.value });
    }
  }
};
</script>

<style></style>
