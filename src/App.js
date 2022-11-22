import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import DashBoard from "./pages/DashBoard/DashBoard";
import Details from "./pages/Details/Details";
import NewBlog from "./pages/NewBlog/NewBlog";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import UpdateBlog from "./pages/UpdateBlog/UpdateBlog";
import About from "./pages/About/About";
import PrivateRouter from "./router/PrivateRouter";
import { Provider } from "react-redux";
import { store } from "./app/Store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<PrivateRouter />}>
              <Route path="/NewBlog" element={<NewBlog />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/details" element={<Details />} />
              <Route path="/updateBlog" element={<UpdateBlog />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<DashBoard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
