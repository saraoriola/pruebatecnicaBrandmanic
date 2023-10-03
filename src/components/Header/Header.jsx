import React from 'react';
import { Box, Flex, Input, InputGroup, InputRightElement, Button, Avatar, Text, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';

const Header = () => {
  return (
    <Box p={7}>
      <Flex alignItems="center" justifyContent="space-between">
        <InputGroup width={500}>
          <Input
          height={10}
            type="text"
            placeholder="Buscar"
            borderRadius={20}
            bgColor="#f2f2f2"
            _placeholder={{ color: 'gray.400' }}
            boxShadow="inset 0 0 8px rgba(0, 0, 0, 0.1)"
          />
          <InputRightElement width="3rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => {}}
              color={"#014B54"}
            >
              <SearchIcon />
            </Button>
          </InputRightElement>
        </InputGroup>
        <Flex alignItems="center">
          <Avatar size="sm" name="S O" src="URL de la imagen" mr={3} />
          <Menu>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="link" color="#014B54">
              <Text fontWeight="bold" color="#014B54">Sara Oriola</Text>
            </MenuButton>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
