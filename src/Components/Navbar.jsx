
import '../Components/Navbar.css'
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoy } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
import { FaTv } from "react-icons/fa6";
import MenuIcon from '@mui/icons-material/Menu';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
export default function HeaderComponent(props) {
  var navigate = useNavigate()
  const cartData = useSelector((state) => state?.productData);
  console.log("CARTDATA IN HEADER COMPONENT:", cartData)
  const valueofcartdata = Object.values(cartData || {});
  var defaultSearch = props ? props.defaultSearch : false
  const [open, setOpen] = useState(false);
  const profile = false

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleClick = (text) => {
    if (text == "Home") {
      navigate("/")
    }
    if (text == "Cart") {
      navigate("/cartpage")
    }
  }


  const getIcon = (text) => {
    switch (text) {
      case 'Home':
        return <HomeFilledIcon />
      case "Offers":
        return <LocalOfferIcon />
      case 'Profile':
        return <AccountBoxIcon />
      case 'Cart':
        return <AddShoppingCartIcon />
      case 'Logout':
        return <LogoutIcon />
    }
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Home', 'Offers', 'Profile', 'Cart', 'Logout'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleClick(text)}>
              <ListItemIcon>
                {getIcon(text)}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const totalItem = valueofcartdata.reduce((item1, item2) => { return item1 + item2.quantity }, 0)
// https://media.ipoji.com/ipo/images/swiggy-logo.png
  return <div className='nav'>
    <div className='logo-img'><img src="../public/zaika.jpeg" onClick={() => navigate("/")} style={{ cursor: "pointer" }}></img></div>
    <div className="threeline" onClick={toggleDrawer(true)}><MenuIcon /></div>

    <div className='list'>
      <ul>
        <li className="other"><a href="#">Other  &nbsp;&nbsp;&nbsp;<span>Sasaram,Jamuhar...</span></a><FaChevronDown /></li>

        <li>
          <div className='icon'>
            <div><FaTv /></div> &nbsp;
            <div><a href="#">Swiggy corporate</a></div>
          </div>
        </li>


        {defaultSearch == true ? <li>
          <div className='icon'>
            <div><IoSearch /></div>&nbsp;
            <div><a href="#">Search</a></div>
          </div>
        </li>
          : ""
        }

        {/* <li>
          <div className='icon'>
            <div><BiSolidOffer /></div>&nbsp;
            <div><a href="#">Offers</a></div>
          </div>
        </li> */}



        <li>
          <div className='icon'>
            <div><IoHelpBuoy /></div>&nbsp;
            <div><a href="#">Help</a></div>
          </div>
        </li>

        {profile ?
          <li>
            <div className='icon'>
              <div><CiUser /></div>&nbsp;
              <div><a href="#">Profile</a></div>
            </div>
          </li>
          :
           <li>
            <div className='icon'>
              <div><CiUser /></div>&nbsp;
              <div onClick={()=>navigate("/signin")} style={{fontWeight:"bold",cursor:"pointer"}}>Login</div>
            </div>
          </li>
          }


        <li style={{ cursor: "pointer", position: "relative" }}>
          <div
            className="icon"
            onClick={() => navigate("/cartpage")}
            style={{ display: "flex", alignItems: "center" }}
          >
            {totalItem == 0 ? "" :
              <span
                style={{
                  position: "absolute",
                  top: "-5px",
                  left: "18px",
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "12px"
                }}
              >
                {totalItem}
              </span>
            }
            <CiShoppingCart style={{ fontSize: "25px" }} />
          </div>
        </li>



      </ul>
    </div>

    <Drawer open={open} onClose={toggleDrawer(false)}>
      {DrawerList}

    </Drawer>
  </div>;
}