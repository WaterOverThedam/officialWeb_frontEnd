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
		background-image:url(~/assets/img/Hydrangeas.jpg);
		height: 500px;
		width: 500px;

	}
</style>