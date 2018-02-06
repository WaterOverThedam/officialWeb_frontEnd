     <div class="container outer">
       <div v-for="(bgImg,index) in bgImgs" :id="'a'+index" :data-id="index" class="row parent row-wrapper chevron-btm" :class="{'myFadein':index===counterNow,'ff-waves':ff}" :style="{'background':`url(${bgImg}) no-repeat`,'background-size':'cover','-webkit-background-size':'100%'}">
           <component :is="which"></component>  
       </div>
    </div>