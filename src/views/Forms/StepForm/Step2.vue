<template>
  <div>
    <a-form layout="horizontal" :form="form">
      <a-form-item
        label="Payment Account"
        :labelCol="formItemLayout.labelCol"
        :wrapperCol="formItemLayout.wrapperCol"
      >
        {{ step.payAccount }}
      </a-form-item>

      <a-form-item
        label="Payment Passcode"
        :labelCol="formItemLayout.labelCol"
        :wrapperCol="formItemLayout.wrapperCol"
      >
        <a-input
          v-decorator="[
            'payCode',
            {
              initialValue: '',
              rules: [{ required: true, message: 'Please input the password.' }]
            }
          ]"
          type="password"
          placeholder="Please input valid  password to pay."
        ></a-input>
      </a-form-item>

      <a-form-item>
        <a-button type="primary" @click="handleSubmit">Submit</a-button>
        <a-button style="margin-left: 20px;" @click="onPrev">
          Previous Step
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  data() {
    this.form = this.$form.createForm(this);
    return {
      formItemLayout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      }
    };
  },
  computed: {
    step() {
      return this.$store.state.form.step;
    }
  },
  methods: {
    handleSubmit() {
      const { form, $store, step } = this;
      form.validateFields((err, values) => {
        if (!err) {
          $store.dispatch({
            type: "form/submitStepForm",
            payload: { ...step, ...values }
          });
        }
      });
    },
    onPrev() {
      this.$router.push("/form/step-form/info");
    }
  }
};
</script>

<style></style>
