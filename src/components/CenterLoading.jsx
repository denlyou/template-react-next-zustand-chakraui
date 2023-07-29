import { Center, CircularProgress } from "@chakra-ui/react";


export default function CenterLoading(props) {
  return (
    <Center mt={32}>
      <CircularProgress
        isIndeterminate
        color="teal"
        size="80px"
      />
    </Center>
  );
}