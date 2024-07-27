import React from 'react';
import { Box } from '@mui/system';
import { LineChart } from '@mui/x-charts/LineChart';

const ShowLineChart = () => {
  const xLabels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Agu',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        boxShadow: 2,
        borderRadius: '16px',
        padding: '20px',
      }}
    >
      <LineChart
        xAxis={[{ scaleType: 'point', data: xLabels, label: 'Month' }]}
        yAxis={[
          {
            min: 0,
            max: 50,
            label: 'Number of Users',
            labelOffset: 20,
          },
        ]}
        series={[
          {
            data: [10, 30, 40, 30, 20, 10, 20, 30, 40, 10, 14, 20],
            label: 'Users',
          },
        ]}
        width={500}
        height={300}
      />
    </Box>
  );
};

export default ShowLineChart;
