import React from "react";
import Header from "../components/visuals/Header";

//page components
import Jeffersonsbottles from "../components/Brands/Jeffersonsbottles";
import Jeffersonscampaigns from "../components/Brands/Jeffersonscampaigns";
// import MainCard from "../components/visuals/MainCard"
import Jeffersonscard from "../components/Brands/Jeffersonscard"

//architecture
import { Box } from "@mui/material";

//functiionality
const Jeffersons = () => {

    //display
    return (
        <Box m="20px">

            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Jeffersons"
                    subtitle="Pernod Ricard" />
            </Box>

            <Jeffersonscard />

            <Box
                gridColumn="span 12"
                gridRow="span 6"

                overflow="auto">

                <Jeffersonscampaigns />
                <Jeffersonsbottles />

            </Box>
        </Box>



    );
};

export default Jeffersons;
