<template>
	<div class="bgpic">
		<ul>
			<li><a href="/">Return Home</a></li>
		</ul>
		<h3>This is lesson</h3>
		<ul>
			<li v-for="item in lessons">{{item.name}}-[{{item.price}}]</li>
		</ul>
	</div>

</template>

<script>
import lessons from './lessons'
export default {
  head:{
    script: [
        {src: 'https://api.map.baidu.com/api?v=2.0&ak=PYOyYyKG6YV0kCbhf4F8uDpVSHDCc2HI'},
        {src: '/js/tlgc4.js'}
    ] 
  },
  transition (to, from) {
    if (!from) return 'slide-left'
    return +to.query.page < +from.query.page ? 'slide-right' : 'slide-left'
  },
  data(){
  	return {
  		...lessons
  	}
  }
}
	
</script>
<style>
/*使用资源符~*/
	.bgpic{
		/* background-image:url(~/assets/img/Hydrangeas.jpg); */
		height: 500px;
		width: 500px;

	}


.slide-left-enter,
 .slide-right-leave-active {
 opacity: 0;
 -webkit-transform: translate(100%, 0);
 transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
 opacity: 0;
 -webkit-transform: translate(-100%, 0);
 transform: translate(-100% 0);
}
</style>