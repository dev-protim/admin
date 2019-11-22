'use strict';

// function toggleButton() {

//     var toggleIconRotate = document.getElementById("toggleCollapse").classList;

//     if(toggleIconRotate.contains("toggle-button")) {
//         toggleIconRotate.remove("toggle-button");
//     }

//     else {
//         toggleIconRotate.add("toggle-button");
//     }

//     if(toggleIconRotate.contains("toggle-collapsed")) {
//         toggleIconRotate.remove("toggle-collapsed");
//     }

//     else {
//         toggleIconRotate.add("toggle-collapsed");
//     }
// };

$(document).ready(function() {

    

    $('.owl-carousel').owlCarousel({
        loop:true,
        stagePadding: 50,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });


     // chartJs function for line chart in analytics.html

     var actx = document.getElementById('bChart').getContext('2d');
     var gradient = actx.createLinearGradient(0, 0, 0, 450);
     gradient.addColorStop(0, 'rgba(249, 202, 55, 0.5)');
     gradient.addColorStop(0.5, 'rgba(249, 202, 55, 0.1)');
     var bchart = new Chart(actx, {
         type: 'line',
         data: {
 
             labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
             datasets: [{
                 label: 'My First dataset',
                 backgroundColor: gradient,
                 borderColor: '#F9CA37',
                 data: [50, 70, 65, 60, 58, 62, 52],
                 pointHoverBorderColor: '#fff',
                 pointBackgroundColor: '#F9CA37',
                 pointHoverBackgroundColor: '#F9CA37',
                 pointBorderWidth: 3,
                 pointHoverBorderWidth: 5,
                 pointRadius: 5,
                 pointHoverRadius: 5,
             }]
         },
 
         options: {
 
             responsive: true,
 
             animation: {
                 easing: 'easeInOutQuad',
                 duration: 520
             },
 
             tooltips: {
                 callbacks: {
                     label: function(tooltipItem) {
                         return "Total Expense: " + " $ " + Number(tooltipItem.yLabel);
                     }
                 }
             },
 
             legend: {
                 display: false,
                 spanGaps: true,

                 labels: {
                    defaultFontFamily: "'Roboto', sans-serif",
                }
             },
 
             scales: {
                 yAxes: [{
                     ticks: {
                         suggestedMin: 55,
                         suggestedMax: 75,
                         padding: 20,
                         fontColor: "#828E8F",
                     },
 
                     gridLines: {
                         display:true,
                         drawBorder: false,
                         borderDash: [10, 6],
                     },
                 }],
 
                 xAxes: [{
 
                     ticks: {
                         fontColor: "#828E8F",
                     },
 
                     gridLines: {
                         display: false
                     }
                 }]
             }
         },
     });	

    // chartJs function for line chart in analytics.html

    var actx = document.getElementById('aChart').getContext('2d');
    var gradient = actx.createLinearGradient(0, 0, 0, 450);
    gradient.addColorStop(0, 'rgba(136, 108, 254, 0.5)');
    gradient.addColorStop(0.5, 'rgba(136, 108, 254, 0.1)');
    var achart = new Chart(actx, {
        type: 'line',

        data: {

            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: gradient,
                borderColor: '#886CFE',
                data: [50, 63, 55, 60, 58, 62, 52],
                pointBorderColor: '#fff',
                pointHoverBorderColor: '#fff',
                pointBackgroundColor: '#886CFE',
                pointHoverBackgroundColor: '#886CFE',
                pointBorderWidth: 3,
                pointHoverBorderWidth: 5,
                pointRadius: 5,
                pointHoverRadius: 5,
            }]
        },

        options: {

            responsive: true,

            animation: {
                easing: 'easeInOutQuad',
                duration: 520
            },

            tooltips: {
                callbacks: {
                    label: function(tooltipItem) {
                        return "Total Expense: " + " $ " + Number(tooltipItem.yLabel);
                    }
                }
            },

            legend: {
                display: false,
                spanGaps: true,

                labels: {
                    defaultFontFamily: "'Roboto', sans-serif",
                }
            },

            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 55,
                        suggestedMax: 75,
                        padding: 20,
                        fontColor: "#828E8F",
                    },

                    gridLines: {
                        display:true,
                        drawBorder: false,
                        borderDash: [10, 6],
                    },
                }],

                xAxes: [{

                    ticks: {
                        fontColor: "#828E8F",
                    },

                    gridLines: {
                        display: false
                    }
                }]
            }
        },
    });	

    // chartJs function for doughnut chart in analyics.html

    Chart.defaults.global.legend.labels.usePointStyle = true;
    new Chart(document.getElementById("doughnutChart"), {
        type: 'doughnut',
        data: {
          labels: ["Wordpress", "joomla", "React"],
          datasets: [
            {
                backgroundColor: ["#F9CA37", "#33C636","#0087E5"],
                hoverBackgroundColor: ["#F9CA37", "#33C636","#0087E5"],
                data: [470,240,360],
                borderWidth: 1,
                hoverBorderColor: "#fff",
                weight: 100
            }
          ]
        },

        options: {
            responsive: true,

            legend: {
                position: 'bottom',
                labels: {
                    padding: 30,
                    defaultFontFamily: "'Roboto', sans-serif",
                },
            },
        }
    });

    // chartJs function for radar chart in analyics.html

    Chart.defaults.global.legend.labels.usePointStyle = true;
    var marksCanvas = document.getElementById("radar-chart");

    var marksData = {
        labels: ["Wordpress", "joomla", "React"],
        datasets: [{
            label: "Project A",
            backgroundColor: "transparent",
            borderColor: "#886CFE",
            borderWidth: 2,
            data: [75, 75, 75]
        }, 
        
        {
            label: "Project B",
            backgroundColor: "transparent",
            borderColor: "#F9CA37",
            borderWidth: 2,
            data: [72, 74, 75]
        }],

        
    };

    var radarChart = new Chart(marksCanvas, {
        type: 'radar',
        data: marksData,

        options: {

            responsive: true,

            legend: {
                position: 'bottom',
                labels: {
                    padding: 30,
                    fontColor: '#828E8F',
                    defaultFontFamily: "'Roboto', sans-serif",
                },
            },

            scale: {

                gridLines: {
                    borderDash: [10, 6],
                },
    
                ticks: {
                    display: true,
                    padding: 20,
                },
            },
        },
    });

    // chartJs function for line chart in analyics.html

    new Chart(document.getElementById("smallChart1"), {
        type: 'line',
        data: {
 
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [{
                backgroundColor: "transparent",
                borderColor: '#0087E5',
                data: [2, 5, 3, 4, 2],
                pointBackgroundColor: '#fff',
                pointHoverBackgroundColor: '#fff',
            }]
        },
    
        options: {
    
            legend: {
                display: false,
            },

            layout: {
                padding: {
                    right: 15,
                }
            },
            
            title: {
                display: true,
            },

            tooltips: {
                callbacks: {
                    label: function(tooltipItem) {
                        return "Total Expense: " + " $ " + Number(tooltipItem.yLabel);
                    }
                }
            },

            scales: {
                yAxes: [{
                    ticks: {
                        display: false,
                    },

                    gridLines: {
                        display: false,
                        drawBorder: false,
                        color: '#828E8F',
                    },
                }],

                xAxes: [{

                    ticks: {
                        display: false,
                    },

                    gridLines: {
                        display: false,
                        drawBorder: false,
                    }
                }]
            }
        }
    });

    // chartJs function for line chart in analyics.html

    new Chart(document.getElementById("smallChart2"), {
        type: 'line',
        data: {
 
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [{
                backgroundColor: "transparent",
                borderColor: '#886CFE',
                data: [2, 5, 3, 4, 2],
                pointBackgroundColor: '#fff',
                pointHoverBackgroundColor: '#fff',
            }]
        },
    
        options: {
    
            legend: {
                display: false,
            },

            layout: {
                padding: {
                    right: 15,
                }
            },
            
            //responsive: true,
            title: {
                display: true,
            },

            tooltips: {
                callbacks: {
                    label: function(tooltipItem) {
                        return "Total Expense: " + " $ " + Number(tooltipItem.yLabel);
                    }
                }
            },

            scales: {
                yAxes: [{
                    ticks: {
                        display: false,
                    },

                    gridLines: {
                        display: false,
                        drawBorder: false,
                        color: '#828E8F',
                    },
                }],

                xAxes: [{

                    ticks: {
                        display: false,
                    },

                    gridLines: {
                        display: false,
                        drawBorder: false,
                    }
                }]
            }
        }
    });

    // chartJs function for line chart in analyics.html

    new Chart(document.getElementById("smallChart3"), {
        type: 'line',
        data: {
 
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [{
                backgroundColor: "transparent",
                borderColor: '#C13A70',
                data: [2, 5, 3, 4, 2],
                pointBackgroundColor: '#fff',
                pointHoverBackgroundColor: '#fff',
            }]
        },
    
        options: {
    
            legend: {
                display: false,
            },

            layout: {
                padding: {
                    right: 15,
                }
            },
            
            //responsive: true,
            title: {
                display: true,
            },

            tooltips: {
                callbacks: {
                    label: function(tooltipItem) {
                        return "Total Expense: " + " $ " + Number(tooltipItem.yLabel);
                    }
                }
            },

            scales: {
                yAxes: [{
                    ticks: {
                        display: false,
                    },

                    gridLines: {
                        display: false,
                        drawBorder: false,
                        color: '#828E8F',
                    },
                }],

                xAxes: [{

                    ticks: {
                        display: false,
                    },

                    gridLines: {
                        display: false,
                        drawBorder: false,
                    }
                }]
            }
        }
    });

    // chartJs function for line chart in analyics.html

    new Chart(document.getElementById("smallChart4"), {
        type: 'line',
        data: {
 
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            datasets: [{
                backgroundColor: "transparent",
                borderColor: '#F9CA37',
                data: [2, 5, 3, 4, 2],
                pointBackgroundColor: '#fff',
                pointHoverBackgroundColor: '#fff',
            }]
        },
    
        options: {
    
            legend: {
                display: false,
            },

            layout: {
                padding: {
                    right: 15,
                }
            },
            
            //responsive: true,
            title: {
                display: true,
            },

            tooltips: {
                callbacks: {
                    label: function(tooltipItem) {
                        return "Total Expense: " + " $ " + Number(tooltipItem.yLabel);
                    }
                }
            },

            scales: {
                yAxes: [{
                    ticks: {
                        display: false,
                    },

                    gridLines: {
                        display: false,
                        drawBorder: false,
                        color: '#828E8F',
                    },
                }],

                xAxes: [{

                    ticks: {
                        display: false,
                    },

                    gridLines: {
                        display: false,
                        drawBorder: false,
                    }
                }]
            }
        }
    });

    // chartJs function for bar chart in analytics.html

    var amixedCtx = document.getElementById('ana-barChart').getContext('2d');
    var anabarmixed = amixedCtx.createLinearGradient(0, 0, 0, 450);
    anabarmixed.addColorStop(0, "rgba(27, 107, 255, 0.2)");
    anabarmixed.addColorStop(1, "rgba(27, 107, 255, 0)");
    var aChart = new Chart(amixedCtx, {
        type: 'bar',
        data: {
            labels: ["January", "February", "March", "April", "May", "Jun", "Jul"],
            datasets: [
            {
                type: 'bar',
                labels: false,
                borderColor: "#1B6BFF",
                backgroundColor: '#1B6BFF',
                hoverBackgroundColor: '#1B6BFF',
                data: [140,100,120,140,120,130, 140],
                yAxisID: "bar-y-axis",
            },

            {
                type: 'bar',
                labels: false,
                borderColor: 'rgba(27, 107, 255, 0.2)',
                backgroundColor: 'rgba(27, 107, 255, 0.2)',
                hoverBackgroundColor: 'rgba(27, 107, 255, 0.2)',
                data: [140,100,120,170,120,130, 140],
                yAxisID: "bar-y-axis",
            },

            {
                label: "Nazmul",
                type: "line",
                backgroundColor: anabarmixed,
                borderColor: "#fff",
                data: [140,100,120,170,120,130,140],
                fill: true,
                pointBorderColor: '#886CFE',
                pointBackgroundColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointBorderWidth: 3,
                pointHoverBorderWidth: 3,
                pointRadius: 5,
                pointHoverRadius: 5,
            }],
            
        },

        options: {
            datasetFill: false,
            scaleShowVerticalLines: false,
            responsive: true,
            legend: {
                display: false,

                labels: {
                    fontColor: '#828E8F',
                    defaultFontFamily: "'Roboto', sans-serif",
                }
            },

            scales: {
                yAxes: [{
                    stacked: true,
                    ticks: {
                        suggestedMin: 0,
                        suggestedMax: 160,
                        padding: 20,
                        fontColor: '#828E8F',
                    },

                    gridLines: {
                        display: true,
                        drawBorder: false,
                        zeroLineColor: '#828E8F',
                        borderDash: [10, 6],
                    },
                },
            
                {
                    id: "bar-y-axis",
                    ticks: {
                        beginAtZero: true,
                        fontColor: "#fff",
                    },
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    type: 'linear'
                }],

                xAxes: [{
                    maxBarThickness: 45,
                    stacked: true,
                    ticks: {
                        beginAtZero: true,
                        fontColor: "#828E8F",
                    },

                    gridLines: {
                        display: false,
                        drawBorder: false,
                        color: '#fff',
                        borderDash: [10, 6],
                    },
                }],
                
            }
        }
    });

    

    
});


