import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import HeartIcon from "@mui/icons-material/Favorite";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Image from "next/image";

export default function HeaderAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#FFFFFF" }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Image
                            src="/logoL.webp"
                            alt="Logo"
                            width={100}
                            height={48}
                            style={{ marginRight: "10px" }}
                        />
                    </Box>
                    <Box>
                        <IconButton
                            size="large"
                            aria-label="Soumettre une ziboulette"
                            color="inherit"
                        >
                            <AddBoxIcon sx={{ color: "#0d00e6" }} />{" "}
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="Voir mes favoris"
                            color="inherit"
                        >
                            <HeartIcon sx={{ color: "#0d00e6" }} />{" "}
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
