"use client";
import { Box, Heading } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
// import useGlobalStore from "@/stores/useGlobalStore";

export default function SBHeader() {
  const router = useRouter();

  return (
    <Box
      p={4}
      bg="teal.500"
      color="white"
      w="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-around"
    >
      <Box onClick={e=>router.push("/")}>
        <Heading fontSize={"3xl"}>React Next.js ChakraUI Template</Heading>
      </Box>
    </Box>
  );
}