// chartJs function for line chart in index.html
var ctx = document.getElementById('myChart').getContext('2d');
var gradient = ctx.createLinearGradient(0, 0, 0, 450);
gradient.addColorStop(0, 'rgba(0, 135, 229, 0.3)');
gradient.addColorStop(0.6, 'rgba(0, 135, 229, 0.0)');
var chart = new Chart(ctx, {
    type: 'line',
    data: {

        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: gradient,
            borderColor: '#0087E5',
            data: [55, 60, 58, 65, 62, 61, 58, 60, 57, 65, 62, 60],
            pointBorderColor: '#fff',
            pointBackgroundColor: '#0087E5',
            pointHoverBackgroundColor: '#0087E5',
            pointBorderWidth: 3,
            pointHoverBorderWidth: 3,
            pointRadius: 5,
            pointHoverRadius: 5,
        }]
    },

    options: {

        responsive: true,

        animation: {
            easing: 'easeInOutQuad',
            duration: 520
        },

        tooltips: {
            callbacks: {
                label: function(tooltipItem) {
                    return "Total Expense: " + " $ " + Number(tooltipItem.yLabel);
                }
            }
        },

        legend: {
            display: false,
            spanGaps: true,

            labels: {
                defaultFontFamily: "'Roboto', sans-serif",
            },
        },

        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 50,
                    suggestedMax: 75,
                    padding: 20,
                    fontColor: "#828E8F",
                },

                gridLines: {
                    borderDash: [10, 6],
                    display:true,
                    drawBorder: false,
                },
            }],

            xAxes: [{

                ticks: {
                    fontColor: "#828E8F",
                },

                gridLines: {
                    display: false
                }
            }]
        }
    },
});

