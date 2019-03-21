

function pie(){
    var dom = document.getElementById("one");
    var myChart = echarts.init(dom);
    option = {
        title:{
            text:'接入机型占比',
            textStyle:{
                fontFamily:'sans-serif',
                color:'#fff',
                x:'20%',
                y:'10%'
            }
        },
        color:['#0175ee','#d89446','#373693','#25ae4f','#06b5c6','#009e9a','#ac266f'],
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: '4%',
            top:'55',
            icon:'circle',
            textStyle:{
                color:'#fff',

            },
            data:['A机型','B机型','C机型','D机型','E机型','F机型','G机型']
        },
        series: [
            {
                name:'机型占比',
                type:'pie',
                radius: ['30%', '60%'],

                data:[
                    {value:335, name:'A机型'},
                    {value:310, name:'B机型'},
                    {value:234, name:'C机型'},
                    {value:135, name:'D机型'},
                    {value:1048, name:'E机型'},
                    {value:251, name:'F机型'},
                    {value:147, name:'G机型'},
                ]
            }
        ]
    };
    myChart.setOption(option, true);
    window.onresize = myChart.resize;
}


function bin() {
    var dom = document.getElementById("two");
    var myChart = echarts.init(dom);
    var configParameters = {
        pie1Process: {
            min: 0,
            max: 100
        },
        pie2Process: {
            min: 0,
            max: 100
        },
        pie3Process: {
            min: 0,
            max: 100
        },
    };

    var dataStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            shadowBlur: 40,
            shadowColor: 'rgba(40, 40, 40, 0.5)',
        }
    };

    var placeHolderStyle = {
        normal: {
            color: 'rgba(44,59,70,1)', // 未完成的圆环的颜色
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: 'rgba(44,59,70,1)' // 未完成的圆环的颜色
        }
    };

    option = {
        title: {
            text: '52%',
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 'normal',
                color: '#fff',
                fontSize: 35
            }
        },
        tooltip: {
            show: false,
        },
        toolbox: {
            show: false,
        },
        series: [{
            name: 'Pie1',
            type: 'pie',
            clockWise: false,
            radius: [50, 60],
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['25%', '50%'],
            data: [{
                value: 25,
                label: {
                    normal: {
                        formatter: '66%',
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '35',
                            fontWeight: 'normal',
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#027825'
                    }
                }
            }, {
                value: 75,
                name: 'invisible',
                itemStyle: placeHolderStyle,
            }]
        }, {
            name: 'Pie2',
            type: 'pie',
            clockWise: false,
            radius: [50, 60],
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['50%', '50%'],
            data: [{
                value: 52,
                itemStyle: {
                    normal: {
                        color: '#006dd6'
                    }
                }
            }, {
                value: 50,
                name: 'invisible',
                itemStyle: placeHolderStyle,
            }]
        }, {
            name: 'Pie3',
            type: 'pie',
            clockWise: false,
            radius: [50, 60],
            itemStyle: dataStyle,
            hoverAnimation: false,
            center: ['75%', '50%'],
            data: [{
                value:34,
                label: {
                    normal: {
                        formatter: '34%',
                        position: 'center',
                        show: true,
                        textStyle: {
                            fontSize: '35',
                            fontWeight: 'normal',
                            color: '#fff'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#238681'
                    }
                }
            }, {
                value: 25,
                name: 'invisible',
                itemStyle: placeHolderStyle,
            }]
        }, ]
    }
    myChart.setOption(option, true);
    window.onresize = myChart.resize;
}


function zhe() {
    var dom = document.getElementById("three");
    var myChart = echarts.init(dom);
    option = {
        title: {
            text: '30天日均线流量趋势',
            textStyle:{
                fontFamily:'sans-serif',
                color:'#fff',
                x:'20%',
                y:'10%'
            }
        },
        xAxis: {
            type: 'category',
            data: ['2','4','6','8','10','12','14','16','18','20','22',"24","26","28","30"],
            boundaryGap: false,
            splitLine: {
                show: true,
                interval: 'auto',
                lineStyle: {
                    color: ['#031932']
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            }
        },
        yAxis: {
            type: 'value',
            splitLine: {
                lineStyle: {
                    color: ['#031932']
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisLabel: {
                margin: 10,
                textStyle: {
                    fontSize: 14
                }
            }
        },
        series: [{
            type: 'line',
            smooth: true,
            showSymbol: false,
            symbol: 'circle',
            symbolSize: 6,
            data: ['20', '40', '50', '100', '120', '80', '30', '50', '110', '30', '90', '70','40','50','45'],
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#02131f'
                    }, {
                        offset: 1,
                        color: '#02131f'
                    }], false)
                }
            },
            itemStyle: {
                normal: {
                    color: '#58c8da'
                }
            },
            lineStyle: {
                normal: {
                    width: 2
                }
            }
        }]
    };
    myChart.setOption(option, true);
    window.onresize = myChart.resize;
}


