<template>
  <div class="login-page">
    <header>
      <h3>JEE<span>STAGRAM</span></h3>
      <h4>Login</h4>
    </header>
    <main class="form-group">
      <input type="text" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button class="login-btn">Log in</button>
    </main>
    <footer>
      <p>
        Do not have an account?
        <router-link class="link" to="/register">Sign up</router-link>.
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;

  header {
    padding: 15px 25px;
    h3 {
      color: #000;
      font-size: 28px;
      text-align: center;
      font-weight: 300;
      margin: 0;
      span {
        font-weight: 900;
      }
    }

    h4 {
      color: #888;
      font-size: 24px;
      text-align: center;
      font-weight: 300;
      margin: 0;
      padding: 0;
    }
  }

  .form-group {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    flex-flow: column;
    padding: 50px;

    input {
      border: 1px solid #ddd;
      width: 100%;
      height: 30px;
      margin-bottom: 15px;
      text-indent: 5px;
      background: #ddd;
      outline: none;
      &:focus {
        border: 1px solid #bbb;
      }
    }

    button {
      width: 100%;
      height: 30px;
      background: #f5d631;
      appearance: none;
      border: none;
      outline: none;
      border-radius: 5px;
      color: #171717;
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
    }
  }

  footer {
    width: 100%;
    background-color: #eee;
    box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.2);
    padding: 15px 25px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      color: #888;
      font-size: 16px;
      margin: 0;
      padding: 0;
      text-align: center;
    }

    .link {
      color: #e35205;
      text-decoration: none;
      font-weight: 700;
    }
  }
}
</style>
