<template>
  <div>
    <a-form layout="horizontal" :form="form">
      <a-form-item
        label="Payment Account"
        :labelCol="formItemLayout.labelCol"
        :wrapperCol="formItemLayout.wrapperCol"
      >
        <a-input
          v-decorator="[
            'payAccount',
            {
              initialValue: step.payAccount,
              rules: [{ required: true, message: 'Please fill pay account.' }]
            }
          ]"
          placeholder="Please fill pay accoun t"
        ></a-input>
      </a-form-item>

      <a-form-item
        label="Receiver Account"
        :labelCol="formItemLayout.labelCol"
        :wrapperCol="formItemLayout.wrapperCol"
      >
        <ReceiverAccount
          v-decorator="[
            'receiveAccount',
            {
              initialValue: step.receiveAccount,
              rules: [
                {
                  required: true,
                  message: 'Please fill receiver account.',
                  validator: (rule, value, callback) => {
                    if (value && value.number) {
                      callback();
                    } else {
                      callback(false);
                    }
                  }
                }
              ]
            }
          ]"
          placeholder="Please fill receiver account"
        ></ReceiverAccount>
      </a-form-item>

      <a-form-item>
        <a-button type="primary" @click="handleSubmit">Next Step</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import ReceiverAccount from "@/components/ReceiverAccount";

export default {
  components: { ReceiverAccount },
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
      const { form, $router, $store } = this;
      form.validateFields((err, values) => {
        if (!err) {
          $store.commit({
            type: "form/saveStepFormData",
            payload: values
          });
          $router.push("/form/step-form/confirm");
        }
      });
    }
  }
};
</script>

<style></style>
