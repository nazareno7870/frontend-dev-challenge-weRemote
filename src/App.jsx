import Articles from "../components/Articles/Articles";
import Cookies from "../components/Cookies/Cookies";
import Faqs from "../components/Faqs/Faqs";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Newsletter from "../components/Newsletter/Newsletter";
import Testimonials from "../components/Testimonials/Testimonials";
import TopNav from "../components/TopNav/TopNav";
import './App.css'
function App() {


  return (
    <>
      <TopNav />
      <Hero/>
      <main>
        <div className="separator"></div>
        <div className="section">
          <h4>ARTICLES</h4>
        </div>
        <Articles />
        <div className="group">
          <section className="group__item">
            <div className="separator"></div>
            <div className="section">
              <h4>FAQS</h4>
            </div>
            <Faqs />
          </section>
          <section className="group__item">
            <div className="separator"></div>
            <div className="section">
              <h4>TESTIMONIALS</h4>
            </div>
            <Testimonials />
          </section>
        </div>
        <Newsletter />
        <Footer />
      </main>
      <Cookies/>
    </>
  );
}

export default App
