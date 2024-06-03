

import React, { useState } from 'react';
import { Box, Button, Grid, Text, VStack, Heading } from '@chakra-ui/react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
    checkWinner(newBoard);
  };

  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }

    if (board.every(Boolean)) {
      setWinner('Draw');
    }
  };

  const renderSquare = (index) => (
    <Button
      size="lg"
      height={{ base: '80px', md: '100px', lg: '120px' }}
      width={{ base: '80px', md: '100px', lg: '120px' }}
      onClick={() => handleClick(index)}
      colorScheme="gray"
      variant="solid"
      fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
      fontWeight="bold"
      borderRadius="md"
      _hover={{ bg: 'gray.600' }}
      boxShadow="lg"
      bg="white"
      borderWidth="1px"
      borderColor="gray.300"
    >
      <Text
        fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
        fontWeight="extrabold"
        color={board[index] === 'X' ? 'red.500' : 'blue.500'}
        textShadow="2px 2px #000"
      >
        {board[index]}
      </Text>
    </Button>
  );

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <VStack
      spacing={4}
      align="center"
      minH="100vh"
      justifyContent="center"
      p={4}
      color="white"
    >
      <Heading fontSize="4xl" mb={4} textAlign="center">
        Tic Tac Toe
      </Heading>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={4}
        p={4}
        borderRadius="md"
        bg="gray.700"
        boxShadow="xl"
      >
        {board.map((_, index) => renderSquare(index))}
      </Grid>
      {winner && (
        <Box mt={4} textAlign="center">
          <Text fontSize="2xl" fontWeight="bold" color={winner === 'X' ? 'red.300' : 'blue.300'}>
            {winner === 'Draw' ? 'It\'s a Draw!' : `Winner: ${winner}`}
          </Text>
          <Button mt={2} onClick={resetGame} colorScheme="teal" size="lg" variant="outline">
            Reset Game
          </Button>
        </Box>
      )}
    </VStack>
  );
};

export default TicTacToe;