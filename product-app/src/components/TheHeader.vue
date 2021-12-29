<template>
  <header class="menu">
    <div class="container">
     
      <router-link style="padding: 0; margin: 0; display: block;" class="logo" to="/">
        <img src="@/assets/logo.svg" alt="Sneakers">
      </router-link>

      <nav class="menu-nav">
        <ul>
          <li><router-link to="/">Collections</router-link></li>
          <li><router-link to="/">Men</router-link></li>
          <li><router-link to="/">Women</router-link></li>
          <li><router-link to="/">About</router-link></li>
          <li><router-link to="/">Contact</router-link></li>
        </ul>
      </nav>

      <div class="cart-and-login">
        <router-link class="cart" to="/login">
          <img src="@/assets/icon-cart.svg" alt="">
        </router-link>
        <router-link class="login" to="/login">Entrar</router-link>
      </div>
      
    </div>
  </header>
</template>


<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped>

.menu {
  padding: 40px 0;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}


.container {
  display: flex;
  max-width: 960px;
  width: 80%;
  margin: 0 auto;
}

.cart-and-login {
  display: flex;
  justify-content: space-between;
}

.cart {
  margin-right: 40px;
}

.menu-nav {
  flex: 1;
}

.menu-nav ul {
  display: flex;
  justify-content: center;
}

.menu-nav ul li + li {
  margin-left: 30px;
}

.menu-nav ul li {
  position: relative;
  transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
}

.menu-nav ul li a {
  text-decoration: none;
}

.menu-nav li::after {
  content: "";
  position: absolute;
  width: 0%;
  height: 3px;
  display: block;
  transition: all 0.3s ease;
  bottom: -43px;
}

.menu-nav li:hover:after {
  width: 100%;
  height: 3px;
  background-color: hsl(26, 100%, 55%);
}



.menu-nav ul li a:hover {
  color: hsl(220, 13%, 13%);
}


</style>