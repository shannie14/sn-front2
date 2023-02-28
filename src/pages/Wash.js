import React from "react";
import Header from "../components/visuals/Header";

//page components
import Washbottles from "../components/Brands/Washbottles";
import Washcampaigns from "../components/Brands/Washcampaigns";
// import MainCard from "../components/visuals/MainCard"
import Washcard from "../components/Brands/Washcard"

//architecture
import { Box } from "@mui/material";

//functiionality
const Wash = () => {

    //display
    return (
        <Box m="20px">

            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Wash" />
            </Box>

            <Washcard />

            <Box
                gridColumn="span 12"
                gridRow="span 6"

                overflow="auto">

                <Washcampaigns />
                <Washbottles />

            </Box>
        </Box>



    );
};

export default Wash;
