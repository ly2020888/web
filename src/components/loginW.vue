<template>
  <div>
      <div id='logging' >
        <form>
          <label for='acc' id='acc'>账号 </label><input type='text' name='acc'><br>
          <label for='psw' id='psw'>密码 </label><input type='text' name='psw'>
          <button type="submit">></button><br>         
        </form>
      </div>
  </div>
</template>

<script>
export default {
  name: 'loginW'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#logging{
  width:350px;
  height:150px;
  display:flex;
  z-index:10;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
#logging form input{
  margin:10px 10px;
  height:30px;
  font-size:inherit;
  padding: 0px 15px;
  box-sizing: border-box;
  border: 2px solid #c7c8ca81 ;
  border-radius: 4px;
}
#logging form input:hover{
  border: 2px solid #8586888c ;
}
#logging form button{
  width:30px;
  color: #b2bec3;
  height: 30px;
  border: 0px;;
  border-radius:100%;
  align-content: center;
  font-size: 20px;
  font-weight: 1000;
  background-color: #dfe6e9;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}


</style>
