

function gauge() {
    var dom = document.getElementById("suc_gauge");
    var myChart = echarts.init(dom);
    option = {
        // backgroundColor: '#050d19',
        series: [{
            center: ["50%", "60%"], //仪表的位置
            name: "刻度", //仪表的名字
            type: "gauge", //统计图类型为仪表
            radius: "83%", //统计图的半径大小
            min: 0, //最小刻度
            max: 16, //最大刻度
            splitNumber: 8, //刻度数量
            startAngle: 225, //开始刻度的角度
            endAngle: -45, //结束刻度的角度
            axisLine: { //设置默认刻度盘上的刻度不显示，重新定义刻度盘
                show: false,
                lineStyle: {
                    width: 1,
                    color: [
                        [1, "rgba(255,255,255,0)"]
                    ]
                }
            }, //仪表盘轴线
            axisLabel: { //仪表盘上的数据
                show: false,
                color: "#4d5bd1", //仪表盘上的轴线颜色
                distance: 25, //图形与刻度的间距
                formatter: function(v) { //刻度轴上的数据相关显示
                    switch (v + "") {
                        case "0":
                            return "0";
                        case "2":
                            return "2W";
                        case "4":
                            return "4W";
                        case "6":
                            return "6W";
                        case "8":
                            return "8W";
                        case "10":
                            return "10W";
                        case "12":
                            return "12W";
                        case "14":
                            return "14W";
                        case "16":
                            return "16W";
                    }
                }
            }, //刻度标签。
            axisTick: {
                show: false,
                // splitNumber: 7, //刻度的段落数
                lineStyle: {
                    color: '#fff',
                    width: 0 //刻度的宽度
                },
                length: -10 //刻度的长度
            }, //刻度样式
            splitLine: { //文字和刻度的偏移量
                show: true,
                length:-13, //便宜的长度
                lineStyle: {
                    color: "#0df4f9",
                }
            }, //分隔线样式
        },
            {
                type: "gauge", //刻度轴表盘
                radius: "100%", //刻度盘的大小
                center: ["50%", "60%"], //刻度盘的位置
                splitNumber: 10, //刻度数量
                startAngle: 225, //开始刻度的角度
                endAngle: -45, //结束刻度的角度
                axisLine: { //刻度的线条
                    show: false,
                    lineStyle: {
                        width: 10, //定义一个宽15的数轴
                        color: [ //颜色为渐变色
                            [
                                1,
                                new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                    offset: 0,
                                    color: "#1e5fbb"
                                },
                                    {
                                        offset: 0.5,
                                        color: "#0ff6fb"
                                    },
                                    {
                                        offset: 0.9,
                                        color: "#1e5fbb"
                                    }
                                ])
                            ]
                        ]
                    }
                },
                //分隔线样式。
                splitLine: { //表盘上的轴线
                    show: false
                },
                axisLabel: { //表盘上的刻度数值文字
                    show: false
                },
                axisTick: { //表盘上的刻度线
                    show: false
                },
                pointer: { //表盘上的指针
                    show: true,
                    width:'3'
                },
                itemStyle:{//表盘指针的颜色
                    color:  '#0ff6fb'
                },
                title: { //标题
                    show: true,
                    offsetCenter: [0, "-35%"], // x, y，单位px
                    textStyle: {
                        color: "#0ff6fb",
                        fontSize: 16 //表盘上的标题文字大小
                    }
                },
                //仪表盘详情，用于显示数据。
                detail: {
                    show: true,
                    color: '#0df4f9',
                    formatter: function(params) {
                        return params
                    },
                    textStyle: {
                        fontSize: 12
                    }
                },
                data: [ //当前数值的数据
                    {
                        name: "调解成功占比",
                        value: 96.6
                    }
                ]
            }
        ]
    };
    myChart.setOption(option, true);
    window.onresize = myChart.resize;
}

