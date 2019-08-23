(function ($) {
  $(document).ready(function(){

    // Mini Flush Charts
    var $flushAreaChartBlue = $('#flush-area-chart-blue');
    if ($flushAreaChartBlue.length) {
      var blueData = {
        labels: ['one', 'two', 'three', 'four', 'five'],
        datasets: [{
          backgroundColor: chartColorBlue,
          borderColor: chartColorBlue,
          data: [2,4,7,3,8],
          label: 'Number'
        }]
      };
      var flushAreaChartBlue = new Chart($flushAreaChartBlue, {
        type: 'line',
        data: blueData,
        options: flushChartOptions
      });
    }

    var $flushAreaChartYellow = $('#flush-area-chart-yellow');
    if ($flushAreaChartYellow.length) {
      var yellowData = {
        labels: ['one', 'two', 'three', 'four', 'five'],
        datasets: [{
          backgroundColor: chartColorYellow,
          borderColor: chartColorYellow,
          data: [5,6,3,3,9],
          label: 'Number'
        }]
      };
      var flushAreaChartYellow = new Chart($flushAreaChartYellow, {
        type: 'line',
        data: yellowData,
        options: flushChartOptions
      });
    }

    var $flushAreaChartPink = $('#flush-area-chart-pink');
    if ($flushAreaChartPink.length) {
      var pinkData = {
        labels: ['one', 'two', 'three', 'four', 'five'],
        datasets: [{
          backgroundColor: chartColorPink,
          borderColor: chartColorPink,
          data: [7,5,3,6,6],
          label: 'Number'
        }]
      };
      var flushAreaChartPink = new Chart($flushAreaChartPink, {
        type: 'line',
        data: pinkData,
        options: flushChartOptions
      });
    }

    var $flushAreaChartGreen = $('#flush-area-chart-green');
    if ($flushAreaChartGreen.length) {
      var greenData = {
        labels: ['one', 'two', 'three', 'four', 'five'],
        datasets: [{
          backgroundColor: chartColorGreen,
          borderColor: chartColorGreen,
          data: [9,3,7,5,4],
          label: 'Number'
        }]
      };
      var flushAreaChartGreen = new Chart($flushAreaChartGreen, {
        type: 'line',
        data: greenData,
        options: flushChartOptions
      });
    }


    // Doughnut chart
    var doughnutTooltip = Object.assign({}, tooltipsOpts);
    doughnutTooltip.intersect = true;
    doughnutTooltip.callbacks = { footer: percentageFooterCallback };
    delete doughnutTooltip.mode;

    var doughnutChart = $('#doughnut-chart');
    if (doughnutChart.length) {
      var doughnutChartJS = new Chart(doughnutChart, {
        type: 'doughnut',
        data: {
          labels: ["Phone", "Tablet", "Laptop", "Desktop"],
          datasets: [{
            label: 'dataset 1',
            data: [12, 19, 3, 5],
            backgroundColor: [chartColorPink, chartColorBlue, chartColorYellow, chartColorGreen],
            borderWidth: 0
          }],
        },
        options: {
          tooltips: doughnutTooltip,
          legendCallback: doughnutLegendCallback,
          cutoutPercentage: 80
        }
      });
      doughnutChart.closest('.card-content').find('.chart-legend-wrapper').append($(doughnutChartJS.generateLegend()));
    }
