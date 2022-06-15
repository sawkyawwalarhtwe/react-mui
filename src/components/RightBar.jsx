import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{  display:{ xs: 'none', sm: 'block' } }} >
      <Box position='fixed' width={400}>
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>

        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
          <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHw%3D&w=1000&q=80" />
          <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" />
          <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGF2YXRhcnN8ZW58MHx8MHx8&w=1000&q=80" />
          <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" />
          <Avatar alt="Scott" src="" />
          <Avatar alt="Jennifer Lawrence" src="https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ3MDI@._V1_.jpg" />
          <Avatar alt="William Smith" src="https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" />
         
        </AvatarGroup>

        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={140} gap={5}>
          <ImageListItem>
            <img 
            src="https://media1.popsugar-assets.com/files/thumbor/jAQJl4-7gc8P3M--mfUIZQE3RY8/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/03/11/873/n/44498184/830f2f0b5c86bdb5f0dd05.93587763_/i/Best-Baking-Instagram-Accounts-Follow.jpg" 
            alt=""/>
          </ImageListItem>

          <ImageListItem>
            <img 
            src="https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/00/a0000460/img/basic/a0000460_main.jpg?20170412181434&q=80&rw=750&rh=536" 
            alt=""/>
          </ImageListItem>

          <ImageListItem>
            <img 
            src="https://www.bangkokairblog.com/wp-content/uploads/2017/10/OG-imagetom-yum-goong.jpg" 
            alt=""/>
          </ImageListItem>
          
        </ImageList>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>Latest Conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default RightBar