function  pie() {
    var dom = document.getElementById("pie");
    var myChart = echarts.init(dom);
    option = {
        title: {
            text: '聊城街道',
            subtext:['2274'],
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 16,
                color:'#17f6fd'
            },
        },
        // tooltip: {
        //     trigger: 'item',
        //     formatter: function(params, ticket, callback) {
        //         var res = params.seriesName;
        //         // res += '<br/>' + params.name + ' : ' + params.percent + '%';
        //         return res;
        //     }
        // },
        legend: {
            orient: 'vertical',
            right: '0%',
            bottom: '0%',
            data: ['食堂', '超市', '刷卡', '交通'],
            itemWidth: 20,
            itemHeight: 10
        },
        series: [{
            // name: '消费',
            type: 'pie',
            selectedMode: 'single',
            radius: ['50%', '90%'],
            label: {
                normal: {
                    position: 'inner',
                    textStyle: {
                        color: '#fff',
                        fontSize: 14
                    }
                }
            },
            color:['#b241e7','#eb6100','#00b7f1','#ebe134','#b0da52','#b0da52','#5636f1','#d55995','#a0a53f','#4ae0a0'],
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 11,
                // name: '食堂'
            }, {
                value: 35,
                // name: '超市'
            }, {
                value: 20,
                // name: '刷卡'
            }, {
                value: 22,
                // name: '交通'
            },{
                value: 11,
                // name: '食堂'
            }, {
                value: 25,
                // name: '超市'
            }, {
                value: 10,
                // name: '刷卡'
            }, {
                value: 15,
                // name: '交通'
            },{
                value: 18,
                // name: '刷卡'
            }, {
                value: 60,
                // name: '交通'
            }
            ]
        }]
    };
    myChart.setOption(option, true);
    window.onresize = myChart.resize;
}

function line() {
    var dom = document.getElementById("tiao");
    var myChart = echarts.init(dom);
    var dataAll = [30, 245, 160,260];
    var yAxisData = ['其他纠纷','婚姻家庭纠纷','征地拆迁纠纷','邻里纠纷'];
    var option = {
        // backgroundColor: '#0f375f',
        grid: [
            {x: '30%'},
        ],
        tooltip: {
            formatter: '{b} ({c})'
        },
        xAxis: [
            {gridIndex: 0,
                axisTick: {show:false},
                axisLabel: {show:false},
                splitLine: {show:false},
                axisLine: {show:false }},
        ],
        yAxis: [
            {  gridIndex: 0, interval:0,data:yAxisData.reverse(),
                axisTick: {show:false}, axisLabel: {show:true,color:'#fff'},splitLine: {show:false},
                axisLine: {show:false,lineStyle:{color:"#6173a3"}},
            }
        ],
        series:
            {
                // name: '投诉原因TOP10',
                type: 'bar',xAxisIndex: 0,yAxisIndex: 0,barWidth:'50%',
                itemStyle:{normal:{color:'#17c6d1'}},
                label:{normal:{show:true, position:"right",textStyle:{color:"#14f5fb"}}},
                data: dataAll.sort(),
            },


    };
    myChart.setOption(option, true);
    window.onresize = myChart.resize;
}

function line2() {
    var dom = document.getElementById("suc_tiao");
    var myChart = echarts.init(dom);
    option = {
        tooltip: {
            show:false,
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            data: ['2016.01', '2016.02', '2016.03', '2016.04', '2016.05', '2016.06', '2016.07', '2016.08', '2016.09', '2016.10','2016.11','2016.12'],
            axisLine:{
                show:false,
                lineStyle:{
                    color:'rgba(53,153,196,0.6)'
                }
            },
            axisLabel:{
                color:'#fff',
                fontSize:10,
                rotate:45
            },
            axisTick: {
                show: false,
                alignWithLabel: true
            }
        },
        yAxis: {
            axisLine:{
                show:false,
            },
            axisLabel:{
                show:false,
                color:'#fbc52c',
                fontSize:12
            },
            axisTick:{
                show:false
            },
            splitLine:{
                show:false
            },
        },
        series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '50%',
            data: [202, 195, 245, 225, 275, 264, 215, 227, 213, 215,190,230]
        }, ],
        label: {
            normal: {
                show: true,
                position: 'top',
                formatter: '{c}'
            }
        },
        itemStyle: {
            normal: {
                color: '#15c8d0',
            }
        }
    };
    myChart.setOption(option, true);
    window.onresize = myChart.resize;
}