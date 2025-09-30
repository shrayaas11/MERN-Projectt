import { Container,Text,Link,VStack, SimpleGrid} from '@chakra-ui/react'
import { useEffect,map } from 'react'
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const { fetchProducts,products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
console.log("products",products);

  return (
    <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
      	<Text
		fontSize={"3xl"}
		fontWeight={"bold"}
		textAlign={"center"}
		>
			Current Products 🚀
		</Text>

        <SimpleGrid
		columns={{
			base: 1,
			md: 2,
			lg: 3,
		}}
		spacing={10}
		w={"full"}
		gap="40px"
		p={10}
		>
			{products.map((product) => (
				<ProductCard key={product._id} product={product} />
			))}
		</SimpleGrid>

		{products.length === 0 && (
			<Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.1000'>
				No products found 😢{" "}
				<Link href='/create'>
					<Text as='span' color='blue.800' _hover={{ textDecoration: "underline" }}>
						Create a product
					</Text>
				</Link>
			</Text>
		)}

      </VStack>
      </Container>
  )
}

export default HomePage