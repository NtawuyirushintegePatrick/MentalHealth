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
// import Element  from "./components/Element";
import Dashboard from "./components/Dashboard";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Blog from "./components/Blog";
import User from "./components/User";
import Articles from "./components/Articles"
import Quotes from "./components/Quotes";
import Videos from "./components/Videos";
import Books from "./components/Books";
import Servey from "./components/Servey";
import Conseilling from "./components/Conseilling";
import  Group  from "./components/Group";

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
          {/* <Route path="element" element={<Element/>}/> */}
          <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="signin" element={<Signin/>}/>
          <Route path="signup" element={<Signup/>}/>
          <Route path="blog" element={<Blog/>}/> 
          <Route path="user" element={<User/>}/> 
          <Route path="articles" element={<Articles/>}/> 
          <Route path="quotes" element={<Quotes/>}/>
          <Route path="videos" element={<Videos/>}/>
          <Route path="books" element={<Books/>}/>
          <Route path="servey" element={<Servey/>}/>
          <Route path="Conseilling" element={<Conseilling/>}/>
          <Route path="Group" element={<Group/>}/>


        </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
