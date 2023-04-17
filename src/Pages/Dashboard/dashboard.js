import {
  Container,
  Box,
  Text,
  Spacer,
  Flex,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Login from "../../Components/Authentication/Login";
import SingUp from "../../Components/Authentication/SignUp";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo) {
      navigate("/chat");
    }
  }, [navigate]);

  return (
    <Flex d="flex" m="0 0 0 20px" width="fit-content">
      <Container maxW="xl" centerContent>
        <Box
          d="flex"
          justifyContent="center"
          bg={"white"}
          m="40px 0 15px 0"
          p={3}
          w="100%"
          borderRadius="lg"
          borderWidth="1px"
        >
          <Text fontSize="4xl" fontFamily="work sans" color="black">
            Let's have a Chat
          </Text>
        </Box>
        <Box
          bg={"white"}
          p={4}
          width="100%"
          borderRadius="1g"
          borderWidth="1px"
        >
          <Tabs variant="soft-rounded" colorScheme="green">
            <TabList mb="1em">
              <Tab width="50%">Login</Tab>
              <Tab width="50%">Sign Up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <SingUp />
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Text style={{ textAlign: "center" }}>Use Guest User By Default</Text>
        </Box>
      </Container>
      <Spacer />
    </Flex>
  );
};

export default Dashboard;
