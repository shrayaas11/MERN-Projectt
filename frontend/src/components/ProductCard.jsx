import { Box,Image,Heading,Text,IconButton,HStack,Button, CloseButton, Dialog, Portal, VStack, Input, Field, useDisclosure } from '@chakra-ui/react';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useProductStore } from '../store/product';
import { useState } from 'react';

const ProductCard = ({product}) => {

  const { onClose } = useDisclosure()
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const { deleteProduct, updateProduct } = useProductStore();
  const handleDeleteProduct = async (pid) => {
    const { success,message } = await deleteProduct(pid);
    if(!success)
      alert('Error in deleting the product')
    else
      alert('Product successfully deleted');
  }

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success,message } = await updateProduct(pid, updatedProduct);
    onClose();
    if(!success)
      alert("Error in updating the product");
    else
      alert("Successfully updated the product");
  }


  return (
    <Box
    shadow='lg'
	  rounded='lg'
	  overflow='hidden'
	  transition='all 0.3s'
	  _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
    bg={'gray.800'}
    >
      <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />

      <Box p={4}>
        <Heading as='h3' size='lg' mb={2} color={'white'}>
					{product.name}
			  </Heading>

        <Text fontWeight='bold' fontSize='xl' color={'white'} mb={4}>
					${product.price}
			  </Text>

        <HStack spacing={2}>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <IconButton  colorPalette={'blue'}>
                <FaEdit />
              </IconButton>
            </Dialog.Trigger>
            <Portal>
            <Dialog.Backdrop />
            <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Update Product</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <VStack>
                <Field.Root>
                  <Field.Label>Name</Field.Label>
                  <Input placeholder="Enter the name of product" value={updatedProduct.name} 
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value})}
                  />
                </Field.Root>

                <Field.Root>
                  <Field.Label>Price</Field.Label>
                  <Input placeholder="Enter the price" value={updatedProduct.price} 
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value})}
                  />
                </Field.Root>

                <Field.Root>
                  <Field.Label>Image URL</Field.Label>
                  <Input placeholder="Enter the Image URL" value={updatedProduct.image} 
                    onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value})}
                  />
                </Field.Root>
              </VStack>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </Dialog.ActionTrigger>
              <Button onClick={() => handleUpdateProduct(product._id, updatedProduct)}>Update</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
					<IconButton colorPalette={'red'} onClick={() => handleDeleteProduct(product._id)}>
            <MdDelete />
          </IconButton>
				</HStack>
      </Box>
    </Box>
  )
}

export default ProductCard