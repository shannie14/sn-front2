import React from "react";
import Header from "../components/visuals/Header";

//page components
import Goslingsbottles from "../components/Brands/Goslingsbottles";
import Goslingscampaigns from "../components/Brands/Goslingscampaigns";
// import MainCard from "../components/visuals/MainCard"
import Goslingscard from "../components/Brands/Goslingscard"

//architecture
import { Box } from "@mui/material";



//functiionality
const Goslings = () => {

    //display
    return (
        <Box m="20px">

            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Goslings" />
            </Box>

            <Goslingscard />

            <Box
                gridColumn="span 12"
                gridRow="span 6"

                overflow="auto">

                <Goslingscampaigns />
                <Goslingsbottles />

            </Box>
        </Box>



    );
};

export default Goslings;
