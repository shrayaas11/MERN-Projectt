import { Box, Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useProductStore } from '../store/product';


const CreatePage = () => {
	const [newProduct, setNewProduct] = useState({
		name: "",
		price: "",
		image: "",
	});

  const { createProduct } = useProductStore();

  const handleAddProduct = async() => {
    const { success, message } = await createProduct(newProduct);
    if(!success){
        alert("Error: Please fill in all the fields.");
      }
    else{
      alert("Successfully created a product.");
    }
  }

  return (
    <Container maxW={"container.sm"}>
      <VStack padding={8}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create new Product
        </Heading>
          <Box w={800} bg={"gray.950"} p={6} rounded={"lg"} shadow={"md"}>
            <VStack padding={4}>
              <Input
                bg={"white"}
                placeholder='Product Name'
                name='name'
                value={newProduct.name}
                onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
              />
              <Input
                bg={"white"}
                placeholder='Price'
                name='price'
                type='number'
                value={newProduct.price}
                onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
              />
              <Input
                bg={"white"}
                placeholder='Image URL'
                name='image'
                value={newProduct.image}
                onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
              />
              <Button bg={"blue.500"} w='full' onClick={handleAddProduct}>
                Add Product
              </Button>
            </VStack>

          </Box>
      </VStack>

    </Container>
  )
}

export default CreatePage