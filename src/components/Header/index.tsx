import { Divider, Flex, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react"
import jordanLogo from "../../../public/jordanLogo.png"
import nikeLogo from "../../../public/nikeLogo.png"
import { BiSearch } from "react-icons/bi"
import { BsBag } from "react-icons/bs"
import { FiMenu } from "react-icons/fi"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import { headerSections } from "./data"
import Image from "next/image"

export const Header: React.FC = () => {
  return (
    <>
      <Flex 
      bgColor="#F7F7F7" 
      justifyContent="space-between" 
      alignItems="center"
      h="60px"
      display={["none", "none", "flex", "flex", "flex"]}
      >
        <Flex marginLeft={20} justifyContent="center" alignItems="center" gap={5}>
          <Image src={jordanLogo} alt="Jordan Logo" width={25} height={25}/>
          <Text color="#000" fontWeight="extrabold" fontSize={22}>SNKRS</Text>
        </Flex>
        <Flex alignItems="center" marginRight={5} gap={3}>
          <Text color="gray.600">Ajuda</Text>
          <Divider orientation="vertical" borderColor="#000" h={5} />
          <Text color="gray.600">Acompanhe seu pedido</Text>
          <Divider orientation="vertical" borderColor="#000" h={5} />
          <Text color="gray.600">Junte-se a nos</Text>
          <Divider orientation="vertical" borderColor="#000" h={5} />
          <Text color="gray.600">Entrar</Text>
        </Flex>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex marginLeft={[0, 0, 0, 10]} p={8}>
          <Image src={nikeLogo} alt="Nike Logo" width={70} height={70} style={{ minWidth: "50px"}}/>
        </Flex>
        <Flex gap={10}>
          {headerSections.map(item => (
            <Text color="#000" fontWeight="black" key={item.label} display={["none", "none", "none", "flex", "flex"]}>{item.label}</Text>
          ))}
        </Flex>
        <Flex marginRight={[5, 5, 50]} alignItems="center" gap={5}>
          <InputGroup display={["none", "none", "flex"]}>
            <InputLeftElement pointerEvents='none'>
              <BiSearch/>
            </InputLeftElement>
            <Input type='text' placeholder='Search' borderRadius={20} w={170} bgColor="#F7F7F7" borderColor="#F7F7F7" />
          </InputGroup>
          <Flex>
            <BsBag size={25}/>
          </Flex>
          <Flex display={["flex", "flex", "none"]}>
            <FiMenu size={25}/>
          </Flex>
        </Flex>
      </Flex>
      <Flex bgColor="#F7F7F7" p={4} alignItems="center" justifyContent="center" gap={[2, 5, 20, 150, 200]}>
        <Flex w={6} h={6} borderRadius="50%" bgColor="#fff" justifyContent="center" alignItems="center">
            <RiArrowLeftSLine size={20} />
        </Flex>
        <Flex gap={[2, 3, 5]} flexDirection={["column", "column", "row"]}>
          <Flex flexDirection="column" alignItems="center" justifyContent="center">
            <Image src={nikeLogo} alt="Nike Logo" width={20} height={20} style={{ minWidth: "20px"}}/>
            <Text color="#000" fontWeight="extrabold" fontSize={13}>SNKRS</Text>
          </Flex>
          <Flex gap={2} w={[300, 400, 500]} justifyContent="center">
            <Text fontSize={[15, 16, 17]}>Fique por dentro dos lançamentos</Text>
            <Text fontSize={[15, 16, 17]} textDecoration="underline">SNKRS</Text>
          </Flex>
        </Flex>
        <Flex w={6} h={6} borderRadius="50%" bgColor="#fff" justifyContent="center" alignItems="center">
            <RiArrowRightSLine size={20} />
        </Flex>
      </Flex>
    </>
    
  )
}