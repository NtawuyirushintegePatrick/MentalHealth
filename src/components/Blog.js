import { React, useState,useEffect} from "react";
// import styled from "@mui/material"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
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
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { id } from "date-fns/locale";

      
const styledTable = styled(Table)`
width:100%;
margin: 50px auto 0 auto;
`
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

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

  // const [startDate, setStartDate] = useState(new Date());

  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [Image, setImage] = useState("");
  // const [Author,setAuthor] = useState("");
  const [Data,setData] = useState([]);
  const [blogs,setBlogs]=useState([]);

  const newBlog = {
    id:id,
    title: Title,
    content: Content,
    image: Image,
  };

  

  // const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
 
  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };


  // function createData(image, title, content, carbs, protein) {
  //   return { image, title, content, carbs, protein };
  // }

  // const rows = [
  //   createData(
  //     "Image1",
  //     "Blog Title1",
  //     "Content1",
  //     "Time1",
  //     <Stack
  //       direction="row"
  //       alignItems="center"
  //       spacing={1}
  //       style={{ background: "white" }}
  //     >
  //       <IconButton
  //         aria-label="delete"
  //         onClick={handleDelete}
  //         size="small"
  //         style={{ Left: "50px", color: "red" }}
  //       >
  //         <DeleteIcon fontSize="small" />
  //       </IconButton>
  //       <IconButton
  //         aria-label="edit"
  //         onClick={handleOpen}
  //         size="small"
  //         style={{ Left: "50px" }}
  //       >
  //         <ModeEditSharpIcon fontSize="small" />
  //       </IconButton>
  //     </Stack>
  //   ),
  // ];

  async function HandleNewBlog(e){
    const Token = localStorage.getItem("token")
    e.preventDefault();
    const options = {
      headers: {'Authorization': `bearer ${Token}`}
    };
    await axios
    .post("http://mentalhealthyapi.herokuapp.com/api/createBlog",

      newBlog,
      options
    )
    
    .then((res) => {
       setData(res);
      // console.log(res);
      handlePost();
      
    });
  }

    async function handlePost (e){
      await axios
      .get("http://mentalhealthyapi.herokuapp.com/api/allBlogs")
      
      .then((response) => {
         setBlogs(response.data.Blogs);
        console.log(response.data.Blogs);
        

      })
    }


    function deleteBlogs(id){
      setBlogs([...blogs].filter(blogs => blogs.id !== id));
      console.log(blogs)
    }
  
    // async function handleDelete (e){

    //   const Token = localStorage.getItem("token")
    //   e.preventDefault();
    //   const options = {
    //     headers: {'Authorization': `bearer ${Token}`}
    //   };
    //   const id = Blogs.id
    //   await axios
    //     .delete(`http://mentalhealthyapi.herokuapp.com/api/deleteBlog/${id}`);
      
    // }

    // const getBlogs = async () => {
    //   try{
    //     return await axios.get("http://mentalhealthyapi.herokuapp.com/api/allBlogs");
    //   }catch (error){
    //      console.log('Error while fetching user from API',error.message);
    //   }
    // }

   

    // const getBlogsDetails = async() => {
    //     let response=await getBlogs();
    //     console.log("response" +response);

    //     setBlogs(response.data)
    // }
    // console.log(blogs.Blogs);

    // useEffect(() =>{
    //   getBlogsDetails();
    // },[])


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
                {/* <li>
                  <Link to="/quotes">
                    <span className="icon message" aria-hidden="true" />
                    Quotes
                  </Link>
                </li> */}
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
                <FormGroup>
      <FormControlLabel
        control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked />}
      />
      </FormGroup>
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
              <h2 className="main-title">Blogs</h2>
              <br />
              <div className="row stat-cards">
                <div className="user-container">
                  <Button className="border" onClick={handleOpen}>Create blog</Button>
                  {/* <Button className="border" onClick={handlePost}>All Blogs</Button> */}
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style} >
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"

                      >
                        <h>New blog being created</h>
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <div className="user-container-form">
                          <label>
                            <b>Title:</b>
                          </label>
                          <input
                            type="text"
                            className="form-control border"
                            placeholder=" Title"
                            name="title"
                            value={Title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                          <label>
                            <b>Content:</b>
                          </label>
                          <br />
                          <textarea
                            className="form-control"
                            placeholder="Content"
                            name="Content"
                            value={Content}
                            onChange={(e) => setContent(e.target.value)}
                          ></textarea>
                          <br />
                         
                          <br />
                          <label>
                            <b>Image:</b>
                          </label>
                          <input
                            type="file"
                            name="myImage"
                            value={Image}
                            onChange={(e) => setImage(e.target.value)}
                            
                            className="form-control"
                            placeholder="Image"
                          />
                       
                          <div className="user-button-field">
                            <button className="user-button" onClick={HandleNewBlog}>Post Blog</button>
                          </div>
                        </div>
                      </Typography>
                    </Box>
                  </Modal>
                  <br />
                  <br />

                  <styledTable >
                    <TableHead>
                      <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Blog Title</TableCell>
                        <TableCell>Blog Description</TableCell>
                        <TableCell>Blog Image</TableCell>
                        <TableCell>Blog Image</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        blogs.map(blog => (
                          <TableRow>
                            <TableCell>{blog.id}</TableCell>
                            <TableCell>{blog.title}</TableCell>
                            <TableCell>{blog.content}</TableCell>
                            <TableCell><img
                               src={blog.image}
                        
                        />
                        
                        </TableCell>
                            <TableCell>
                              <Button variant="contained" style={{margin:"10px"}} >Edit</Button>
                              <Button variant="contained" color="secondary" onClick={() => deleteBlogs(blogs.id)}>Delete</Button>
                            </TableCell>
                          </TableRow>
                        ))
                        }
                    </TableBody>
                  </styledTable >
                  {/* <TableContainer
                    component={Paper}
                    style={{ marginLeft: "20%"}}
                  >
                    <Table
                      sx={{ minWidth: 650 }}
                      size="large"
                      aria-label="a dense table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell><b>Blog Image</b></TableCell>
                          <TableCell align="right"><b>Title</b></TableCell>
                          <TableCell align="right"><b>Content</b></TableCell>
                          <TableCell align="right"></TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {Blogs.map((blog) => (
                          <TableRow
                            key={blog.id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {Blogs.image}
                            </TableCell>
                            <TableCell align="right">{blog.image}</TableCell>
                            <TableCell align="right">{blog.title}</TableCell>
                            <TableCell align="right">{blog.content}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer> */}
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

export default Dashboardui;
