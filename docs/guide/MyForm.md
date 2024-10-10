## 表单验证

该组件实现了一个简单的登录表单，包括用户名和密码输入框，支持输入验证

## 模板部分

```Vue
<template>
  <div class="login-container">
    <form @submit.prevent="handleSubmit" class="login-form">
      <h2>登录界面</h2>
      <div class="form-group">
        <label for="username">用户名:</label>
        <input
          id="username"
          v-model="fields.username"
          @blur="validateField('username')"
          type="text"
          placeholder="输入您的用户名"
        />
        <span v-if="errors.username" class="error">{{ errors.username }}</span>
      </div>
      <div class="form-group">
        <label for="password">密 码 :</label>
        <input
          id="password"
          v-model="fields.password"
          @blur="validateField('password')"
          type="password"
          placeholder="输入您的密码"
        />
        <span v-if="errors.password" class="error">{{ errors.password }}</span>
      </div>
      <button type="submit">登录</button>
    </form>
  </div>
</template>

```

错误提示：在输入框下方显示相应的错误信息

## 脚本部分

```TypeScript
<script lang="ts">
import { defineComponent } from 'vue';
import { useFormValidation } from '../composables/useFormValidation';

export default defineComponent({
  setup() {
    const { fields, errors, setField, setRules, validateAll } = useFormValidation();

    // 设置验证规则
    setRules('username', [
      { validate: (value) => !!value, message: '符合要求' },
      { validate: (value) => value.length >= 3, message: '最少三个字符' },
    ]);
    setRules('password', [
      { validate: (value) => !!value, message: '符合要求' },
      { validate: (value) => value.length >= 6, message: '最少六个字符' },
    ]);

    const handleSubmit = () => {
      if (validateAll()) {
        console.log('Login successful:', fields.value);
        // 处理登录逻辑
      }
    };

    return {
      fields,
      errors,
      setField,
      validateField: (name: string) => setField(name, fields.value[name]),
      handleSubmit,
    };
  },
});
</script>

```

handleSubmit: 提交表单时调用，检查所有字段的验证状态

## 使用说明

用户输入用户名和密码，点击“登录”按钮后，表单会验证输入内容，并在验证成功后处理登录逻辑

## 表单验证

![表单验证](https://my-bucket-wyj.oss-cn-shanghai.aliyuncs.com/images/%E8%A1%A8%E5%8D%95%E9%AA%8C%E8%AF%81.png "表单验证")
