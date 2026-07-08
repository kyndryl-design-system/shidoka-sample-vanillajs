import '@kyndryl-design-system/shidoka-foundation/scss/root.scss';
import '@kyndryl-design-system/shidoka-foundation/scss/utility/typography.scss';
import '@kyndryl-design-system/shidoka-foundation/scss/utility/grid.scss';

import '@kyndryl-design-system/shidoka-applications/components/global/uiShell';
import '@kyndryl-design-system/shidoka-applications/components/global/header';
import '@kyndryl-design-system/shidoka-applications/components/global/localNav';
import '@kyndryl-design-system/shidoka-applications/components/global/footer';
import '@kyndryl-design-system/shidoka-applications/components/reusable/pageTitle';

import '@kyndryl-design-system/shidoka-charts/components/chart';

import circleIcon from '@kyndryl-design-system/shidoka-icons/svg/monochrome/16/circle-stroke.svg?raw';
import userAvatarIcon from '@kyndryl-design-system/shidoka-icons/svg/monochrome/20/user.svg?raw';

import './styles.css';

const icons = {
  circle: circleIcon,
  user: userAvatarIcon,
};

document.querySelectorAll('[data-icon]').forEach((el) => {
  const icon = icons[el.dataset.icon];
  if (icon) {
    el.innerHTML = icon;
  }
});

const chartLabels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

const chartOptions = {
  scales: {
    x: {
      title: {
        text: 'Color',
      },
    },
    y: {
      title: {
        text: 'Votes',
      },
    },
  },
};

const barChart = document.getElementById('bar-chart');
barChart.labels = chartLabels;
barChart.datasets = [
  {
    label: 'Dataset 1',
    data: [12, 19, 3, 5, 2, 3],
  },
  {
    label: 'Dataset 2',
    data: [8, 15, 7, 9, 6, 12],
  },
];
barChart.options = chartOptions;

const doughnutChart = document.getElementById('doughnut-chart');
doughnutChart.labels = chartLabels;
doughnutChart.datasets = [
  {
    label: 'Dataset 1',
    data: [12, 19, 3, 5, 2, 3],
  },
];
doughnutChart.options = chartOptions;
