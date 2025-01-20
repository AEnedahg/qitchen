import { Home } from './components/Hero/Home';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu } from "./components/Menu/Menu";
import { About } from "./components/About/About";
import { Blog } from "./components/Blog/Blog";
import { BookATable } from "./components/BookATable/BookATable";
import { Contact } from "./components/Contact/Contact";
import { Nav } from './components/Nav';
import { BlogOne } from './components/Blog/Blogs/BlogOne';
import { BlogTwo } from "./components/Blog/Blogs/BlogTwo";
import { BlogThree } from "./components/Blog/Blogs/BlogThree";
import { BlogFour } from "./components/Blog/Blogs/BlogFour";
import { BlogFive } from "./components/Blog/Blogs/BlogFive";


function App() {
    
    return (
      <div>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/bookatable" element={<BookATable />}></Route>
            <Route path="/blog/blog1" element={<BlogOne />}></Route>
            <Route path="/blog/blog2" element={<BlogTwo />}></Route>
            <Route path="/blog/blog3" element={<BlogThree />}></Route>
            <Route path="/blog/blog4" element={<BlogFour />}></Route>
            <Route path="/blog/blog5" element={<BlogFive />}></Route>
          </Routes>
        </Router>
      </div>
    );
}

export default App
