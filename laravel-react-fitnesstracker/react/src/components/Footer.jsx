import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

import Logo from '../assets/images/Logo-1.png'

export default function Footer() {
  return (
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack gap="40px" alignItems="center"
        px="40px" pt="24px">
        <img src={Logo} alt="logo" width="200px"
          height="40px" />
          <Typography variant='h5' pb="20px" mt="40px">
            Made with love by Melassa & CIH
          </Typography>
      </Stack>
    </Box>
  )
}
