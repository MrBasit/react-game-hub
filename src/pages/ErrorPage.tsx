import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router";
import AppHeader from "../components/app-header";

let ErrorPage = () => {
  let routerError = useRouteError();
  return (
    <>
      <AppHeader></AppHeader>
      <Box padding={5}>
        <Heading>Oops ...</Heading>
        <Text>
          {isRouteErrorResponse(routerError)
            ? "This Page Doesn't Exist"
            : "Something went wrong and we are aware of it."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