function zhetwo() {

    var dom = document.getElementById("four");
    var myChart = echarts.init(dom);
    option = {
        color: ['#ffd285', '#ff733f', '#ec4863'],

        title: {
            text: '集群性能/近一小时',
            left: '1%',
            top: '6%',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            width:'10',
            right:'5%',
            bottom: '20%',
            icon: "circle",
            textStyle: {
                color: '#fff',
            },
            data: ['网络', '内存', 'CPU']
        },
        grid: {
            left: '1%',
            right: '20%',
            top: '25%',
            bottom: '6%',
            containLabel: true
        },
        toolbox: {
            "show": false,
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            "axisLine": {
                lineStyle: {
                    color: '#0b3148'
                }
            },
            "axisTick": {
                "show": false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#0b3148'
                }
            },
            boundaryGap: false,
            data: ['15.50', '15.40', '15.30', '15.20', '15.10', '15.00', '14.50']
        },
        yAxis: {
            min:0,
            max:500,
            "axisLine": {
                lineStyle: {
                    color: '#0b3148'
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#0b3148'
                }
            },
            "axisTick": {
                "show": false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            type: 'value'
        },
        series: [{
            name: '网络',
            type: 'line',
            top:'5%',
            symbolSize: 4,
            itemStyle : {
                normal : {
                    color:'#BC7F4B',
                    lineStyle:{
                        color:'#BC7F4B'
                    }
                }
            },
            data: [110, 120, 80, 120, 70, 210, 180]
        }, {
            name: '内存',
            type: 'line',
            symbolSize: 4,
            itemStyle:{
                normal:{
                    color:"#0368D1",
                    lineStyle:{
                        color:"#0368D1"
                    }
                }
            },
            data: [210, 180, 190, 220, 280, 320, 300]
        }, {
            name: 'CPU',
            type: 'line',
            symbolSize: 4,
            itemStyle:{
                normal:{
                    color:"#019895",
                    lineStyle:{
                        color:"#019895"
                    }
                }
            },
            data: [120, 210,180, 150, 170, 320, 400]
        }]
    }
    myChart.setOption(option, true);
    window.onresize = myChart.resize;
}

