import { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from 'firebase/auth'
import Main from '../components/layouts/main'
import {
  Box,
  Link,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react'
import { auth } from '../components/firebase-config'
import { useAuth, AuthProvider } from '../context/auth-context'

export default function Home() {
  const {currentUser, login, register, logout} = useAuth();

  console.log(currentUser);

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("")
  const [loginEmail, setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")

  return (
    <AuthProvider>

      <Main title="index page">
        <Box mt={3}>
          <Heading as="h3" mb={3}>Register User</Heading>
          <FormControl mb={3}>
            <FormLabel>Email addres</FormLabel>
            <Input onChange={(e) => {setRegisterEmail(e.target.value)}} bg="white" type="email" />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Password</FormLabel>
            <Input onChange={(e) => {setRegisterPassword(e.target.value)}} bg="white" type="password" />
          </FormControl>
          <Button onClick={() => {
            register(registerEmail, registerPassword)
          }} colorScheme='teal'>Sign Up</Button>
        </Box>

        <Box mt={9} mb={9}>
          <Heading as="h3" mb={3}>Login</Heading>
          <FormControl mb={3}>
            <FormLabel>Email addres</FormLabel>
            <Input onChange={(e) => {setLoginEmail(e.target.value)}} bg="white" type="email" />
          </FormControl>
          <FormControl mb={3}>
            <FormLabel>Password</FormLabel>
            <Input onChange={(e) => {setLoginPassword(e.target.value)}} bg="white" type="password" />
          </FormControl>
          <Button onClick={() => {
            login(loginEmail, loginPassword)
          }} colorScheme='teal'>Sign In</Button>
        </Box>

        <Text fontWeight="bold" mb={2}>User Logged In: {currentUser?.email}</Text>
        <Button onClick={logout} colorScheme="twitter">Log out</Button>
      </Main>
    </AuthProvider>
  )
}
