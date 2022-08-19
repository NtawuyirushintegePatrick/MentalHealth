import React from "react";
import { Link } from "react-router-dom";

const dashboardui = () => {
  return (
    <>
      <div className="layer" />
      {/* ! Body */}
      <a className="skip-link sr-only" href="#skip-target">
        Skip to content
      </a>
      <div className="page-flex">
        {/* ! Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-start">
            <div className="sidebar-head">
              <a href="/" className="logo-wrapper" title="Home">
                <span className="sr-only">Home</span>
                <span className="icon logo" aria-hidden="true" />
                <div className="logo-text">
                  <span className="logo-title">Elegant</span>
                  <span className="logo-subtitle">Dashboard</span>
                </div>
              </a>
              <button
                className="sidebar-toggle transparent-btn"
                title="Menu"
                type="button"
              >
                <span className="sr-only">Toggle menu</span>
                <span className="icon menu-toggle" aria-hidden="true" />
              </button>
            </div>
            <div className="sidebar-body">
              <ul className="sidebar-body-menu">
                <li>
                  <Link className="active" to="/Dashboard">
                    <span className="icon home" aria-hidden="true" />
                    Dashboard
                  </Link>
                </li>
                <li>
          
                  <Link className="show-cat-btn" to="/Blog">
                    <span className="icon document" aria-hidden="true" />
                    Blogs
                    <span
                      className="category__btn transparent-btn"
                      title="Open list"
                    >
                      <span className="sr-only">Open list</span>
                      <span className="icon arrow-down" aria-hidden="true" />
                    </span>
                  </Link>
              
                </li>
                
                <Link className="show-cat-btn" to="/user">
                  <span className="icon image" aria-hidden="true" />
                  Users
                </Link>
                
                <li>
               
                  <Link className="show-cat-btn" to="/articles">
                    <span className="icon paper" aria-hidden="true" />
                    Articles
                  </Link>
                 
                </li>
                <li>
                  
                  <Link to="/quotes">
                    <span className="icon message" aria-hidden="true" />
                    Quotes
                  </Link>
                  
                </li>
              </ul>
              <ul className="sidebar-body-menu">
                <li>
                  
                  <Link to="/books">
                    <span className="icon edit" aria-hidden="true" />
                    Books
                  </Link>
                  
                </li>
                <li>
                 
                  <Link to="/videos">
                    <span className="icon setting" aria-hidden="true" />
                    Videos
                  </Link>
                  
                </li>
              </ul>
            </div>
          </div>
          <div className="sidebar-footer">
            <a href="##" className="sidebar-user">
              <span className="sidebar-user-img">
                <picture>
                  <source
                    srcSet="./img/avatar/avatar-illustrated-01.webp"
                    type="image/webp"
                  />
                  <img
                    src="./img/avatar/avatar-illustrated-01.png"
                    alt="User name"
                  />
                </picture>
              </span>
              <div className="sidebar-user-info">
                <span className="sidebar-user__title">N. Patrick</span>
                <span className="sidebar-user__subtitle">Support manager</span>
              </div>
            </a>
          </div>
        </aside>
        <div className="main-wrapper">
          {/* ! Main nav */}
          <nav className="main-nav--bg">
            <div className="container main-nav">
              <div className="main-nav-start">
                <div className="search-wrapper">
                  <i data-feather="search" aria-hidden="true" />
                  <input
                    type="text"
                    placeholder="Enter keywords ..."
                    required=""
                  />
                </div>
              </div>
              <div className="main-nav-end">
                <button
                  className="sidebar-toggle transparent-btn"
                  title="Menu"
                  type="button"
                >
                  <span className="sr-only">Toggle menu</span>
                  <span className="icon menu-toggle--gray" aria-hidden="true" />
                </button>
                <div className="lang-switcher-wrapper">
                  <button
                    className="lang-switcher transparent-btn"
                    type="button"
                  >
                    EN
                    <i data-feather="chevron-down" aria-hidden="true" />
                  </button>
                  <ul className="lang-menu dropdown">
                    <li>
                      <a href="##">English</a>
                    </li>
                    <li>
                      <a href="##">French</a>
                    </li>
                    <li>
                      <a href="##">Uzbek</a>
                    </li>
                  </ul>
                </div>
                <button
                  className="theme-switcher gray-circle-btn"
                  type="button"
                  title="Switch theme"
                >
                  <span className="sr-only">Switch theme</span>
                  <i
                    className="sun-icon"
                    data-feather="sun"
                    aria-hidden="true"
                  />
                  <i
                    className="moon-icon"
                    data-feather="moon"
                    aria-hidden="true"
                  />
                </button>
                <div className="notification-wrapper">
                  <button
                    className="gray-circle-btn dropdown-btn"
                    title="To messages"
                    type="button"
                  >
                    <span className="sr-only">To messages</span>
                    <span
                      className="icon notification active"
                      aria-hidden="true"
                    />
                  </button>
                  <ul className="users-item-dropdown notification-dropdown dropdown">
                    <li>
                      <a href="##">
                        <div className="notification-dropdown-icon info">
                          <i data-feather="check" />
                        </div>
                        <div className="notification-dropdown-text">
                          <span className="notification-dropdown__title">
                            System just updated
                          </span>
                          <span className="notification-dropdown__subtitle">
                            The system has been successfully upgraded. Read more
                            here.
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="##">
                        <div className="notification-dropdown-icon danger">
                          <i data-feather="info" aria-hidden="true" />
                        </div>
                        <div className="notification-dropdown-text">
                          <span className="notification-dropdown__title">
                            The cache is full!
                          </span>
                          <span className="notification-dropdown__subtitle">
                            Unnecessary caches take up a lot of memory space and
                            interfere ...
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="##">
                        <div className="notification-dropdown-icon info">
                          <i data-feather="check" aria-hidden="true" />
                        </div>
                        <div className="notification-dropdown-text">
                          <span className="notification-dropdown__title">
                            New Subscriber here!
                          </span>
                          <span className="notification-dropdown__subtitle">
                            A new subscriber has subscribed.
                          </span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a className="link-to-page" href="##">
                        Go to Notifications page
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav-user-wrapper">
                  <button
                    href="##"
                    className="nav-user-btn dropdown-btn"
                    title="My profile"
                    type="button"
                  >
                    <span className="sr-only">My profile</span>
                    <span className="nav-user-img">
                      <picture>
                        <source
                          srcSet="./img/avatar/avatar-illustrated-02.webp"
                          type="image/webp"
                        />
                        <img
                          src="./img/avatar/avatar-illustrated-02.png"
                          alt="User name"
                        />
                      </picture>
                    </span>
                  </button>
                  <ul className="users-item-dropdown nav-user-dropdown dropdown">
                    <li>
                      <a href="##">
                        <i data-feather="user" aria-hidden="true" />
                        <span>Profile</span>
                      </a>
                    </li>
                    <li>
                      <a href="##">
                        <i data-feather="settings" aria-hidden="true" />
                        <span>Account settings</span>
                      </a>
                    </li>
                    <li>
                      <a className="danger" href="##">
                        <i data-feather="log-out" aria-hidden="true" />
                        <span>Log out</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
          {/* ! Main */}
          <main className="main users chart-page" id="skip-target">
            <div className="container">
              <h2 className="main-title">Quotes</h2>
              <br/>
              <div className="row stat-cards">
                <div className="btn-container">
                    <button className="action-btn">All Quotes</button>
                    <button className="action-btn">New Quote</button>
                    <button className="action-btn">Edit Quote</button>
                    <button className="action-btn">Delete Quote</button>
                  </div>
                <div className="user-container">
                  
                  <div className="user-container-form">
                    <input type="text" placeholder=" Author First name" />
                    <input type="text" placeholder="Author Last name" />
                    <input type="text" placeholder="Author Email" />
                    <input type="text" placeholder="Blog Title" />
                    <div />
                    {/* <div className="picture-container">
                      
                    </div> */}
                    <div className="text-area">
                      <textarea className="description"></textarea>
                    </div>
                    <div className="user-button-field">
                      <button className="user-button">Post Blog</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          {/* ! Footer */}
          <footer className="footer">
            <div className="container footer--flex">
              <div className="footer-start">
                <p>
                  2021 © Elegant Dashboard -{" "}
                  <a
                    href="elegant-dashboard.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    elegant-dashboard.com
                  </a>
                </p>
              </div>
              <ul className="footer-end">
                <li>
                  <a href="##">About</a>
                </li>
                <li>
                  <a href="##">Support</a>
                </li>
                <li>
                  <a href="##">Puchase</a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default dashboardui;
