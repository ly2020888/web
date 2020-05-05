<template>
  <div id='app'>
    <router-link to="/login" ><loginBtn></loginBtn> </router-link>
    <router-link to="" ></router-link>
     <router-view></router-view>
  </div>
</template>

<script>
import loginBtn from './components/loginBtn';
export default {
  name: 'App',
  components :{
    loginBtn
  }
}
</script>
<style>

</style>
