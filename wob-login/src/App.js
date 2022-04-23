import { Login } from "./main/Main";
import "./globalStyles/App.css";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Login />
      </QueryClientProvider>
    </>
  );
}

export default App;
