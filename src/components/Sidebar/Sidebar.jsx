import React from 'react';
import { Box, VStack, Link, Button, Icon, Flex, Image } from '@chakra-ui/react';
import { FaCog } from 'react-icons/fa';
import { GoHome } from 'react-icons/go'; 
import { FiClock, FiMail } from 'react-icons/fi';
import { BsCalendarWeek, BsFolder2, BsBarChartLine } from 'react-icons/bs';
import { IoExitOutline } from 'react-icons/io5'; 
import logo from "../../assets/logo.png"
const iconStyle = {
  fontSize: '32px', 
  color: '#f2f2f2',
};

const Sidebar = () => {
  return (
    <Flex
      w="10vh"
      h="100vh"
      bg="#014B54"
      color="#f2f2f2"
      direction="column" 
      justifyContent="space-between"
      align="center"
      p={4}
      position="fixed"
    >
      <Box>
        <Image src={logo} alt="Logo" />
      </Box>
        
        <Box>

      <VStack spacing={5} flex="1" mt={-60}> 
        <Link href="#">
          <Button
            leftIcon={<Icon as={GoHome} style={iconStyle} />}
            variant="link"
          ></Button>
        </Link>
        <Link href="#">
          <Button
            leftIcon={<Icon as={FiClock} style={iconStyle} />}
            variant="link"
          ></Button>
        </Link>
        <Link href="#">
          <Button
            leftIcon={<Icon as={BsCalendarWeek} style={iconStyle} />}
            variant="link"
          ></Button>
        </Link>
        <Link href="#">
          <Button
            leftIcon={<Icon as={BsBarChartLine} style={iconStyle} />} 
            variant="link"
          ></Button>
        </Link>
        <Link href="#">
          <Button
            leftIcon={<Icon as={FiMail} style={iconStyle} />}
            variant="link"
          ></Button>
        </Link>
        <Link href="#">
          <Button
            leftIcon={<Icon as={BsFolder2} style={iconStyle} />} 
            variant="link"
          ></Button>
        </Link>
        <Link href="#">
          <Button
            leftIcon={<Icon as={FaCog} style={iconStyle} />}
            variant="link"
          ></Button>
        </Link>
      </VStack>
        </Box>
        
      <Box>
        <Link href="#">
          <Button
            leftIcon={<Icon as={IoExitOutline} style={iconStyle} />}
            variant="link"
          ></Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Sidebar;
