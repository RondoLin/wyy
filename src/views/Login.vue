
<template>
  <div class="login">
    <svg class="icon" aria-hidden="true" @click="$router.push('/')">
      <use xlink:href="#icon-xiangzuojiantou"></use>
    </svg>
    <div class="loginTop">欢迎登录</div>
    <div class="loginContent">
      <input
        type="text"
        name="email"
        class="email"
        v-model="email"
        placeholder="请输入邮箱："
      />
      <input
        type="password"
        name="passworld"
        class="passworld"
        v-model="password"
        placeholder="请输入密码："
      />
      <button class="btn" @click="Login1">邮箱登录</button>
      <button class="btn" @click="Login2">二维码登录</button>
      <div class="qrcode">
        <img :src="this.$store.state.qrimage" />
      </div>

      <!-- <button class="btn" @click="Login3">游客登录</button> -->
    </div>
  </div>
</template>
<script>
import { getLoginUser, getLoginStatus } from "@/api/home.js";

export default {
  data() {
    return {
      email: "",
      password: "",
      cookie: "",
      isLogin: false,
      qrCheckData: {},
    };
  },
  methods: {
    async Login1() {
      let res = await this.$store.dispatch("getLogin1", {
        email: this.email,
        password: this.password,
      });
      console.log(res);
      if (res.data.code === 200) {
        //如果返回的code等于200，说明登录成功，就跳转个人中心页面
        console.log("登录成功");
        this.$store.commit("updateIsLogin", true);
        this.$store.commit("updateqrCookies", res.data.cookie);
        let result = await getLoginUser(res.data.account.id);
        console.log(result);
        this.$store.commit("updateUser", result);
        this.$router.push("/infoUser");
      } else {
        alert("账号或者密码错误");
        this.password = "";
      }
    },
    async Login2() {
      let nowtime = Date.now();
      this.$store.commit("updateqrKey", nowtime);
      let res1 = await this.$store.dispatch(
        "getqrLogin1",
        this.$store.state.timestamp
      );
      console.log(res1);
      if (res1.data.code === 200) {
        this.$store.commit("updateqrKey", res1.data.data.unikey);
        let res2 = await this.$store.dispatch("getqrLogin2", {
          key: this.$store.state.key,
          qrimg: true,
        });
        // console.log(res2);
        if (res2.data.code === 200) {
          this.$store.commit("updateqrUrl", res2.data.data.qrurl);
          this.$store.commit("updateqrImg", res2.data.data.qrimg);
          this.qrCheck()
        }
      }
    },
    async qrCheck() {
      let nowtime2 = new Date().getTime();
      let res3 = await this.$store.dispatch("getqrLogin3", {
        key: this.$store.state.key,
        timestamp: nowtime2,
      });
      console.log(res3);
      this.qrCheckData = res3.data;
    
      this.cookie = res3.data.cookie;
      this.isLogin = true;
    },
    async getStatus() {
      let res4 = await getLoginStatus(this.cookie);
      console.log(res4);
      localStorage.setItem("isLogin", res4.data.data.account.status);
      let result = await getLoginUser(res4.data.data.account.id);
      this.$store.commit("updateUser", result);
    },
  
  },
    
    watch: {
      isLogin() {
        let timer = setInterval(async () => {
        this.qrCheck()
          let code = this.qrCheckData.code;
          if (code === 800) {
            // 二维码过期
            console.log("二维码已失效");
            clearInterval(timer);
          } else if (code === 801) {
            console.log("等待扫码中...");
          } else if (code === 802) {
            // 授权登录中
            console.log("授权登录中...");
          } else if (code === 803) {
            // 登录成功 会返回 cookie
            console.log("登录成功");
            this.$store.commit("updateIsLogin", true);
            this.$store.commit("updateqrCookies", this.cookie);
            this.$router.push("/infoUser");
            clearInterval(timer);
            this.getStatus();
          }
        }, 3000);
      },
    },
  // Login3() {
  //   this.$store.commit("updateIsLogin", true);
  //   this.$router.push("/infoUser");
  //   alert('游客登录成功！')
  // },
};
</script>
<style lang="less" scoped>
.login {
  position: relative;
  width: 100%;
  height: 15rem;
  padding: 0.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #9eded4;
  .icon {
    position: absolute;
    left: 0.2rem;
    fill: black;
  }
  .loginTop {
    margin-top: 1rem;
    font-size: 1rem;
    color: #c20c0c;
  }
  .loginContent {
    position: absolute;
    top: 2%;
    background: #e6818a;
    border-radius: 25%;
    position: relative;
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .email,
    .passworld {
      width: 5rem;
      height: 1rem;
      border: 0.02rem solid #999;
      border-radius: 25% 0;
    }
    .btn {
      width: 2rem;
      height: 0.6rem;
      background: #edbbbd;
    }
  }
  .qrcode {
    position: absolute;
    top: 110%;
  }
}
</style>
