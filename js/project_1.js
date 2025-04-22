document.addEventListener('DOMContentLoaded', function() {
    // Metrics Chart
    const metricsChart = echarts.init(document.getElementById('metricsChart'));
    const option = {
        animation: false,
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            textStyle: {
                color: '#1f2937'
            }
        },
        legend: {
            data: ['Before Redesign', 'After Redesign'],
            textStyle: {
                color: '#1f2937'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['User Engagement', 'Session Duration', 'Feature Discovery', 'User Retention', 'New Signups'],
            axisLabel: {
                color: '#1f2937'
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value}%',
                color: '#1f2937'
            }
        },
        series: [
            {
                name: 'Before Redesign',
                type: 'line',
                smooth: true,
                lineStyle: {
                    width: 3,
                    color: 'rgba(141, 211, 199, 1)'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(141, 211, 199, 0.3)' },
                        { offset: 1, color: 'rgba(141, 211, 199, 0.1)' }
                    ])
                },
                data: [42, 35, 28, 45, 30]
            },
            {
                name: 'After Redesign',
                type: 'line',
                smooth: true,
                lineStyle: {
                    width: 3,
                    color: 'rgba(87, 181, 231, 1)'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(87, 181, 231, 0.3)' },
                        { offset: 1, color: 'rgba(87, 181, 231, 0.1)' }
                    ])
                },
                data: [89, 82, 76, 85, 58]
            }
        ]
    };
    metricsChart.setOption(option);

    // Handle window resize
    window.addEventListener('resize', function() {
        metricsChart.resize();
    });

    // Back to Top Button
    const backToTopButton = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.remove('opacity-0', 'invisible');
            backToTopButton.classList.add('opacity-100', 'visible');
        } else {
            backToTopButton.classList.remove('opacity-100', 'visible');
            backToTopButton.classList.add('opacity-0', 'invisible');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}); 