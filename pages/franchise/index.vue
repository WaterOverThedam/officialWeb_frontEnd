<template>
  <baidu-map class="map" :zoom="zoom" :center="gym.position">
    <bm-control>
      <button @click="addZoom(1)">放大</button>
      <button @click="addZoom(0)">还原</button>
      <button @click="addZoom(-1)">缩小</button>
    </bm-control>
    <bm-marker :position="gym.position" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
      <bm-label :content="gym.name" :labelStyle="{color: 'red', fontSize : '14px'}" :offset="{width: 0, height: 34}"/>
    </bm-marker>
  </baidu-map>
</template>

<script>
export default {
  data () {
    return {
      gym: {
        name:"小小运动馆太阳宫爱琴海中心",
        position:{lng: 116.443454,lat: 39.978071}
      },
      zoom: 16
    }
  },
  methods: {
    addZoom (level) {
      if(!level){
        this.zoom = 10;
      }else{
        this.zoom += level;
      }
    }
  }
}
</script>

<style>
/* The container of BaiduMap must be set width & height. */
.map {
  width: 100%;
  height: 300px;
}
</style>