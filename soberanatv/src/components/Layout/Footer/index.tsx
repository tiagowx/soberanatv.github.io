import { Box, Typography } from "@mui/material"

export const Footer = () => {
  return (
    <Box component="footer" textAlign="right">
      <Typography component="span" variant="overline" paddingX="1rem">
        &copy; Soberana TV | {new Date().getFullYear()}
      </Typography>
    </Box>
  )
}