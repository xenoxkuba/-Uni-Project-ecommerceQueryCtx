import "./App.css";
import Header from "./Header";
import Feed from "./Feed";
import InfoBanner from "./InfoBanner";
import { QueryClient, QueryClientProvider } from "react-query";
import Footer from "./Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header></Header>
      <InfoBanner />
      <Feed></Feed>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
