import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import {Link} from 'react-router-dom'
import Box from "@mui/material/Box";


// const useStyles = makeStyles((theme) => ({
//   footer1: {
//     flexGrow: 1,
//   },
//   title: {},
//   menuItem: {
//     marginRight: theme.spacing(3),
//     textDecoration: "none",
//     color: "inherit",
//   },
//   box: {
//     display: "flex",
//     flexDirection: "row",
//     flexGrow: 1,
//     alignItems: "center",
//   },
// }));

const Footer = () => {

  return (
    <>
      <footer className="footer">
        <Container>
          <Box sx={{display:'flex',}}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h5">Agneat</Typography>
            </Box>

            <Typography variant="h5">@2022 Copyright</Typography>
          </Box>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