// chartJs function f chart in index.html
var mixedCtx = document.getElementById('index-bar-chart').getContext('2d');
var mixedgradient = ctx.createLinearGradient(0, 0, 0, 450);
mixedgradient.addColorStop(0, 'rgba(136, 108, 254, 0.3)');
mixedgradient.addColorStop(0.6, 'rgba(136, 108, 254, 0.0)');
var mixedChart = new Chart(mixedCtx, {
    type: 'bar',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "AppifyLab",
                data: [65, 63, 55, 60, 58, 62, 52, 72, 52, 60, 60, 65],
                borderColor: "#886CFE",
                borderWidth: 2,
                backgroundColor: mixedgradient,
                fill: true,
            }
        ]
    },

    options: {
        legend: { 
            display: false,

            labels: {
                defaultFontFamily: "'Roboto', sans-serif",
            },
        },

        tooltips: {
            callbacks: {
                label: function(tooltipItem) {
                    return "Total Earn: " + " $ " + Number(tooltipItem.yLabel);
                }
            }
        },

        title: {
            display: false,
        },

        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 55,
                    suggestedMax: 75,
                    padding: 20,
                },

                gridLines: {
                    display: true,
                    drawBorder: false,
                    borderDash: [10, 6],
                },
            }],

            xAxes: [{

                gridLines: {
                    display: false
                }
            }]
        }
    },
});

