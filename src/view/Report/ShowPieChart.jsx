import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

const ShowPieChart = ({ title, data }) => {
  const entries = Object.entries(data);

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
              { id: 0, value: entries[0][1], label: entries[0][0] },
              { id: 1, value: entries[1][1], label: entries[1][0] },
              { id: 2, value: entries[2][1], label: entries[2][0] },
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
