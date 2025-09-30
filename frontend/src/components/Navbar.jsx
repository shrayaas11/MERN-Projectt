import { Container, Flex ,Text,Link, HStack, Button} from '@chakra-ui/react'
import { CgAddR } from "react-icons/cg";

const Navbar = () => {
  
  return (
    <Container maxW={'21'} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base:"column",
          sm:"row"
        }}
      >
      <Text
        fontSize={"4xl"}
				fontWeight={"bold"}
				textTransform={"uppercase"}
				textAlign={"center"}
        bgGradient={"to-r"}
        gradientFrom="cyan.400"
        gradientTo="blue.500"
      >
        <Link href='/'>Product Store 🛒</Link>
      </Text>
      <HStack padding={2} alignItems={"center"}>
        <Link href='/create'>
        <Button>
          <CgAddR />
        </Button>
        </Link>
      </HStack>

      </Flex>
    </Container>
  )
}

export default Navbar