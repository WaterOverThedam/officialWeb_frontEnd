<template>
 
     <div class="row-wrapper waves bg-white"></div>
 
</template>

<script>
 

export default {
 
 
}
</script>

<style scoped>

.row-wrapper {
    position: relative;
    display: block;
    margin-bottom:3%;
}
.bg-white {
    background: #fff;
}

.waves:before {
    position: absolute;
    z-index: 100;
    top: -34px;
    display: block;
    content: "";
    background-image: url(/img/course/waves.png);
    background-position: 0 0;
    background-repeat: repeat-x;
    background-size: auto 100%;
    width: 100%;
    height: 44px;
    //border:1px solid red;
}
 

 
</style>