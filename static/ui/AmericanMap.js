$(function () {
    $.getJSON('https://data.jianshukeji.com/jsonp?filename=json/us-population-density.json&callback=?', function (data) {
        // Make codes uppercase to match the map data
        $.each(data, function () {
            this.code = this.code.toUpperCase();
        });
        // Instanciate the map
        $('#container').highcharts('Map', {
            chart : {
                // 外边框
                // borderWidth : 1
                spacing:[0,0,0,0],
                // height:"500px",
                backgroundColor:"transparent"
            },
            // 标题
            title : {
                text : 'The United States',
                // text : null,
                style:{"color":"transparent"}
                
            },
            // 提示图示
            legend: {
                enabled:false
            },
            // 地图导航
            mapNavigation: {
                enabled: false,
                // enableButtons:true,
                buttons:{
                    zoomIn:{
                        style:{
                           
                        }
                    },
                    zoomOut:{
                        style:{
                            
                        }
                    },
                }
            },
            // 地图颜色
            colors:['#48BCB6'],
            // 数据列
            series : [{
                // 地图显示动画
                animation: {
                    // duration: 500
                },
                point:{
                    events:{
                        click:function(){
                            location.href =
                            "https://www.thelittlegym.com/find-a-gym?geoaction=3&param="+(this.name.substr(0,1).concat(this.name.substr(3,1))).toUpperCase();
                        }
                    }
                },
                data : data,
                // 地图数据
                mapData: Highcharts.maps['countries/us/us-all'],
                joinBy: ['postal-code', 'code'],
                // 地图数据显示
                dataLabels: {
                    enabled: false,
                },
                name: 'gym',
                // 数据提示框
                tooltip: {
                    // name为空
                    headerFormat: '',
                    // 区域名字
                    pointFormat: "{point.name}"
                }

            }],
        });
    });
});