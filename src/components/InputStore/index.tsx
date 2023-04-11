import { Flex, InputGroup, InputLeftElement, Text, Input, Button } from "@chakra-ui/react"
import { BiSearch } from "react-icons/bi"
import { useRouter } from "next/router"
import axios from "axios";
import { useState } from "react";

export const InputStore: React.FC = () => {
  const router = useRouter();
  const [address, setAddres] = useState("")

  const handleNextPage = async () => {
    const latitude = address.split("-")[0]
    const longitude = address.split("-")[1]
    router.push(`/stores/${latitude}/${longitude}`)
  }

  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center" h={250} gap={10}>
      <Flex>
        <Text fontSize={35} fontWeight="black">Lojas</Text>
      </Flex>
      <Flex gap={5} justifyContent="center">
        <InputGroup display="flex" justifyContent="center">
          <InputLeftElement pointerEvents='none'>
            <BiSearch />
          </InputLeftElement>
          <Input value={address} onChange={e => setAddres(e.target.value)} type='text' placeholder='Busque por endereço ou CEP' borderRadius={20} w={[280, 450]} bgColor="#F7F7F7" borderColor="#F7F7F7" />
        </InputGroup>
        <Flex display={["none", "none", "flex", "flex"]}>
          <Button bgColor="#000" color="#fff" borderRadius={20} p={5} onClick={() => handleNextPage()}>Buscar</Button>
        </Flex>
      </Flex>
    </Flex>
  )
}