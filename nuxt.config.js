module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'myweb',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      {name:"render",content:'webkit'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  //共用css
  css:['~assets/css/normalize.css'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
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
