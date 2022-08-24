import { React, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ModeEditSharpIcon from "@mui/icons-material/ModeEditSharp";


const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};


const Dashboardui = () => {


  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  function createData(name, calories, fat, carbs, protein,others) {
    return { name, calories, fat, carbs, protein,others };
  }

  const rows = [
    createData(
      "First Name",
      "Last Name",
      "Email",
      "Sex",
      // "Phone number",
      
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        style={{ background: "white" }}
      >
        <IconButton
          aria-label="delete"
          size="small"
          style={{ Left: "50px", color: "red" }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton
          aria-label="edit"
          onClick={handleOpen}
          size="small"
          style={{ Left: "50px" }}
        >
          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <h>New blog being Edited</h>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div className="user-container-form">
                  <label>
                    <b>Title:</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" Title"
                    name="title"
                  />
                  <label>
                    <b>Content</b>
                  </label>
                  <br />
                  <textarea
                    className="form-control"
                    placeholder="Content"
                    name="Content"
                  ></textarea>
                  <br />
                  <label>
                    <b>Image</b>
                  </label>
                  <input
                    type="file"
                    name="myImage"
                    className="form-control"
                    placeholder="Image"
                  />
                  <div className="user-button-field">
                    <button className="user-button">Edit Blog</button>
                  </div>
                </div>
              </Typography>
            </Box>
          </Modal> */}
          <ModeEditSharpIcon fontSize="small" />
        </IconButton>
      </Stack>
    ),
    createData(
      "First Name",
      "Last Name",
      "Email",
      "Sex",
      // "Phone number",
   
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        style={{ background: "white" }}
      >
        <IconButton
          aria-label="delete"
          size="small"
          style={{ Left: "50px", color: "red" }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton
          aria-label="edit"
          onClick={handleOpen}
          size="small"
          style={{ Left: "50px" }}
        >
          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <h>New blog being Edited</h>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div className="user-container-form">
                  <label>
                    <b>Title:</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" Title"
                    name="title"
                  />
                  <label>
                    <b>Content</b>
                  </label>
                  <br />
                  <textarea
                    className="form-control"
                    placeholder="Content"
                    name="Content"
                  ></textarea>
                  <br />
                  <label>
                    <b>Image</b>
                  </label>
                  <input
                    type="file"
                    name="myImage"
                    className="form-control"
                    placeholder="Image"
                  />
                  <div className="user-button-field">
                    <button className="user-button">Edit Blog</button>
                  </div>
                </div>
              </Typography>
            </Box>
          </Modal> */}
          <ModeEditSharpIcon fontSize="small" />
        </IconButton>
      </Stack>
    ),
    createData(
      "First Name",
      "Last Name",
      "Email",
      "Sex",
      // "Phone number",
     
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        style={{ background: "white" }}
      >
        <IconButton
          aria-label="delete"
          size="small"
          style={{ Left: "50px", color: "red" }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton
          aria-label="edit"
          onClick={handleOpen}
          size="small"
          style={{ Left: "50px" }}
        >
          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <h>New blog being Edited</h>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div className="user-container-form">
                  <label>
                    <b>Title:</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" Title"
                    name="title"
                  />
                  <label>
                    <b>Content</b>
                  </label>
                  <br />
                  <textarea
                    className="form-control"
                    placeholder="Content"
                    name="Content"
                  ></textarea>
                  <br />
                  <label>
                    <b>Image</b>
                  </label>
                  <input
                    type="file"
                    name="myImage"
                    className="form-control"
                    placeholder="Image"
                  />
                  <div className="user-button-field">
                    <button className="user-button">Edit Blog</button>
                  </div>
                </div>
              </Typography>
            </Box>
          </Modal> */}
          <ModeEditSharpIcon fontSize="small" />
        </IconButton>
      </Stack>
    ),
    createData(
      "First Name",
      "Last Name",
      "Email",
      "Sex",
      // "Phone number",
    
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        style={{ background: "white" }}
      >
        <IconButton
          aria-label="delete"
          size="small"
          style={{ Left: "50px", color: "red" }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton
          aria-label="edit"
          onClick={handleOpen}
          size="small"
          style={{ Left: "50px" }}
        >
          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <h>New blog being Edited</h>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div className="user-container-form">
                  <label>
                    <b>Title:</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" Title"
                    name="title"
                  />
                  <label>
                    <b>Content</b>
                  </label>
                  <br />
                  <textarea
                    className="form-control"
                    placeholder="Content"
                    name="Content"
                  ></textarea>
                  <br />
                  <label>
                    <b>Image</b>
                  </label>
                  <input
                    type="file"
                    name="myImage"
                    className="form-control"
                    placeholder="Image"
                  />
                  <div className="user-button-field">
                    <button className="user-button">Edit Blog</button>
                  </div>
                </div>
              </Typography>
            </Box>
          </Modal> */}
          <ModeEditSharpIcon fontSize="small" />
        </IconButton>
      </Stack>
    ),
    createData(
      "First Name",
      "Last Name",
      "Email",
      "Sex",
      // "Phone number",
     
      <Stack
      
        direction="row"
        alignItems="center"
        spacing={1}
        style={{ background: "white" }}
      >
        <IconButton
          aria-label="delete"
          size="small"
          style={{ Left: "50px", color: "red" }}
        >

          <DeleteIcon fontSize="small" />
        </IconButton>
        <IconButton
          aria-label="edit"
          onClick={handleOpen}
          size="small"
          style={{ Left: "50px" }}
        >
          {/* <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <h>New blog being Edited</h>
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div className="user-container-form">
                  <label>
                    <b>Title:</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=" Title"
                    name="title"
                  />
                  <label>
                    <b>Content</b>
                  </label>
                  <br />
                  <textarea
                    className="form-control"
                    placeholder="Content"
                    name="Content"
                  ></textarea>
                  <br />
                  <label>
                    <b>Image</b>
                  </label>
                  <input
                    type="file"
                    name="myImage"
                    className="form-control"
                    placeholder="Image"
                  />
                  <div className="user-button-field">
                    <button className="user-button">Edit Blog</button>
                  </div>
                </div>
              </Typography>
            </Box>
          </Modal> */}
          <ModeEditSharpIcon fontSize="small" />
        </IconButton>
      </Stack>
    ),
  ];

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

                  <Link className="show-cat-btn" to="/user">
                    <span className="icon image" aria-hidden="true" />
                    Users
                  </Link>
                </li>
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
                <div className="notification center">
                  <input type="checkbox" name="" id="" />
                  <div className="num number center">4</div>
                  <div className="box">
                    <div className="heading center">
                      <p>
                        <i className="fas fa-bell"></i>
                        <span className="number">4</span>Notifications
                      </p>
                    </div>

                    <div className="notification-box">
                      <p>
                        <i className="fas fa-user"></i>Incoming Notification
                      </p>
                      <p>
                        <i className="fas fa-user"></i>Incoming Notification
                      </p>
                      <p>
                        <i className="fas fa-user"></i>Incoming Notification
                      </p>
                      <p>
                        <i className="fas fa-user"></i>Incoming Notification
                      </p>
                      <p>
                        <i className="fas fa-user"></i>Incoming Notification
                      </p>
                      <p>
                        <i className="fas fa-user"></i>Incoming Notification
                      </p>
                      <p>
                        <i className="fas fa-user"></i>Incoming Notification
                      </p>
                      <p>
                        <i className="fas fa-user"></i>Incoming Notification
                      </p>
                      <p>
                        <i className="fas fa-user"></i>Incoming Notification
                      </p>
                    </div>
                  </div>
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
              <h2 className="main-title">Users</h2>
              <div className="row stat-cards">
                <div  className="user-container">

                <Button onClick={handleOpen}>New User</Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        <h>New User being created</h>
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        
                        <div className="user-container-form">
                          <label>
                            <b>First Name</b>
                          </label>
                          <input
                            type="text"
                            className="form-control border"
                            placeholder=" First name"
                            name="fname"
                          />
                          <label>
                            <b>Last Name</b>
                          </label>
                          <input
                            type="text"
                            className="form-control border"
                            placeholder=" Last name"
                            name="lname"
                          />
                          <label>
                            <b>Email</b>
                          </label>
                          <input
                            type="email"
                            className="form-control border"
                            placeholder=" Email"
                            name="email"
                          />
                          <br />
                          <label>
                            <b>Sex</b>
                          </label>
                          <br />
                          <input
                            type="Sex"
                            className="form-control border"
                            placeholder=" Sex"
                            name="sex"
                          />
                           <br />
                          {/* <label>
                            <b>Phone number</b>
                          </label>
                          <br />
                          <input
                            type="number"
                            className="form-control border"
                            placeholder=" Phone number"
                            name="number"
                          />
                          <label>
                            <b>Image</b>
                          </label>
                          <input
                            type="file"
                            name="myImage"
                            className="form-control"
                            placeholder="Image"
                          /> */}
                          <div className="user-button-field">
                            <button className="user-button">New User</button>
                          </div>
                        </div>
                      </Typography>
                    </Box>
                  </Modal>
                  </div>
                  <br />
                  <br />
                  <TableContainer
                    component={Paper}
                    // style={{backgroundColor:'green'}}
                    // style={{ marginLeft: "20%",marginTop:'20%' }}
                  >
                    <Table
                      // sx={{ minWidth: 650 }}
                      // size="small"
                      // aria-label="a dense table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell>First name</TableCell>
                          <TableCell align="right">Last name</TableCell>
                          <TableCell align="right">Email</TableCell>
                          <TableCell align="right"> Sex</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                            



                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
              
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

export default Dashboardui;
