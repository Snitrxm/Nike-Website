import { Divider, Flex, Text } from "@chakra-ui/react";
import { aboutNikeTitles, bigTitles, helpTitles } from "./data";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa"


const socialMidias = [ <BsFacebook key={0} />, <BsInstagram key={1} />, <BsYoutube key={2} /> ]
const creditCards = [ <FaCcVisa key={0} width={10} />, <FaCcMastercard key={1}/> ]

export const Footer: React.FC = () => {
  return (
    <>
      <Flex bgColor="#1A1A1A" p={10} gap={10} flexDirection={["column", "column", "row"]}>
        <Flex flexDirection="column" w={["100%", "100%", "25%"]} gap={5}>
          {bigTitles.map(title => (
            <Text color="#fff" fontWeight="bold" key={title}>{title}</Text>
          ))}
        </Flex>
        <Flex flexDirection="column" w={["100%", "100%", "25%"]} gap={4}>
          <Flex>
            <Text color="#F7F7F7" fontWeight="bold">AJUDA</Text>
          </Flex>
          <Flex flexDirection="column" gap={1}>
            {helpTitles.map(title => (
              <Text color="#F7F7F7" fontSize={15} key={title}>{title}</Text>
            ))}
          </Flex>
        </Flex>
        <Flex flexDirection="column" w={["100%", "100%", "25%"]} gap={4}>
          <Flex>
            <Text color="#fff" fontWeight="bold">SOBRE NIKE</Text>
          </Flex>
          <Flex flexDirection="column" gap={1}>
            {aboutNikeTitles.map(title => (
              <Text color="#fff" fontSize={15} key={title}>{title}</Text>
            ))}
          </Flex>
        </Flex>
        <Flex flexDirection="column" w={["100%", "100%", "25%"]} gap={5}>
          <Flex flexDirection="column" gap={2}>
            <Flex>
              <Text color="#fff" fontWeight="bold">REDES SOCIAIS</Text>
            </Flex>
            <Flex gap={3}>
              {socialMidias.map((Item, index) => (
                <Flex key={index} bgColor="#BABABA" borderRadius="50%" w={6} h={6} justifyContent="center" alignItems="center">
                  {Item}
                </Flex>
              ))}
            </Flex>
          </Flex>
          <Flex flexDirection="column" gap={2}>
            <Flex>
              <Text color="#fff" fontWeight="bold">FORMAS DE PAGAMENTO</Text>
            </Flex>
            <Flex gap={3}>
              {creditCards.map((Item, index) => (
                <Flex key={index} bgColor="#fff" w={10} h={7} justifyContent="center" alignItems="center">
                  {Item}
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Divider borderColor="#4D4D4D"/>
      <Flex bgColor="#1A1A1A" p={10} flexDirection={["column", "row", "row"]} alignItems="center" gap={2}>
        <Flex w="70%" alignItems="center" gap={20}>
          <Text color="#fff">Brasil</Text>
          <Text color="#fff">Politica de Privaciade</Text>
          <Text color="#fff">Termos de uso</Text>
        </Flex>
        <Flex w="30%">
          <Text color="#fff" textAlign="center">
          © 2021 Nike. Todos os direitos reservados. Fisia Comércio de Produtos Esportivos Ltda - CNPJ: 59.546.515/0016-10 Rua José Semião Rodrigues Agostinho, 1370 - Galpão Unidade 17 - Nível 0, 1 e 2 - CEP 06833-300 - Embu das Artes/SP.
          </Text>
        </Flex>
      </Flex>
    </>
  );
}