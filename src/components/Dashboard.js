import React from "react";
import { BsFillChatDotsFill } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";
import { VscAccount } from "react-icons/vsc";

// import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <>
      <header>
        {/*? Header Start */}
        <div className="header-area">
          <div className="main-header header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                {/* Logo */}
                <div className="col-xl-2 col-lg-2 col-md-1">
                  {/* <div className="logo">
                <a href="index.html">
                  <img src="assets/img/logo/logo.png" alt="" />
                </a>
              </div> */}
                </div>
                <div className="col-xl-10 col-lg-10 col-md-10">
                  <div className="menu-main d-flex align-items-center justify-content-end">
                    {/* Main-menu */}
                    <div className="main-menu f-right d-none d-lg-block">
                      {/* <nav>
                    <ul id="navigation">
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
                        <ul className="submenu">
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog_details.html">Blog Details</a>
                          </li>
                          <li>
                            <a href="elements.html">Element</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </nav> */}
                    </div>
                    {/* <div className="header-right-btn f-right d-none d-lg-block ml-15">
                      <a href="#" className="btn header-btn">
                        Logout
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
      <div className="dashboard">
        <div className="sidebar">
            
        </div>
        <div className="dashboard-container">
          <div>
            <div className="search-icons">
              <div className="search-space">
                <input type='text' placeholder="Search" />

              </div>
              <div className="icons">
                <div className="notification"><BsFillChatDotsFill/></div>
                <div className="chats"><GrNotification/></div>
                <div className="profile"><VscAccount/></div>
                
              </div>
            </div>
          </div>

          <div className="grid-container">
              <div className="cards">

                <div className="card1">
dfgdfgdf
                </div>
                <div className="card1">
dfvdfvdf
                </div>

              </div>

              <div className="cards">

                <div className="card1">
gfhfghfg
                </div>
                <div className="card1">
fgdfgdfg
                </div>

              </div>

          </div>

          <div className="ChartAndPercent">
            <div className="chart">
dfgdff
            </div>
            <div className="percentage">
              <div className="perc1">
sdfdsfcd
              </div>
              <div className="perc1">
                sdcfsdcfsd
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
