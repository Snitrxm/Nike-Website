/* eslint-disable react-hooks/exhaustive-deps */
import { Flex, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import axios from "axios"
import { IStores } from "./dtos"

interface IFilteredStoreArray {
  storeNumber: number;
  distanceFromUser: number;
}

interface IProps {
  lat: string;
  lon: string;
}

export const NearStores: React.FC<IProps> = ({ lat, lon }) => {
  const [nearStores, setNearStores] = useState<IStores[]>([])

  const getStores = async () => {
    const { data: stores } = await axios.get<IStores[]>("https://api.gruposbf.com.br/geolocation-api/stores/")
    let filteredStoreArray: IFilteredStoreArray[] = []
    for(const store of stores){
      const distanceFromUser = Math.sqrt((Number(store.latitude) - Number(lat)) ** 2 + (Number(store.longitude) - Number(lon)) ** 2)
      filteredStoreArray.push({ storeNumber: store.number, distanceFromUser })
    }
    console.log(filteredStoreArray)
    filteredStoreArray.sort((a, b): number => {
      return a.distanceFromUser - b.distanceFromUser
    })
    filteredStoreArray = filteredStoreArray.slice(0, 3)
    const nearsStores = stores.filter(store => {
      if (filteredStoreArray.some(filteredStore => filteredStore.storeNumber === store.number)) {
        return store;
      }
      return 0;
    })
    setNearStores(nearsStores)
  }

  useEffect(() => {
    getStores();
  }, [lat, lon])

  return (
    <Flex justifyContent="center" gap={10} p={10}>
      <Flex bgColor="#F7F7F7" flexDirection="column" p={5} gap={10} h="600px" overflow="auto" w={["100%", "100%", "45%"]}>
        {nearStores.map(store => (
          <Flex key={store.number} flexDirection="column">
            <Flex justifyContent="space-between" paddingBottom={3}>
              <Text fontWeight="black" fontSize={22}>{store.name}</Text>
              <Text fontWeight="black">1,0 km</Text>
            </Flex>
            <Flex bgColor="#fff" flexDirection="column" p={5} gap={5}>
              <Flex flexDirection="column" gap={3}>
                <Flex flexDirection="column">
                  <Text>{store.adress}</Text>
                  <Text>Sao Paulo - SP, 01311-200</Text>
                </Flex>
                <Flex flexDirection="column">
                  <Text>Atendimento:</Text>
                  <Text>Segunda a Sabado 10h as 22h | Domingo 11h as 20h</Text>
                </Flex>
              </Flex>
              <Flex>
                <Text color="green">Disponivel em 4 dias uteis</Text>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
      <Flex w="45%" display={["none", "none", "flex"]}>
        <iframe 
          width="100%" 
          height="600px" 
          frameBorder="0" 
          scrolling="no" 
          marginHeight={0} 
          marginWidth={0} 
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          </iframe>
      </Flex>
    </Flex>
  )
}