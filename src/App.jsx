// sass
import "./index.scss";
// Responsive scss
import "./Responsive.scss";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// React Router
import { Route, Switch, Redirect } from "react-router-dom";
// import all pages or component
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Works from "./pages/Works";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
// import Error from "./pages/Error";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />{" "}
        <Route path="/portfolio" component={Portfolio} />{" "}
        <Route path="/portfolio" component={Portfolio} />{" "}
        <Route path="/works" component={Works} />{" "}
        <Route path="/testimonial" component={Testimonial} />{" "}
        <Route path="/contact" component={Contact} /> <Redirect to="/" />{" "}
        {/* <Route component={Error} /> */}{" "}
      </Switch>{" "}
      <Footer />
    </>
  );
}

export default App;
