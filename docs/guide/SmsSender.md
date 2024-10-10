# 发送信息功能

## 组件结构

该组件用于发送短信，包含输入收件人号码和消息内容的表单，具有发送按钮和状态提示

## 模板部分

```Vue
<template>
  <div class="sms-form">
    <input v-model="phoneNumber" placeholder="收件人" class="input-field"/>
    <textarea v-model="message" placeholder="编辑内容" class="textarea-field"></textarea>
    <button @click="handleSendClick" class="send-button">发送信息</button>
    <p v-if="sendStatus === 'success'">发 送 成 功 !</p>
    <p v-if="sendStatus === 'error'">发 送 失 败 :< 请不要连续发送</p>
  </div>
</template>

```

## 脚本部分

```TypeScript
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useSmsSender } from '../composables/useSmsSender'; // 假设 useSmsSender 在这个路径下

export default defineComponent({
  setup() {
    const phoneNumber = ref('');
    const message = ref('');
    const { sendSms, sendStatus, buttonText, isButtonDisabled } = useSmsSender(5); // 5秒冷却时间

    const handleSendClick = () => {
      if (phoneNumber.value && message.value) {
        sendSms(phoneNumber.value, message.value);
      } else {
        alert('收件人和信息内容不能为空！');
      }
    };

    return {
      phoneNumber,
      message,
      sendStatus,
      buttonText,
      isButtonDisabled,
      handleSendClick,
    };
  },
});
</script>

```

### 关键点

1.  useSmsSender: 自定义组合式 API，用于处理短信发送逻辑。
    返回值：
    sendSms: 发送短信的函数

        sendStatus: 当前发送状态

        buttonText: 按钮文本

        isButtonDisabled: 控制按钮禁用状态。

## 使用说明

用户输入收件人和信息内容，点击“发送信息”按钮后，系统会发送短信，并显示相应的发送状态

## 效果图

![发送信息](https://my-bucket-wyj.oss-cn-shanghai.aliyuncs.com/images/%E5%8F%91%E9%80%81%E4%BF%A1%E6%81%AF.png "发送信息")
