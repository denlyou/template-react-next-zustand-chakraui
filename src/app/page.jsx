"use client";
import SBHeader from "@/components/layout/SBHeader";
import useGlobalStore from "@/stores/useGlobalStore";
// 
const linkData = [
  {}
]

export default function MainPage() {
  const isLoginCheck = useGlobalStore(state=>state.isLoginCheck);
  const setLoginCheck = useGlobalStore(state=>state.setLoginCheck);
  
  return <>
    <SBHeader />
    <main>
      
    </main>
  </>;
}
