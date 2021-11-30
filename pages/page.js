import NextLink from 'next/link'
import Main from '../components/layouts/main'
import {
  Box,
  Link,
  Text,
  Heading
} from '@chakra-ui/react'

export default function Page() {
  return(
    <Main title="example">
      <Heading as="h3" mb={3}>
      Example page to demonstrate routing
      </Heading>

      <NextLink href="./">
        <Link textDecoration="underline" fontSize="xl">Back to index page</Link>
      </NextLink>
    </Main>
  )
}