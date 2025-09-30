import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.tsx";
import { Provider } from "./components/ui/provider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
} from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
});

const CustomSystem = createSystem(defaultConfig, config);
const client = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <QueryClientProvider client={client}>
        <ChakraProvider value={CustomSystem}>
          <App />
        </ChakraProvider>
        <ReactQueryDevtools></ReactQueryDevtools>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
