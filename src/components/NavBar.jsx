import React, { useState } from 'react'
import { AppBar, Toolbar, styled, Typography, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import { Pets, Mail,Notifications } from '@mui/icons-material';

const StyledToolBar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
});

const Search = styled("div")(({theme})=>({
  background: 'white',
  padding:"0 10px",
  borderRadius: theme.shape.borderRadius,
  width: '40%'
}));

const Icons = styled("Box")(({theme})=>({
  color: 'white',
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}));

const UserBox = styled("Box")(({theme})=>({
  color: 'white',
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}));

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
      <StyledToolBar>
        <Typography variant='h6' sx={ { display: { xs:'none', sm:'block'} } }>Krost Tech</Typography>
        <Pets sx={ { display: { xs:'block', sm:'none'} } }/>
        <Search><InputBase placeholder='search...'/></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications/>
          </Badge>
            <Avatar sx={{ width:30, height: 30}} 
            onClick={e => setOpen(true)}
            src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8amVQNFhfWU9adkl8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=60"/>
        </Icons>
        <UserBox onClick={e => setOpen(true)}>
          <Avatar sx={{ width:30, height: 30}} src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8amVQNFhfWU9adkl8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=60"/>
          <Typography variant='span'>John</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=> setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default NavBar