// function map() {
//     var dom = document.getElementById("five");
//
//
//     var jiangxi = "/asset/get/s/data-1518338017111-rJK1gtpUM.json";
//     var yingtan = "/asset/get/s/data-1518338860057-By447tpLf.json";
//     var yichun = "/asset/get/s/data-1518338852969-Hy677KTIf.json";
//     var xinyu = "/asset/get/s/data-1518338838010-SyAzQYTIf.json";
//     var shangrao = "/asset/get/s/data-1518338829670-H1UfQYa8G.json";
//     var pingxiang = "/asset/get/s/data-1518338823093-HkyMQtpUf.json";
//     var nanchang = "/asset/get/s/data-1518338805373-S1Temta8G.json";
//     var jiujiang = "/asset/get/s/data-1518338799987-S1deQFTLz.json";
//     var jingdezhen = "/asset/get/s/data-1518338783915-HJOJXtaLf.json";
//     var jian = "/asset/get/s/data-1518338772507-BJnAMKTIz.json";
//     var ganzhou = "/asset/get/s/data-1518338763250-S17RfKpLM.json";
//     var fuzhou = "/asset/get/s/data-1518338684239-S1EFGtp8f.json";
//
//     echarts.extendsMap = function(id, opt){
//         // 实例
//         var chart = this.init(document.getElementById(id));
//
//         var curGeoJson = {};
//         var cityMap = {
//             "南昌市": nanchang,
//             "景德镇市": jingdezhen,
//             "萍乡市": pingxiang,
//             "九江市": jiujiang,
//             "新余市": xinyu,
//             "鹰潭市": yingtan,
//             "赣州市": ganzhou,
//             "吉安市": jian,
//             "宜春市": yichun,
//             "抚州市": fuzhou,
//             "上饶市": shangrao
//         };
//         var geoCoordMap = {
//             '南昌': [115.89, 28.48],
//             '景德镇': [117.28, 29.09],
//             '萍乡': [113.93, 27.41],
//             '九江': [115.97,29.51],
//             '新余': [114.81, 27.72],
//             '鹰潭': [117.12, 28.10],
//             '赣州': [115.04, 25.67],
//             '吉安': [115.05, 26.88],
//             '宜春': [114.41, 28.03],
//             '抚州': [116.45, 27.79],
//             '上饶': [117.92, 28.22]
//         };
//         var levelColorMap = {
//             '1': 'rgba(241, 109, 115, .8)',
//             '2': 'rgba(255, 235, 59, .7)',
//             '3': 'rgba(147, 235, 248, 1)'
//         };
//
//         var defaultOpt = {
//             mapName: 'china',     // 地图展示
//             goDown: false,        // 是否下钻
//             bgColor: '#404a59',   // 画布背景色
//             activeArea: [],       // 区域高亮,同echarts配置项
//             data: [],
//             // 下钻回调(点击的地图名、实例对象option、实例对象)
//             callback: function(name, option, instance){}
//         };
//         if(opt) opt = this.util.extend(defaultOpt, opt);
//
//         // 层级索引
//         var name = [opt.mapName];
//         var idx = 0;
//         var pos = {
//             leftPlus: 115,
//             leftCur: 150,
//             left: 198,
//             top: 50
//         };
//
//         var line = [[0, 0], [8, 11], [0, 22]];
//         // style
//         var style = {
//             font: '18px "Microsoft YaHei", sans-serif',
//             textColor: '#eee',
//             lineColor: 'rgba(147, 235, 248, .8)'
//         };
//
//         var handleEvents = {
//             /**
//              * i 实例对象
//              * o option
//              * n 地图名
//              **/
//             resetOption: function(i, o, n){
//                 var breadcrumb = this.createBreadcrumb(n);
//
//                 var j = name.indexOf(n);
//                 var l = o.graphic.length;
//                 if(j < 0){
//                     o.graphic.push(breadcrumb);
//                     o.graphic[0].children[0].shape.x2 = 145;
//                     o.graphic[0].children[1].shape.x2 = 145;
//                     if(o.graphic.length > 2){
//                         for(var x = 0; x < opt.data.length; x++){
//                             if(n === opt.data[x].name + '市'){
//                                 o.series[0].data = handleEvents.initSeriesData([opt.data[x]]);
//                                 break;
//                             }else o.series[0].data = [];
//                         }
//                     };
//                     name.push(n);
//                     idx++;
//                 }else{
//                     o.graphic.splice(j + 2, l);
//                     if(o.graphic.length <= 2){
//                         o.graphic[0].children[0].shape.x2 = 60;
//                         o.graphic[0].children[1].shape.x2 = 60;
//                         o.series[0].data = handleEvents.initSeriesData(opt.data);
//                     };
//                     name.splice(j + 1, l);
//                     idx = j;
//                     pos.leftCur -= pos.leftPlus * (l - j - 1);
//                 };
//
//                 o.geo.map = n;
//                 o.geo.zoom = 0.4;
//                 i.clear();
//                 i.setOption(o);
//                 this.zoomAnimation();
//                 opt.callback(n, o, i);
//             },
//
//             /**
//              * name 地图名
//              **/
//             createBreadcrumb: function(name){
//                 var cityToPinyin = {
//                     "南昌市": "nanchang",
//                     "景德镇市": "jingdezhen",
//                     "萍乡市": "pingxiang",
//                     "九江市": "jiujiang",
//                     "新余市": "xinyu",
//                     "鹰潭市": "yingtan",
//                     "赣州市": "ganzhou",
//                     "吉安市": "jian",
//                     "宜春市": "yichun",
//                     "抚州市": "fuzhou",
//                     "上饶市": "shangrao"
//                 };
//                 var breadcrumb = {
//                     type: 'group',
//                     id: name,
//                     left: pos.leftCur + pos.leftPlus,
//                     top: pos.top + 3,
//                     children: [{
//                         type: 'polyline',
//                         left: -90,
//                         top: -5,
//                         shape: {
//                             points: line
//                         },
//                         style: {
//                             stroke: '#fff',
//                             key: name
//                             // lineWidth: 2,
//                         },
//                         onclick: function(){
//                             var name = this.style.key;
//                             handleEvents.resetOption(chart, option, name);
//                         }
//                     }, {
//                         type: 'text',
//                         left: -68,
//                         top: 'middle',
//                         style: {
//                             text: name,
//                             textAlign: 'center',
//                             fill: style.textColor,
//                             font: style.font
//                         },
//                         onclick: function(){
//                             var name = this.style.text;
//                             handleEvents.resetOption(chart, option, name);
//                         }
//                     }, {
//                         type: 'text',
//                         left: -68,
//                         top: 10,
//                         style: {
//
//                             name: name,
//                             text: cityToPinyin[name] ? cityToPinyin[name].toUpperCase() : '',
//                             textAlign: 'center',
//                             fill: style.textColor,
//                             font: '12px "Microsoft YaHei", sans-serif',
//                         },
//                         onclick: function(){
//                             // console.log(this.style);
//                             var name = this.style.name;
//                             handleEvents.resetOption(chart, option, name);
//                         }
//                     }]
//                 }
//
//                 pos.leftCur += pos.leftPlus;
//
//                 return breadcrumb;
//             },
//
//             // 设置effectscatter
//             initSeriesData: function(data){
//                 var temp = [];
//                 for(var i = 0;i < data.length;i++){
//                     var geoCoord = geoCoordMap[data[i].name];
//                     if(geoCoord){
//                         temp.push({
//                             name: data[i].name,
//                             value: geoCoord.concat(data[i].value, data[i].level)
//                         });
//                     }
//                 };
//                 return temp;
//             },
//
//             zoomAnimation: function(){
//                 var count = null;
//                 var zoom = function(per){
//                     if(!count) count = per;
//                     count = count + per;
//                     // console.log(per,count);
//                     chart.setOption({
//                         geo: {
//                             zoom: count
//                         }
//                     });
//                     if(count < 1) window.requestAnimationFrame(function(){
//                         zoom(0.2);
//                     });
//                 };
//                 window.requestAnimationFrame(function(){
//                     zoom(0.2);
//                 });
//             }
//         };
//
//         var option = {
//             backgroundColor: opt.bgColor,
//             graphic: [{
//                 type: 'group',
//                 left: pos.left,
//                 top: pos.top - 4,
//                 children: [{
//                     type: 'line',
//                     left: 0,
//                     top: -20,
//                     shape: {
//                         x1: 0,
//                         y1: 0,
//                         x2: 60,
//                         y2: 0
//                     },
//                     style: {
//                         stroke: style.lineColor,
//                     }
//                 }, {
//                     type: 'line',
//                     left: 0,
//                     top: 20,
//                     shape: {
//                         x1: 0,
//                         y1: 0,
//                         x2: 60,
//                         y2: 0
//                     },
//                     style: {
//                         stroke: style.lineColor,
//                     }
//                 }]
//             }, {
//                 id: name[idx],
//                 type: 'group',
//                 left: pos.left + 2,
//                 top: pos.top,
//                 children: [{
//                     type: 'polyline',
//                     left: 90,
//                     top: -12,
//                     shape: {
//                         points: line
//                     },
//                     style: {
//                         stroke: 'transparent',
//                         key: name[0]
//                     },
//                     onclick: function(){
//                         var name = this.style.key;
//                         handleEvents.resetOption(chart, option, name);
//                     }
//                 }, {
//                     type: 'text',
//                     left: 0,
//                     top: 'middle',
//                     style: {
//                         text: name[0] === '江西' ? '江西省' : name[0],
//                         textAlign: 'center',
//                         fill: style.textColor,
//                         font: style.font
//                     },
//                     onclick: function(){
//                         handleEvents.resetOption(chart, option, '江西');
//                     }
//                 }, {
//                     type: 'text',
//                     left: 0,
//                     top: 10,
//                     style: {
//                         text: 'JIANGXI',
//                         textAlign: 'center',
//                         fill: style.textColor,
//                         font: '12px "Microsoft YaHei", sans-serif',
//                     },
//                     onclick: function(){
//                         handleEvents.resetOption(chart, option, '江西');
//                     }
//                 }]
//             }],
//             geo: {
//                 map: opt.mapName,
//                 // roam: true,
//                 zoom: 1,
//                 label: {
//                     normal: {
//                         show: true,
//                         textStyle: {
//                             color: '#fff'
//                         }
//                     },
//                     emphasis: {
//                         textStyle: {
//                             color: '#fff'
//                         }
//                     }
//                 },
//                 itemStyle: {
//                     normal: {
//                         borderColor: 'rgba(147, 235, 248, 1)',
//                         borderWidth: 1,
//                         areaColor: {
//                             type: 'radial',
//                             x: 0.5,
//                             y: 0.5,
//                             r: 0.8,
//                             colorStops: [{
//                                 offset: 0,
//                                 color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
//                             }, {
//                                 offset: 1,
//                                 color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
//                             }],
//                             globalCoord: false // 缺省为 false
//                         },
//                         shadowColor: 'rgba(128, 217, 248, 1)',
//                         // shadowColor: 'rgba(255, 255, 255, 1)',
//                         shadowOffsetX: -2,
//                         shadowOffsetY: 2,
//                         shadowBlur: 10
//                     },
//                     emphasis: {
//                         areaColor: '#389BB7',
//                         borderWidth: 0
//                     }
//                 },
//                 regions: opt.activeArea.map(function(item){
//                     if(typeof item !== 'string'){
//                         return {
//                             name: item.name,
//                             itemStyle: {
//                                 normal: {
//                                     areaColor: item.areaColor || '#389BB7'
//                                 }
//                             },
//                             label: {
//                                 normal: {
//                                     show: item.showLabel,
//                                     textStyle: {
//                                         color: '#fff'
//                                     }
//                                 }
//                             }
//                         }
//                     }else{
//                         return {
//                             name: item,
//                             itemStyle: {
//                                 normal: {
//                                     borderColor: '#91e6ff',
//                                     areaColor: '#389BB7'
//                                 }
//                             }
//                         }
//                     }
//                 })
//             },
//             series: [{
//                 type: 'effectScatter',
//                 coordinateSystem: 'geo',
//                 // symbol: 'diamond',
//                 showEffectOn: 'render',
//                 rippleEffect: {
//                     period: 15,
//                     scale: 6,
//                     brushType: 'fill'
//                 },
//                 hoverAnimation: true,
//                 itemStyle: {
//                     normal: {
//                         color: function(params){
//                             return levelColorMap[params.value[3]];
//                         },
//                         shadowBlur: 10,
//                         shadowColor: '#333'
//                     }
//                 },
//                 data: handleEvents.initSeriesData(opt.data)
//             }]
//         };
//
//         chart.setOption(option);
//         // 添加事件
//         chart.on('click', function(params){
//             var _self = this;
//             if(opt.goDown && params.name !== name[idx]){
//                 if(cityMap[params.name]){
//                     var url = cityMap[params.name];
//                     $.get(url, function(response){
//                         // console.log(response);
//                         curGeoJson = response;
//                         echarts.registerMap(params.name, response);
//                         handleEvents.resetOption(_self, option, params.name);
//                     });
//                 }
//             }
//         });
//
//         chart.setMap = function(mapName){
//             var _self = this;
//             if(mapName.indexOf('市') < 0) mapName = mapName + '市';
//             var citySource = cityMap[mapName];
//             if(citySource){
//                 var url = './map/' + citySource + '.json';
//                 $.get(url, function(response){
//                     // console.log(response);
//                     curGeoJson = response;
//                     echarts.registerMap(mapName, response);
//                     handleEvents.resetOption(_self, option, mapName);
//                 });
//             }
//             // handleEvents.resetOption(this, option, mapName);
//         };
//
//         return chart;
//     };
//
//     $.getJSON(jiangxi, function(geoJson){
//         echarts.registerMap('江西', geoJson);
//         var myChart = echarts.extendsMap('chart-panel', {
//             bgColor: '#154e90', // 画布背景色
//             mapName: '江西',    // 地图名
//             goDown: true,       // 是否下钻
//             // 下钻回调
//             callback: function(name, option, instance){
//                 console.log(name, option, instance);
//             },
//             // 数据展示
//             data: [{
//                 name: '南昌',
//                 value: 10,
//                 level: 1
//             }, {
//                 name: '景德镇',
//                 value: 12,
//                 level: 2
//             }, {
//                 name: '萍乡',
//                 value: 11,
//                 level: 3
//             }, {
//                 name: '赣州',
//                 value: 16,
//                 level: 2
//             }, {
//                 name: '吉安',
//                 value: 12,
//                 level: 1
//             }]
//         });
//     })
//
//
//     myChart.setOption(option, true);
//     window.onresize = myChart.resize;
// }

