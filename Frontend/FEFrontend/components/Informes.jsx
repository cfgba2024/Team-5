import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { PieChart } from '@mui/x-charts/PieChart';
import { legendClasses } from '@mui/x-charts/ChartsLegend';

const dataset = [
  { name: 'Austria', code: 'AT', gdp: 471 },
  { name: 'Belgium', code: 'BE', gdp: 583 },
  { name: 'Bulgaria', code: 'BG', gdp: 90.35 },
  { name: 'Croatia', code: 'HR', gdp: 71.6 },
  { name: 'Czech Republic', code: 'CZ', gdp: 291 },
  { name: 'Denmark', code: 'DK', gdp: 400 },
  { name: 'Finland', code: 'FI', gdp: 283 },
  { name: 'France', code: 'FR', gdp: 2779 },
  { name: 'Germany', code: 'DE', gdp: 4082 },
  { name: 'Greece', code: 'GR', gdp: 218 },
  { name: 'Hungary', code: 'HU', gdp: 177 },
  { name: 'Ireland', code: 'IE', gdp: 533 },
  { name: 'Italy', code: 'IT', gdp: 2050 },
  { name: 'Netherlands', code: 'NL', gdp: 1009 },
  { name: 'Poland', code: 'PL', gdp: 688 },
  { name: 'Portugal', code: 'PT', gdp: 255 },
  { name: 'Romania', code: 'RO', gdp: 301 },
  { name: 'Slovakia', code: 'SK', gdp: 115 },
  { name: 'Spain', code: 'ES', gdp: 1418 },
  { name: 'Sweden', code: 'SE', gdp: 591 },
];

const chartParams = {
  yAxis: [
    {
      label: 'GDP (million $USD)',
    },
  ],
  series: [
    {
      label: 'GDP',
      dataKey: 'gdp',
      valueFormatter: (v) =>
        new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          compactDisplay: 'short',
          notation: 'compact',
        }).format((v || 0) * 1_000_000),
    },
  ],
  slotProps: { legend: { hidden: true } },
  dataset,
  width: 600,
  height: 400,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(-20px, 0)',
    },
  },
};
const otherProps = {
  width: 400,
  height: 200,
  sx: {
    [`.${legendClasses.root}`]: {
      transform: 'translate(20px, 0)',
    },
  },
};

const data = [
  { team: 'Amber Ants', rank: 3, points: 31 },
  { team: 'Eagle Warriors', rank: 1, points: 50 },
  { team: 'Elephant Trunk', rank: 4, points: 18 },
  { team: 'Jaguars', rank: 2, points: 37 },
  { team: 'Smooth Pandas', rank: 5, points: 6 },
];

export function SeriesFormatter() {
  return (
    <PieChart
      series={[
        {
          data: data.map((d) => ({ label: d.team, id: d.team, value: d.points })),
          valueFormatter: (v, { dataIndex }) => {
            const { rank } = data[dataIndex];
            return `has ${v.value} points and is ranked ${rank}.`;
          },
        },
      ]}
      {...otherProps}
    />
  );
}

export function AxisFormatter() {
  return (
    <BarChart
      xAxis={[
        {
          scaleType: 'band',
          dataKey: 'code',
          valueFormatter: (code, context) =>
            context.location === 'tick'
              ? code
              : `Country: ${dataset.find((d) => d.code === code)?.name} (${code})`,
        },
      ]}
      {...chartParams}
    />
  );
}

