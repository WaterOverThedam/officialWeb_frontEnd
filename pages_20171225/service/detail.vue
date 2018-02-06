<template>
	<div>
		<ul>
			<li><a href="/">Return Home</a></li>
		</ul>
		<h1>Stars: {{ $store.state.stars }}</h1>
		<h3>This is service detail</h3>
		<img src="/favicon.ico" alt=""/>
		
	</div>
	
</template>

<script>
 import axios from 'axios'
 
 export default {
  fetch ({ store, params }) {
    return axios.get('http://my-api/stars')
    .then((res) => {
      store.commit('setStars', res.data)
    })
  }
}
</script>
<style>
	
</style>