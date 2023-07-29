import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function ViewContents(props) {

  const router = useRouter();

  return (
    <Box
      p={4}
      textAlign="center"
    >
      (Dynamic Components Example)
      <br />
      <Button
        mt={16}
        variant="outline"
        onClick={e=>router.push("/")}
      >돌아가기</Button>
    </Box>
  );
}