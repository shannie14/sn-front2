import React from "react";
import Header from "../components/visuals/Header";

//page components
import Dobelbottles from "../components/Brands/Dobelbottles";
import Dobelcampaigns from "../components/Brands/Dobelcampaigns";
// import MainCard from "../components/visuals/MainCard"
import Dobelcard from "../components/Brands/Dobelcard"

//architecture
import { Box } from "@mui/material";

//functiionality
const Dobel = () => {

    //display
    return (
        <Box m="20px">

            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="Dobel" />
            </Box>

            <Dobelcard />

            <Box
                gridColumn="span 12"
                gridRow="span 6"

                overflow="auto">

                <Dobelcampaigns />
                <Dobelbottles />

            </Box>
        </Box>



    );
};

export default Dobel;
