import { Button, Flex, Text } from "@chakra-ui/react"
import Image from "next/image"
import nikeLogo from "../../../public/nikeLogo.png"

export const NikeNews: React.FC = () => {
  return (
    <Flex bgColor="#F7F7F7" justifyContent="center" alignItems="center" flexDirection="column" gap={6} p={8}>
      <Flex>
        <Image src={nikeLogo} alt="Nike Logo" width={100} height={100} style={{ minWidth: "100px"}}/>
      </Flex>
      <Flex flexDirection="column" gap={2} alignItems="center">
        <Text textAlign="center" fontWeight="bold" fontSize={[19.5, 22, 28]}>RECEBA AS NOVIDADES DA NIKE</Text>
        <Text textAlign="center">Cadastre-se e seja um dos primeiros a saber de todas as novidades e ofertas.</Text>
      </Flex>
      <Flex>
      <Button bgColor="#000" color="#fff" borderRadius={20} p={5}>Cadastra-se</Button>
      </Flex>
    </Flex>
  )
}