// chartJs function for polar chart in index.html
Chart.defaults.global.legend.labels.usePointStyle = true;
new Chart(document.getElementById("polar-chart"), {
    type: 'polarArea',
    data: {
      labels: ["Laravel", "Node JS", "Html"],
      
      datasets: [
        {
          backgroundColor: ["rgba(136, 108, 254, 0.5)", "rgba(193, 58, 112, 0.5)","rgba(0, 135, 229, 0.5)"],
          hoverBackgroundColor: ["rgba(136, 108, 254, 0.5)", "rgba(193, 58, 112, 0.5)","rgba(0, 135, 229, 0.5)"],
          borderWidth: 1,
          hoverBorderColor: "#fff",
          data: [90,80,70],
        }
      ]
    },

    options: {

        legend: {
            position: 'bottom',
            labels: {
                boxWidth: 10,
                padding: 30,
                fontColor: '#828E8F',
                defaultFontFamily: "'Roboto', sans-serif",
            },
        },
        
        title: {
            display: true,
        },

        scale: {

            gridLines: {
            },

            ticks: {
                display: true,
                padding: 20,
            },
        },
    }
});

// chartJs function for mixed chart in index.html
var mixedCtx = document.getElementById('bar-chart').getContext('2d');
var barmixed = mixedCtx.createLinearGradient(0, 0, 0, 450);
barmixed.addColorStop(0, "rgba(136, 108, 254, 0.2)");
barmixed.addColorStop(1, "rgba(136, 108, 254, 0)");
var mixedChart = new Chart(mixedCtx, {
    type: 'bar',
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [{
            label: "Page View",
            type: "bar",
            borderColor: "#1B6BFF",
            borderWidth: 2,
            backgroundColor: "#1B6BFF",
            data: [450,547,425,734,300,550],
        }, 
        
        {
            label: "Nazmul",
            type: "line",
            backgroundColor: barmixed,
            borderColor: "#fff",
            data: [450,547,425,734,300,550],
            fill: true,
            pointBorderColor: '#886CFE',
            pointBackgroundColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointBorderWidth: 3,
            pointHoverBorderWidth: 3,
            pointRadius: 5,
            pointHoverRadius: 5,
        },
      ]
    },

    options: {
        responsive: true,
        title: {
            display: false,
        },
        legend: { 
            display: false,

            labels: {
                defaultFontFamily: "'Roboto', sans-serif",
            }
        },

        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 750,
                    padding: 20,
                },

                gridLines: {
                    display: true,
                    drawBorder: false,
                    borderDash: [10, 6],
                },
            }],

            xAxes: [{

                gridLines: {
                    display: false
                }
            }]
        }
    }
});