function shui() {
    var dom = document.getElementById("six");
    var myChart = echarts.init(dom);
    var category = ['福建', '湖北','江苏', '浙江', '广东', '湖南', '山西'];
    var barData = [198, 164, 144,118,92 , 60, 50];

    var option = {
        title: {
            text: '各地接机占比',
            left: '2%',
            top:"2%",
            textStyle:{
                color:"#fff",
                fontsize: 14
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            }
        },
        grid: {
            // left: '10%',
            bottom: '3%',
            top:'12%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel:{
                show:false
            },
            splitLine:{
                show:false
            },
        },
        yAxis: {
            type: 'category',
            data: category,
            inverse:true,
            splitLine: {show: false},
            axisLine: {
                show: false
            },
            axisLabel:{
                textStyle:{
                    color:'#fff',
                    fontsize:8
                }
            },
            axisTick: {
                show: false
            },
            offset: 10,
            nameTextStyle: {
                fontSize: 15
            }
        },
        series: [
            {
                name: '数量',
                type: 'bar',
                data: barData,
                barWidth: 8,
                barGap: 10,
                smooth: true,
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        offset: [5, -2],
                        textStyle: {
                            color: '#fff',
                            fontSize: 13
                        }
                    }
                },
                itemStyle: {
                    emphasis: {
                        barBorderRadius: 7
                    },
                    normal: {
                        barBorderRadius: 7,
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#3977E6'},
                                {offset: 1, color: '#37BBF8'}

                            ]
                        )
                    }
                }
            }
        ]
    };
    myChart.setOption(option, true);
    window.onresize = myChart.resize;
}

