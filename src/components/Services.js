import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <>
    
    <>
  {/* ? Preloader Start */}
  <div id="preloader-active">
    <div className="preloader d-flex align-items-center justify-content-center">
      <div className="preloader-inner position-relative">
        <div className="preloader-circle" />
        <div className="preloader-img pere-text">
          <img src="assets/img/logo/loder.png" alt="" />
        </div>
      </div>
    </div>
  </div>
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
                <a href="index.html">
                  <img src="assets/img/logo/logo.png" alt="" />
                </a>
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
                          <li>
                            <Link to="/Elements">Element</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/Contacts">Contacts</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="header-right-btn f-right d-none d-lg-block ml-15">
                  <a href="#" className="btn header-btn">
                    Make an Appointment
                  </a>
                </div>
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
                    <h1 data-animation="fadeInUp" data-delay=".3s">
                      Services
                    </h1>
                    <p data-animation="fadeInUp" data-delay=".6s">
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
    <section className="wantToWork-area">
      <div className="container">
        <div className="wants-wrapper w-padding2">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-7 col-lg-9 col-md-8">
              <div className="wantToWork-caption wantToWork-caption2">
                <h2>
                  Happy mind <br />
                  healthy life
                </h2>
                <p>
                  Almost before we knew it, we
                  <br /> had left the ground
                </p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4">
              <a href="#" className="btn f-right sm-left">
                Take a Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*? Services Area Start */}
    <div className="service-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-cat text-center mb-50">
              <div className="cat-icon">
                <img src="assets/img/icon/services1.svg" alt="" />
              </div>
              <div className="cat-cap">
                <h5>
                  <a href="services.html">Physical Activity</a>
                </h5>
                <p>
                  Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
                  dignissim dolor, a pretium mi sem ut ipsum.
                </p>
                <a href="services.html" className="plus-btn">
                  <i className="ti-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-cat text-center mb-50">
              <div className="cat-icon">
                <img src="assets/img/icon/services2.svg" alt="" />
              </div>
              <div className="cat-cap">
                <h5>
                  <a href="services.html">Physical Activity</a>
                </h5>
                <p>
                  Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
                  dignissim dolor, a pretium mi sem ut ipsum.
                </p>
                <a href="services.html" className="plus-btn">
                  <i className="ti-plus" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="single-cat text-center mb-50">
              <div className="cat-icon">
                <img src="assets/img/icon/services3.svg" alt="" />
              </div>
              <div className="cat-cap">
                <h5>
                  <a href="services.html">Physical Activity</a>
                </h5>
                <p>
                  Praesent porttitor, nulla vitae posuere iaculis, arcu nisl
                  dignissim dolor, a pretium mi sem ut ipsum.
                </p>
                <a href="services.html" className="plus-btn">
                  <i className="ti-plus" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Services Area End */}
    {/*? video_start */}
    <div className="container pt-40">
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
    </div>
    {/* video_end */}
    {/*? Testimonial Area Start */}
    <section className="testimonial-area testimonial-padding fix pb-bottom">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className=" col-lg-9">
            <div className="about-caption">
              {/* Testimonial Start */}
              <div className="h1-testimonial-active dot-style">
                {/* Single Testimonial */}
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
                  {/* founder */}
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
              {/* Testimonial End */}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*? Testimonial Area End */}
    {/*? About Law Start*/}
    <section className="about-low-area mt-80">
      <div className="container">
        <div className="about-cap-wrapper">
          <div className="row">
            <div className="col-xl-5  col-lg-6 col-md-10 offset-xl-1">
              <div className="about-caption mb-50">
                {/* Section Tittle */}
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
              {/* about-img */}
              <div className="about-img">
                <div className="about-font-img">
                  <img src="assets/img/gallery/about2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
                <div className="footer-logo mb-25">
                  <a href="index.html">
                    <img src="assets/img/logo/logo2_footer.png" alt="" />
                  </a>
                </div>
                <d iv="" className="header-area">
                  <div className="main-header main-header2">
                    <div className="menu-main d-flex align-items-center justify-content-start">
                      {/* Main-menu */}
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
                </d>
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
                    Copyright © All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
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

export default Services