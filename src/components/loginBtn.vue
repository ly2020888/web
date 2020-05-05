<template>
  <div>
    <transition name="fade">
      <button id='loginBtn' v-show="show" v-on:click='slowlyHide'>>></button>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'loginBtn',
  data: function(){
      return {
        show: true,
      }
  },
  methods:{
      slowlyHide(){
          this.show = !this.show;
        }
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#loginBtn{
  width:40px;
  z-index:10;
  right:2%;
  top: 2%;
  color: #b2bec3;
  height: 40px;
  border: 0px;;
  border-radius:100%;
  font-size: 20px;
  font-weight: 1000;
  position: fixed;
  background-color: #dfe6e9;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
#loginBtn:hover{
  color: #2d3436;
  height: 44px;
  width: 44px;
  margin-left: 10px;
}
.fade-enter-active, .fade-leave-active {
  transition: 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
