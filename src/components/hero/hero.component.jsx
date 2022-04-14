import React from 'react'
import { Container,Grid } from '@mui/material'
import { Typography } from '@mui/material';
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { grey } from '@mui/material/colors';
import ShowChartIcon from "@mui/icons-material/ShowChart";
import Box from "@mui/material/Box";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import './hero.styles.css'

const Hero = () => {
    return (
      <>
        <Container>
          <Grid container>
            <Grid item xs={12} md={8}>
              <Typography variant="h1">Let's start something big.</Typography>
              <Typography variant="h1">With us.</Typography>
              <Button variant="contained" size="large">
                Get started
              </Button>
            </Grid>
            <Grid item sx={{ display: { xs: "none", md: "flex" } }} md={4}>
              <img
                className="img"
                src="https://images.pexels.com/photos/7821738/pexels-photo-7821738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} sx={{ mt: 8 }}>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  sx={{
                    bgcolor: grey[500],
                    width: 56,
                    height: 56,
                    color: "black",
                  }}
                >
                  <ShowChartIcon />
                </Avatar>
                <Typography sx={{ ml: 1 }}>
                  Stay on tpp of market trends and build your crypto portfolio
                  and execute
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  sx={{
                    bgcolor: grey[500],
                    width: 56,
                    height: 56,
                    color: "black",
                  }}
                >
                  <ArrowUpwardIcon />
                </Avatar>
                <Typography sx={{ ml: 1 }} variant="h4">
                  80% Trust
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  sx={{
                    bgcolor: grey[500],
                    color: "black",
                    width: 56,
                    height: 56,
                  }}
                >
                  <ElectricBoltIcon />
                </Avatar>
                <Typography sx={{ ml: 1 }}>
                  We offer quick and lightning fast transactions
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={3}
            sx={{ mt: 8, bgcolor: "#100E17", borderRadius: 5, pt: 2, pb: 7,mb:5. }}
          >
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  sx={{
                    bgcolor: grey[500],
                    width: 56,
                    height: 56,
                    color: "black",
                  }}
                >
                  <ShoppingBagIcon />
                </Avatar>
                <Box sx={{ ml: 1, color: "white" }}>
                  <Typography variant="h5">Transfer money</Typography>
                  <br />
                  <Typography>
                    You can now transfer money anytime and anywhere,with
                    real-time rates.
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  sx={{
                    bgcolor: grey[500],
                    width: 56,
                    height: 56,
                    color: "black",
                  }}
                >
                  <TransferWithinAStationIcon />
                </Avatar>
                <Box sx={{ ml: 1, color: "white" }}>
                  <Typography variant="h5">Safe Transfer</Typography>
                  <br />
                  <Typography>
                    Transfer between accounts are very safe and this is
                    unlimited
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  sx={{
                    bgcolor: grey[500],
                    color: "black",
                    width: 56,
                    height: 56,
                  }}
                >
                  <GroupWorkIcon />
                </Avatar>
                <Box sx={{ ml: 1, color: "white" }}>
                  <Typography variant="h5">Real-time Partnership</Typography><br />
                  <Typography>
                    Access expert advice from team of dedicated specialists.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </>
    );
}

export default Hero
