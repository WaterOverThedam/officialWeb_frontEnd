module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Nuxt.js project' },
        {name:"render",content:'webkit'},
        { name: 'applicable-device',content: 'pc,mobile' }
    ],
    link: [
        { rel:'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel:'stylesheet',type:'text/css',href:'/ui/bootstrap/css/bootstrap.min.css'},
        { rel:'stylesheet',type:'text/css',href:'/css/bootstrapValidator.min.css'},
        { rel:'stylesheet',type:'text/css',href:'https://unpkg.com/element-ui/lib/theme-chalk/index.css'},
        { rel:'stylesheet',type:'text/css',href:'/css/animate.css'},
        { rel:'stylesheet',type:'text/css',href:'/css/swiper-4.1.6.min.css'}
    ],
    script: [
        {src: '/ui/jquery-3.2.1.min.js'},
        {src: '/ui/bootstrap/js/bootstrap.min.js'},
        {src:"/ui/bootstrapValidator.min.js"},
        {src: '/ui/swiper-4.1.6.min.js'},
        {src: '/js/tlgc.js'}

    ]
  },
  //共用css及自定义字体
  css:[
       '~assets/css/normalize.css',
       '~assets/font/jian.css',
       '~assets/font/hei.css',
       '~assets/font/major.css',
       '~assets/font/hei-embed.css',
       '~assets/font/hei-embed.css',
       '~assets/font/major-embed.css',
      
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: ['~plugins/vue-jsonp','~/plugins/element-ui','~/plugins/function' ],
  /*
  ** Build configuration
  */
  build: {
    vendor:['axios'],
    loaders:[
      {
         test:/\.(png|jp?g|gif|svg)$/,
         loader:"url-loader",
         query:{
            limit:10240,
            name:'img/[name].[hash].[ext]'
         }
      },
      {
        test: /\.scss|sass$/,
        loaders: ["style", "css", "sass"]

      },
      {
         test:/\.less$/,
         loader:'less-loader'
      }
    ],
    extend (config, ctx) {
      //不需要太严格
      // if (ctx.dev && ctx.isClient) {
      //   config.module.rules.push({
      //     enforce: 'pre',
      //     test: /\.(js|vue)$/,
      //     loader: 'eslint-loader',
      //     exclude: /(node_modules)/
      //   })
      //}
    }
  }
}
