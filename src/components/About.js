import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
    
    <>
  
  {/* Preloader Start */}
  <header>
    {/*? Header Start */}
    <div className="header-area">
      <div className="main-header header-sticky">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-xl-2 col-lg-2 col-md-1">
              <div className="logo">
                <Link to="/">
                  <img src="assets/img/logo/logo.png" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-xl-10 col-lg-10 col-md-10">
              <div className="menu-main d-flex align-items-center justify-content-end">
                {/* Main-menu */}
                <div className="main-menu f-right d-none d-lg-block">
                <nav>
                    <ul id="navigation">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/About">About</Link>
                      </li>
                      <li>
                        <Link to="/Services">Services</Link>
                      </li>
                      <li>
                        <a href="#blogs">Blog</a>
                        <ul className="submenu">
                          <li>
                            <Link to="/Blogs">Blog</Link>
                          </li>
                          <li>
                            <Link to="/BlogDetails">BlogDetails</Link>
                          </li>
                          {/* <li>
                            <Link to="/Elements">Element</Link>
                          </li> */}
                        </ul>
                      </li>
                      <li>
                        <Link to="/Contacts">Contacts</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                {/* <div className="header-right-btn f-right d-none d-lg-block ml-15">
                  <a href="#" className="btn header-btn">
                    Make an Appointment
                  </a>
                </div> */}
              </div>
            </div>
            {/* Mobile Menu */}
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Header End */}
  </header>
  <main>
    {/*? Slider Area Start*/}
    <div className="slider-area slider-area2">
      <div className="slider-active dot-style">
        {/* Slider Single */}
        <div className="single-slider  d-flex align-items-center slider-height2">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-8 col-md-10 ">
                <div className="hero-wrapper">
                  <div className="hero__caption">
                    <h1 data-animation="fadeInUp" data-delay=".3s" style={{color:"white"}}>
                      About
                    </h1>
                    <p data-animation="fadeInUp" data-delay=".6s" style={{color:"white"}}>
                      Almost before we knew it, we
                      <br /> had left the ground
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Slider Area End */}
    {/*? Team Area Start*/}
    <section className="team-area pb-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="single-cat text-center mb-30">
              <div className="cat-icon">
                <img src="assets/img/gallery/team1.png" alt="" />
              </div>
              <div className="cat-cap">
                <h5>
                  <a href="#">Your daily meal plan</a>
                </h5>
                <p>
                  Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
                  dignissim dolor, a pretium mi sem ut ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="single-cat text-center mb-30">
              <div className="cat-icon">
                <img src="assets/img/gallery/team2.png" alt="" />
              </div>
              <div className="cat-cap">
                <h5>
                  <a href="#">Muscle Gain</a>
                </h5>
                <p>
                  Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
                  dignissim dolor, a pretium mi sem ut ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="single-cat text-center mb-30">
              <div className="cat-icon">
                <img src="assets/img/gallery/team3.png" alt="" />
              </div>
              <div className="cat-cap">
                <h5>
                  <a href="#">Weight Loss</a>
                </h5>
                <p>
                  Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
                  dignissim dolor, a pretium mi sem ut ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*? Team End*/}
    {/* Services End*/}
    {/*? About-2 Area Start */}
    <div className="about-area2 section-padding40">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12">
            {/* about-img */}
            <div className="about-img ">
              <img src="assets/img/gallery/about.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="about-caption mb-50">
              {/* Section Tittle */}
              <div className="section-tittle mb-35">
                <h2>Create a healthy life you love!</h2>
              </div>
              <p className="pera-top mb-40">
                Almost before we knew it, we had left the ground
              </p>
              <p className="pera-bottom mb-30">
                Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
                dignissim dolor, a pretium mi sem ut ipsum. Fusce fermentum.
                Pellentesque libero tortor, tincidunt et.
              </p>
              <div className="icon-about">
                <img
                  src="assets/img/icon/about1.svg"
                  alt=""
                  className=" mr-20"
                />
                <img src="assets/img/icon/about2.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*? Testimonial Area Start */}
    {/* <section className="testimonial-area testimonial-padding fix">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className=" col-lg-9">
            <div className="about-caption">
             
              <div className="h1-testimonial-active dot-style">
           
                <div className="single-testimonial position-relative">
                  <div className="testimonial-caption">
                    <img
                      src="assets/img/icon/quotes-sign.png"
                      alt=""
                      className="quotes-sign"
                    />
                    <p>
                      "The automated process starts as soon as your clothe go
                      into the machine. This site outcome is gleaming clothe.
                      Placeholder text commonly used. In publishing and graphic.
                    </p>
                  </div>
                
                  <div className="testimonial-founder d-flex align-items-center">
                    <div className="founder-img">
                      <img src="assets/img/icon/testimonial.png" alt="" />
                    </div>
                    <div className="founder-text">
                      <span>Robart Brown</span>
                      <p>Creative designer at Colorlib</p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section> */}
    {/*? Testimonial Area End */}
    {/*? video_start */}
    {/* <div className="container">
      <div
        className="video-area section-bg2 d-flex align-items-center"
        data-background="assets/img/gallery/video-bg.png"
      >
        <div className="video-wrap position-relative">
          <div className="video-icon">
            <a
              className="popup-video btn-icon"
              href="https://www.youtube.com/watch?v=up68UAfH0d0"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      </div>
    </div> */}
    {/* video_end */}
    {/*? Blog Area Start */}
    {/* <section className="home-blog-area section-padding30">
      <div className="container">
        
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-9 col-sm-10">
            <div className="section-tittle text-center mb-100">
              <h2>Latest Blog</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="home-blog-single mb-40">
              <div className="blog-img-cap">
                <div className="blog-img">
                  <img src="assets/img/gallery/blog1.png" alt="" />
                </div>
                <div className="blog-cap">
                  <h3>
                    <a href="blog_details.html">Your daily meal plan</a>
                  </h3>
                  <p>
                    Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
                    dignissim dolor, a pretium mi sem ut ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="home-blog-single mb-40">
              <div className="blog-img-cap">
                <div className="blog-img">
                  <img src="assets/img/gallery/blog2.png" alt="" />
                </div>
                <div className="blog-cap">
                  <h3>
                    <a href="blog_details.html">
                      Food is a great source of medicine
                    </a>
                  </h3>
                  <p>
                    Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
                    dignissim dolor, a pretium mi sem ut ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="home-blog-single mb-40">
              <div className="blog-img-cap">
                <div className="blog-img">
                  <img src="assets/img/gallery/blog3.png" alt="" />
                </div>
                <div className="blog-cap">
                  <h3>
                    <a href="blog_details.html">Everyday diet plan</a>
                  </h3>
                  <p>
                    Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
                    dignissim dolor, a pretium mi sem ut ipsum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    {/* Blog Area End */}
    {/*? About Law Start*/}
    {/* <section className="about-low-area mt-30">
      <div className="container">
        <div className="about-cap-wrapper">
          <div className="row">
            <div className="col-xl-5  col-lg-6 col-md-10 offset-xl-1">
              <div className="about-caption mb-50">
               
                <div className="section-tittle mb-35">
                  <h2>100% satisfaction guaranteed.</h2>
                </div>
                <p>Almost before we knew it, we had left the ground</p>
                <a href="about.html" className="border-btn">
                  Make an Appointment
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              
              <div className="about-img">
                <div className="about-font-img">
                  <img src="assets/img/gallery/about2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}
    {/* About Law End*/}
  </main>
  <footer>
    <div
      className="footer-wrappr section-bg3"
      data-background="assets/img/gallery/footer-bg.png"
    >
      <div className="footer-area footer-padding ">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12">
              <div className="single-footer-caption mb-50">
                {/* logo */}
                {/* <div className="footer-logo mb-25">
                  <a href="index.html">
                    <img src="assets/img/logo/logo2_footer.png" alt="" />
                  </a>
                </div> */}
                {/* <d iv="" className="header-area">
                  <div className="main-header main-header2">
                    <div className="menu-main d-flex align-items-center justify-content-start">
                     
                      <div className="main-menu main-menu2">
                        <nav>
                          <ul>
                            <li>
                              <a href="index.html">Home</a>
                            </li>
                            <li>
                              <a href="about.html">About</a>
                            </li>
                            <li>
                              <a href="services.html">Services</a>
                            </li>
                            <li>
                              <a href="blog.html">Blog</a>
                            </li>
                            <li>
                              <a href="contact.html">Contact</a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </d> */}
                {/* social */}
                <div className="footer-social mt-50">
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="https://bit.ly/sai4ull">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-pinterest-p" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="single-footer-caption">
                <div className="footer-tittle mb-50">
                  <h4>Subscribe newsletter</h4>
                </div>
                {/* Form */}
                <div className="footer-form">
                  <div id="mc_embed_signup">
                    <form
                      target="_blank"
                      action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
                      method="get"
                      className="subscribe_form relative mail_part"
                      noValidate="true"
                    >
                      <input
                        type="email"
                        name="EMAIL"
                        id="newsletter-form-email"
                        placeholder=" Email Address "
                        className="placeholder hide-on-focus"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter your email'"
                      />
                      <div className="form-icon">
                        <button
                          type="submit"
                          name="submit"
                          id="newsletter-submit"
                          className="email_icon newsletter-submit button-contactForm"
                        >
                          Subscribe
                        </button>
                      </div>
                      <div className="mt-10 info" />
                    </form>
                  </div>
                </div>
                <div className="footer-tittle">
                  <div className="footer-pera">
                    <p>
                      Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
                      dignissim dolor, a pretium misem ut ipsum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer-bottom area */}
      <div className="footer-bottom-area">
        <div className="container">
          <div className="footer-border">
            <div className="row">
              <div className="col-xl-10 ">
                <div className="footer-copy-right">
                  <p>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved {" "}
                    {/* <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a> */}
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* Scroll Up */}
  <div id="back-top">
    <a title="Go to Top" href="#">
      {" "}
      <i className="fas fa-level-up-alt" />
    </a>
  </div>
</>

    
    </>
  )
}

export default About