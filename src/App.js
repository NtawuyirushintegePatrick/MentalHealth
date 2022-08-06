import { BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Header from "./components/Header"

import Footer from "./components/Footer";
import About from "./components/About";
import BlogDetails from "./components/BlogDetails";
import Blogs from "./components/Blogs";
import Services from "./components/Services";
import Contacts from "./components/Contacts";
import Element  from "./components/Element";
import Dashboard from "./components/Dashboard";
// import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        < Route path="/">
          <Route index element={<Home />} />
          <Route path="header" element={<Header/>}/>
          <Route path="contacts" element={<Contacts/>}/>
          <Route path="footer" element={<Footer />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="about" element={<About />} />
          <Route path="blogDetails" element={<BlogDetails />}/>
          <Route path="services" element={<Services />}/>
          <Route path="element" element={<Element/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
          {/* <Route path="sidebar" element={<Sidebar/>}/> */}
        </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
