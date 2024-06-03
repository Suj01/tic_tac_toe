
import React from 'react';
import { Box } from '@chakra-ui/react';
import TicTacToe from './componenets/TicTacToe';

const App = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bgGradient="linear(to-r, purple.500, pink.500)"
      p={4}
    >
      <TicTacToe />
    </Box>
  );
};

export default App;
