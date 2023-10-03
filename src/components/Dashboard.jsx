import React from 'react'
import Header from './Header/Header'
import { Box } from '@chakra-ui/react'

const Dashboard = () => {
  return (
    <Box bg="#014B54">
      <Box bg={"#f2f2f2"} h="100vh" ml="100px"  borderStartRadius={50}> 
            <Header/>      
      </Box>
    </Box>
  )
}

export default Dashboard