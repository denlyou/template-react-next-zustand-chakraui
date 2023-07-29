"use client";
import dynamic from "next/dynamic";
import SBHeader from "@/components/layout/SBHeader";
import CenterLoading from "@/components/CenterLoading";
// import ViewContents from "@/components/views/ViewContents";

const ViewContents = dynamic(() => import("@/components/views/ViewContents"), {
  ssr: false,
  loading: () => <CenterLoading /> ,
});

export default function CheatView({ params }) {

  return <>
    <SBHeader />
    
    <main style={{textAlign: "center", padding: "12px"}}>
      서브 페이지 {params.id}

      <ViewContents id={params.id} />
    </main>
  </>;
}