function bing() {
    var dom = document.getElementById("five");
    var myChart = echarts.init(dom);
    var data = [{
        value: 25,//正确率的百分比
        // name: '高等教育学'
    }, {
        value: 25,
        // name: '高等教育心理学'
    }, {
        value: 20,
        // name: '综合学科'
    }, {
        value: 25,
        // name: '综合学科'
    }];

    var a = 0;
    var scale = 1;
    var borderColor = '#021421';
    for (var i = 0; i < data.length; i++) {
        a += data[i].value;
    }
    data.push({
        value: a,
        name: '',
        itemStyle: {
            normal: {
                color: 'none'
            }
        }
    });
    var rich = {
        yellow: {
            color: "#ffc72b",
            fontSize: 19 * scale,
            padding: [5, 4]
        },
        circle: {
            backgroundColor: "#ffc72b",
            width: 7 * scale,
            align: 'left',
            height: 7 * scale,
            borderRadius: 7 * scale
        },
        green: {
            color: "rgba(63,255,234,0.5)",
            fontSize: 19 * scale,
            padding: [6, 0]
        },
        tip: {
            color: "#ffc72b",
            fontSize: 40 * scale,
            padding: [15, 4]
        },
        white: {
            color: "#fff",
            align: 'center',
            fontSize: 21 * scale,
            padding: [10, 0]
        },
        hr: {
            borderColor: '#06405a',
            width: '100%',
            borderWidth: 0.5,
            height: 0
        }
    }
    console.log(data);
    option = {
        title:{
            text:"出勤率统计",
            textStyle:{
                color:'#fff'
            }
        },
        color: ['#09b3fd', '#09b3fd', '#09b3fd','#0b0d26'],
        series: [{
            // name: '访问来源',
            type: 'pie',
            startAngle: -180,
            hoverAnimation: false,
            radius: ['78%', '55%'],
            center: ['30%', '58%'],
            data: data,
            graphic:{
                type:"text",
                textStyle:{
                    text:"出勤率",
                    color:"#000",
                }
            },
            label: {
                normal: {
                    text:"总出勤率",
                    color: "#fff",
                    rich: rich
                }
            },
            // markLine: {
            //     label:{
            //         normal:{
            //             position:'start',
            //         }
            //     },
            //     lineStyle:{
            //         normal:{
            //             color:"#fff"
            //         }
            //     }
            // },
            labelLine: {
                normal: {
                    show: false
                },
            },
            itemStyle: {
                normal: {
                    borderColor: '#030A16',
                    borderWidth: 4 * scale,
                },
                // emphasis: {
                //     shadowBlur: 10,
                //     shadowOffsetX: 0,
                //     shadowColor: 'rgba(0, 0, 0, 0.5)'
                // }
            }
        }]
    };
    myChart.setOption(option, true);
    window.onresize = myChart.resize;
}