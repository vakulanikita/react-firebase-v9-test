import Head from 'next/head'
import Image from 'next/image'
import NextLink from 'next/link'
import Main from '../components/layouts/main'
import ThemeToggleButton from '../components/theme-toggle-button'
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

export default function Home() {
  return (
    <Main title="index page">
      <Box mt={3}>
        <Heading as="h3" mb={3}>Register User</Heading>
        <FormControl mb={3}>
          <FormLabel>Email addres</FormLabel>
          <Input bg="white" type="email" />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>Password</FormLabel>
          <Input bg="white" type="password" />
        </FormControl>
        <Button colorScheme='teal' type="submit">Sign Up</Button>
      </Box>

      <Box mt={9} mb={9}>
        <Heading as="h3" mb={3}>Login</Heading>
        <FormControl mb={3}>
          <FormLabel>Email addres</FormLabel>
          <Input bg="white" type="email" />
        </FormControl>
        <FormControl mb={3}>
          <FormLabel>Password</FormLabel>
          <Input bg="white" type="password" />
        </FormControl>
        <Button colorScheme='teal' type="submit">Sign In</Button>
      </Box>

      <Text fontWeight="bold" mb={2}>User Logged In:</Text>
      <Button colorScheme="twitter">Log out</Button>
    </Main>
  )
}
