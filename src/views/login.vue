<template>
  <div class="login">
    <div class="login-box">
      <div class="user">
        <img src="../assets/imgs/2.webp" alt="">
      </div>
      <div class="txt">
        <b>请输入用户名：</b>
        <el-input placeholder="请输入内容" v-model="txt" clearable></el-input>
      </div>
      <div class="pwd">
        <b>请输入密码:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>
        <el-input placeholder="请输入密码" v-model="pwd" show-password></el-input>
      </div>
      <div class="btn">
        <el-button type="primary" @click="login">登陆</el-button>
        <el-button type="warning">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      txt:'12345',
      pwd:'123.com'
    }
  },
  methods:{
    login(){
      this.$router.push({
        path:'/main'
      })
    }
  }
}
</script>

<style scoped>
  .login{
    width: 100%;
    height: 100%;
    background: url(../assets/imgs/1.jpg);
    background-repeat: no-repeat;
    background-size:cover;
    overflow: hidden;
  }
  .login-box{
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -330px;
    margin-top: -170px;
    width: 660px;
    height: 340px;
    border: 1px solid aqua;
    background-color: rgba(0,0,0,.5);
    border-radius: 28px;
    box-shadow: 0 0 25px aqua;
  }
  .el-input{
    width: 300px;
  }
  b{
    font-size: 25px;
    color: aquamarine;
  }
  .txt{
    margin-top: 150px;
    padding-left: 50px;
  }
  .pwd{
    margin-top: 30px;
    padding-left: 50px;
  }
  .btn{
    padding: 20px 30px 0 0;
    display: flex;
    flex-direction: row-reverse;
  }
  .el-button{
    margin-left: 20px;
  }
  .user{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 100px;
    margin-top: 15px;
    border-radius: 50%;
    box-shadow:0 0 30px skyblue;

  }
  img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
</style>
