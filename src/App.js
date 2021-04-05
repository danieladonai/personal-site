// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogList from "./components/BlogList";
import { Box } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";

function App() {
  const bg = useColorModeValue("#f8f8fa", "#1a202c");

  return (
    <div className="app">
      <Box bg={bg}>
        <Navbar />
        <div className="content">
          <Header />
          <BlogList />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </Box>
    </div>
  );
}

export default App;
