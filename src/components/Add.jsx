import { Fab, Modal, Tooltip, styled, Typography, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material'
import {Add as AddIcon, EmojiEmotions, Image, VideoCameraBack, PersonAdd, DateRange } from '@mui/icons-material'
import React, { useState } from 'react'
import { Box } from '@mui/system'

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems:"center",
    justifyContent:"center"
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems:"center",
    gap: 10,
    marginBottom:'20px'
});

function Add() {
    const [open, setOpen] = useState(false);
  return (
    <>
    <Tooltip 
        title="Delete" 
        sx={{position: "fixed", bottom: 20, left:{xs:"calc(50% - 25px)", md:30}}} 
        onClick={e=>setOpen(true)}>

        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
</Tooltip>
<StyledModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor={"background.default"} color={'text.primary'} p={3} borderRadius={5}>
    <Typography variant='h6' color='gray' textAlign='center'>Create Post</Typography>
    <UserBox>
        <Avatar sx={{ width:30, height: 30}} src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8amVQNFhfWU9adkl8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=60"/>
          <Typography variant='span'>John Doe</Typography>
    </UserBox>
    <TextField
          sx={{width:"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
        />
    <Stack direction='row' gap={1} mt={2} mb={3}>
        <EmojiEmotions color='primary'/>
        <Image color='secondary'/>
        <VideoCameraBack color='success'/>
        <PersonAdd color='error'/>
    </Stack>
    <ButtonGroup 
    fullWidth
    variant="contained" 
    aria-label="outlined primary button group">
        <Button>Post</Button>
        <Button sx={{width:'100px'}}><DateRange/></Button>
    </ButtonGroup>
  </Box>
</StyledModal>
</>
  )
}

export default Add