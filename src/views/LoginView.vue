<script lang="ts" setup>
import { ref } from 'vue'
import type { FormInstance } from 'ant-design-vue'
import type { Rule } from 'ant-design-vue/es/form'
import {
  Input as AInput,
  Form as AForm,
  FormItem as AFormItem,
  Button as AButton,
  Row as ARow,
  Col as ACol,
  InputPassword as AInputPassword
} from 'ant-design-vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { validateUsername, validatePassword } from '@/utils/validate'

const loginRules: Record<'username' | 'password' | 'code', Rule[]> = {
  username: [
    {
      required: true,
      validator: validateUsername,
      trigger: 'change'
    }
  ],
  password: [
    {
      required: true,
      validator: validatePassword,
      trigger: 'change'
    }
  ],
  code: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    }
  ]
}

const loginFormRef = ref<FormInstance>()
const resetForm = () => {
  loginFormRef.value?.resetFields()
}

const loginForm = ref({
  username: '',
  password: '',
  code: ''
})

const login = () => {
  loginFormRef.value?.validate().then(() => {
    console.log(loginForm.value)
    resetForm()
  })
}
</script>

<template>
  <div class="login">
    <div class="login_left">
      <div class="login_left_head">
        <div class="login_left_title">博客后台管理系统</div>
        <div class="login_left_desc">
          时间吞噬一切，记忆将之重组还原。那些旧日的好时光，让一切往事都值得回忆，也让未来的一切都值得期待。
        </div>
      </div>
      <img src="@/assets/imgs/login-logo.png" alt="" class="login_left_logo" />
      <img src="@/assets/shuibo.svg" alt="" class="login_left_wave" />
    </div>
    <div class="login_right">
      <div class="login_right_wrap">
        <div class="login_right_title">账号登录</div>
        <a-form ref="loginFormRef" :model="loginForm" :rules="loginRules" label-width="0px">
          <a-form-item name="username">
            <a-input v-model="loginForm.username" placeholder="请输入用户名">
              <template #prefix>
                <UserOutlined class="site-form-item-icon" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item name="password">
            <a-input-password v-model:value="loginForm.password" placeholder="请输入密码">
              <template #prefix>
                <LockOutlined class="site-form-item-icon" />
              </template>
            </a-input-password>
          </a-form-item>
          <a-form-item>
            <a-row>
              <a-col :span="16">
                <a-form-item name="code">
                  <a-input v-model="loginForm.code" placeholder="请输入验证码"></a-input>
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <img src="" alt="" class="code" />
              </a-col>
            </a-row>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" block @click="login">登录</a-button>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  min-width: 1200px;
  height: 100vh;

  .login_left {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60%;
    height: 100vh;
    background-color: #d3efff;

    .login_left_head {
      position: absolute;
      top: 40px;
      left: 60px;
      color: #26a59a;
    }

    .login_left_logo {
      width: 60%;
    }

    .login_left_wave {
      position: absolute;
      top: 0;
      right: -100px;
    }
  }

  .login_right {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin-left: 100px;
    background-color: #fff;

    .login_right_wrap {
      box-sizing: border-box;
      width: 400px;
      height: 400px;
      padding: 20px 40px;
      border: 1px solid #79bbff;
      border-radius: 4px;
    }
  }
}

.login_left_title {
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: 600;
}

.login_right_title {
  margin: 20px 0 40px 0;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
}

.code {
  height: 32px;
}

:deep(.ant-btn-primary) {
  background-color: #1677ff;
}
</style>
