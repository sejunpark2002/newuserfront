import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const ShowPieChart = ({ title, data, label }) => {
  const totalmanagers = data.filter((user) => user.role === 'manager').length;
  const totaldevelopers = data.filter(
    (user) => user.role === 'developer'
  ).length;
  const totaldesigners = data.filter(
    (user) => user.role === 'designers'
  ).length;

  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        boxShadow: 2,
        borderRadius: '16px',
        padding: '20px',
      }}
    >
      <Typography
        sx={{
          fontSize: '20px',
          fontFamily: 'Inter',
          fontWeight: '600',
          color: '#1A191D',
          mb: '30px',
        }}
      >
        {title}
      </Typography>

      <PieChart
        series={[
          {
            data: [
              { id: 0, value: totalmanagers, label: label[0] },
              { id: 1, value: totaldevelopers, label: label[1] },
              { id: 2, value: totaldesigners, label: label[2] },
            ],
          },
        ]}
        width={400}
        height={200}
      />
    </Box>
  );
};

export default ShowPieChart;
