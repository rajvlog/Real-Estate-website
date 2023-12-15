
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from './pages/HomePage';
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Offers from "./pages/Offers";
import Profile from './pages/Profile';
import PrivateRoute from "./components/PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import Category from "./pages/Category";
import Listing from "./pages/Listing";
import CreateListing from "./pages/CreateListing";
import Contact from "./pages/Contact";
import EditListing from "./pages/EditListing";

function App() {
  return (
    <BrowserRouter>
     <ToastContainer />
    <Routes>
    <Route path="/" element={<HomePage />} />
    
        <Route path="/signin" element={<Signin />} />
        <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/editlisting/:listingId" element={<EditListing />} />
        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact/:landlordId" element={<Contact />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-listing" element={<CreateListing />} />
        <Route
          path="/category/:categoryName/:listingId"
          element={<Listing />}
        />
        <Route path="/offers" element={<Offers />} />
        <Route path="/offers" element={<Offers />} />
    </Routes>
   
    </BrowserRouter>
  );
}

export default App;
