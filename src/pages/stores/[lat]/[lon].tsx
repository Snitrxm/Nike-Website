import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InputStore } from "@/components/InputStore";
import { NearStores } from "@/components/nearStores";
import { useRouter } from 'next/router'

export default function Stores(){
  const router = useRouter();
  const { lat, lon } = router.query;

  return (
    <>
      <Header />
      <InputStore />
      <NearStores lat={lat as string} lon={lon as string}/>
      <Footer />
    </>
  );
  
}