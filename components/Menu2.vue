<template>
 <div>
   <nav class="navbar navbar-inverse navbar-fixed-top">
          <div class="container">
              <div class="navbar-header">
                   <a href="#" class="navbar-brand"><strong>hello</strong>.net</a>
                   <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                       <span class="icon-bar"></span>
                       <span class="icon-bar"></span>
                       <span class="icon-bar"></span>
                   </button>
              </div>
              <div class="collapse navbar-collapse">
                   <ul class="nav navbar-nav menu">
                       <li class="active"><a href="">课程</a></li>
                       <li><a href="">博客</a></li>
                       <li><a href="">手册</a></li>
                   </ul>
                   <form action="" class="navbar-form navbar-left">
                      <input type="text" placeholder="搜索" class="form-control">
                      <button type="submit">
                          <span class="glyphicon glyphicon-search"></span>
                      </button>
                   </form>     
                   <a href="" class="btn btn-primary btn-sm navbar-btn navbar-right hidden-xs">订阅课程</a>
                   <div class="profile navbar-right">
                      <ul class="nav navbar-nav">
                          <li><a href="dialog.html" data-toggle="modal" data-target="#login">登陆</a></li>
                          <li><a href="">注册</a></li>
                      </ul>
                      <p class="navbar-text"><a href="" class="navbar-link">hello!Tony</a></p>
                   </div>
              </div>
          </div>
        </nav>
 </div>
</template>

<script>
  
</script>

<style scoped>
body{
    padding-top:70px
}
.navbar-inverse input[type="text"]{
    background: #313131;
    border:none;
    color: #999;
}
.navbar-inverse .navbar-form{
    position: relative;
}
.navbar-inverse button[type="submit"]{
    position: absolute;
    top:30%;
    right: 20px;
    background: none;
    border: none;
} 
@media(min-width:768px){
  .navbar-inverse button[type="submit"]{
    top:15%;
  }    
}
.navbar-inverse .glyphicon{
    color:#999
}
.profile{
    margin-right: 25px;
}

 
</style>
