var chart1XValues = ["No of Bees", "Small Colony Size", "Large Colony Size"];
var chart1YValues = [10000, 10000, 80000];
var chart2XValues = ["Number of Days", "Average Lifespan of a Bee", "Average Nectar Flow Length"];
var chart2YValues = [1, 21, 100];
var chart3XValues = ["Average Nectar Amount", "Small Amount of Nectar", "Large Amount of Nectar"];
var chart3YValues = [20, 20, 50];

var chart1BarBgColors = [
  'rgba(246, 174, 45, .5)',
  'rgba(134, 134, 134, .3)',
  'rgba(134, 134, 134, .3)'
];
var chart1BarBorderColors = [
  'rgba(246, 174, 45, .7)',
  'rgba(134, 134, 134, .5)',
  'rgba(134, 134, 134, .5)'
];

chart2BarBorderColors = chart1BarBorderColors.slice();
chart2BarBgColors = chart1BarBgColors.slice();
chart2BarBgColors[0]= 'rgba(242, 100, 25, .5)';
chart2BarBorderColors[0]= 'rgba(242, 100, 25, .7)';

chart3BarBorderColors = chart1BarBorderColors.slice();
chart3BarBgColors = chart1BarBgColors.slice();
chart3BarBgColors[0]= 'rgba(238, 26, 5, .5)';
chart3BarBorderColors[0]= 'rgba(238, 26, 5, .7)';


beeChart1 = new Chart("myChart1", {
  type: 'bar',
  data: {
    labels: chart1XValues,
    datasets: [{
      label: 'Move slider below chart',
      axis: 'y',  
      backgroundColor: chart1BarBgColors,
      borderColor: chart1BarBorderColors,
      borderWidth: 2,
      data: chart1YValues
    }]
  },
  options: {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      yAxes: [{
          display: true,
          ticks: {
              beginAtZero: true
          }
      }]
    },
    title: {
      display: true,
      text: "Number of Bees"
    }
  }
});


beeChart2 = new Chart("myChart2", {
  type: "bar",
  data: {
    labels: chart2XValues,
    datasets: [{
      label: 'Move slider below chart',
      axis: 'y',  
      backgroundColor: chart2BarBgColors,
      borderColor: chart2BarBorderColors,
      borderWidth: 2,
      data: chart2YValues
    }]
  },
  options: {
    scales: {
      yAxes: [{
          display: true,
          ticks: {
              beginAtZero: true
          }
      }]
    },
    title: {
      display: true,
      text: "Number of Days"
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
});

beeChart3 = new Chart("myChart3", {
  type: "bar",
  data: {
    labels: chart3XValues,
    datasets: [{
      label: 'Move slider below chart',
      axis: 'y',  
      backgroundColor: chart3BarBgColors,
      borderColor: chart3BarBorderColors,
      borderWidth: 2,
      data: chart3YValues
    }]
  },
  options: {
    scales: {
      yAxes: [{
          display: true,
          ticks: {
              beginAtZero: true
          }
      }]
    },
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
});


function changeValue (source, target) {
    target.value=source.value;
    switch (source) {
      case sliderInput1:
      case textInput1:
        {
          beeChart1.config.data.datasets[0].data[0]=source.value;
          beeChart1.update();
          updateDashboard();
        }
      break;
      case sliderInput2:
      case textInput2:
        {
          beeChart2.config.data.datasets[0].data[0]=source.value;
          beeChart2.update();
          updateDashboard();
        }
      break;
      case sliderInput3:
      case textInput3:
        {
          beeChart3.config.data.datasets[0].data[0]=source.value;
          beeChart3.update();
          updateDashboard();
        }
      break;
    }
    
}

function updateDashboard() {
  var num1 = (Number(beeChart1.config.data.datasets[0].data[0]).toLocaleString());
  var num2 = (Number(beeChart2.config.data.datasets[0].data[0]).toLocaleString());
  var num3 = (Number(beeChart3.config.data.datasets[0].data[0]).toLocaleString());

  document.getElementById('topText').innerHTML = 
    'YOUR INPUT</br></br>' +
    'Bees: <font class="bigTextYellow"> ' + num1 + ' </font></br>' +
    'Days: <font class="bigTextOrange"> ' + num2 + ' </font></br>' +
    'Nectar/flight: <font class="bigTextRed">' + num3 + ' </font>mg</br>';

  document.getElementById('bigText1').innerHTML = 
    Number(beeChart1.config.data.datasets[0].data[0] * beeChart2.config.data.datasets[0].data[0] * beeChart3.config.data.datasets[0].data[0]/1000000).toLocaleString();
  document.getElementById('bigText2').innerHTML = 
    Number(beeChart1.config.data.datasets[0].data[0] * beeChart2.config.data.datasets[0].data[0] * beeChart3.config.data.datasets[0].data[0]/1000/7.08).toLocaleString();
  document.getElementById('bigText3').innerHTML = 
    Number(beeChart1.config.data.datasets[0].data[0] * beeChart2.config.data.datasets[0].data[0] * beeChart3.config.data.datasets[0].data[0]/1000/42.5).toLocaleString();
  document.getElementById('bigText4').innerHTML = 
    Number(beeChart1.config.data.datasets[0].data[0] * beeChart2.config.data.datasets[0].data[0] * 1500).toLocaleString();
}


updateDashboard();