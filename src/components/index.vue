<template>
<div>
  <vue-particles style="z-index:-1;position:fixed;height:100%;width:100%"></vue-particles>
  <transition  name="el-zoom-in-center"  appear>
    <div id='index'>
      <el-row type="flex">
        <el-col :span="2"></el-col>
        <el-col :span="8" >
          <transition name="el-zoom-in-center">
            <div class="el-zoom-in-center" id = 'index1' v-show='show' v-on:click = 'fn'>
                <div >  <a href=''><img src='.././assets/index1.jpg' > </a> </div> 
            </div>
          </transition>
        </el-col>
        <el-col :span="8" >
          <transition name="el-zoom-in-top">
            <div class="grid-content bg-purple-light" id = 'index1' v-show='show' v-on:click = 'fn'>
                <div >  <a href=''><img src='.././assets/index2.jpg' > </a> </div> 
            </div>
          </transition>
        </el-col>
        <el-col :span="8" >
          <transition name="el-zoom-in-center">
            <div class="grid-content bg-purple-light" id = 'index1' v-show='show' v-on:click = 'fn'>
                <div >  <a href=''><img src='.././assets/index3.jpg' > </a> </div> 
            </div>
          </transition>
        </el-col>
        <el-col :span="2"></el-col>
      </el-row>
    </div>
  </transition>
</div>
</template>

<script>
export default {
  name: 'index',
  data: function(){
    return {
      show: true,
      show1:false
      }
  },
  methods:{
    fn(){
      this.show = !this.show;
    }
  }
}
</script>

<style scoped>
body{
  height:100%;
}
#index {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  padding: auto;
  background-repeat: no-repeat;
  box-shadow: 2px 2px 4px 0 #000;
  transition: 2s;
}
#index1{
    border-radius: 10px;
    height: 600px;
    width: 300px;
    margin: 3px;
    overflow: hidden;
    background-repeat: no-repeat;
    box-shadow: 2px 2px 4px 0 #000;
}

.el-col {
   margin:0px;
   padding:0px;
   height:100%;
   border-radius: 4px;
 }
 .el-col img{
   background-size: cover;
   border: 1px solid #000;
 }

</style>
