import React, { useState } from 'react';
import axios from 'axios';
import { Box, Flex, Image, Text } from "@chakra-ui/react";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://cute-gray-mussel-garb.cyclic.app/login', {
        email,
        password,
      });
      
      console.log('Login Successful', response.data);
      alert(response.data.message);
      
      
      setEmail('');
      setPassword('');
    } catch (error) {
      
      console.error('Login Error:', error);
      
      alert('Please Check Your Credentials');
    }
  };

  return (
    <Box width={["95%", "90%", "90%", "90%"]} m="auto" mt={48} mb={12}>
      <Flex
        m="auto"
        gap={["30px", "50px", "60px", "100px"]}
        flexDirection={["column-reverse", "column-reverse", "column-reverse", "row"]}
        alignItems="center"
      >
        <Box>
          <Image
            borderRadius={"15px"}
            width={"800px"}
            src="https://www.reliancedigital.in/akamai/images/mobile/Login-banner.jpeg"
            alt="img"
          />
        </Box>
  
        <Box
          borderRadius={"15px"}
          width={["90%", "90%", "90%", "40%"]}
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
        >
          <Text p={4} borderBottom="1px solid #cecece" fontWeight={"semibold"}>
            Login As User
          </Text>
  
          <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        </Box>
      </Flex>
    </Box>
  );
  
}

export default Login;
