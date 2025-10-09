import { Box, Heading, Text } from "@chakra-ui/react";
import { Children, type ReactNode } from "react";

interface Prop {
  term: string;
  children: ReactNode[] | ReactNode;
}

let GameInfo = ({ term, children }: Prop) => {
  return (
    <Box marginY="5">
      <Heading as="dt" marginBottom={2}>
        {term}
      </Heading>
      {children}
    </Box>
  );
};

export default GameInfo;
