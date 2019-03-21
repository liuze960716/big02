
function shui() {
    var dom = document.getElementById("add");
    var myChart = echarts.init(dom);
    var category = ['福建', '湖北','江苏', '浙江', '广东', '湖南', '山西'];
    var barData = [198, 164, 144,118,92 , 60, 50];

    var option = {
        title: {
            text: '生源地Top10',
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
            left: '10%',
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
