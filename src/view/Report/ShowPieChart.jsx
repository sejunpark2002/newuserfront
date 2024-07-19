import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { Box } from '@mui/system';

const ShowPieChart = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        boxShadow: 2,
        borderRadius: '16px',
        padding: '20px',
      }}
    >
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 1, label: 'series A' },
              { id: 1, value: 1, label: 'series B' },
              { id: 2, value: 1, label: 'series C' },
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
