import React from 'react'
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Button } from "@mui/material";
import Sidebaroptions from './Sidebaroption';
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <TwitterIcon className='sidebar__twitterIcon '/>
      <Sidebaroptions active Icon={HomeIcon} text="Home"/>
      <Sidebaroptions Icon={SearchIcon}text="Explore"/>
      <Sidebaroptions Icon={NotificationsNoneIcon} text="Notifications"/>
      <Sidebaroptions Icon={MailOutlineIcon} text="Messages"/>
      <Sidebaroptions Icon={BookmarkBorderIcon} text="Bookmarks"/>
      <Sidebaroptions Icon={ListAltOutlinedIcon} text="Lists"/>
      <Sidebaroptions Icon={PermIdentityOutlinedIcon} text="Profile"/>
      <Sidebaroptions Icon={MoreHorizOutlinedIcon} text="More"/>
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  )
}

export default Sidebar