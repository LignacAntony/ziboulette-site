"use client";

import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import GroupIcon from "@mui/icons-material/Group";
import InfoIcon from "@mui/icons-material/Info";
import { usePathname, useRouter } from "next/navigation";

export default function BottomNavBar() {
	const router = useRouter();
    const pathname = usePathname();
    const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
        router.push(newValue);
    };

    return (
        <BottomNavigation
            sx={{
                width: "100%",
                position: "fixed",
                bottom: 0,
                backgroundColor: "#ffffff",
            }}
            value={pathname}
            onChange={handleChange}
        >
            <BottomNavigationAction
                label="Accueil"
                value="/"
                icon={
                    <HomeIcon
                        sx={{ color: pathname === "/" ? "#0d00e6" : "#595959" }}
                    />
                }
            />
            <BottomNavigationAction
                label="Zibews"
                value="/zibnews"
                icon={
                    <NewspaperIcon
                        sx={{
                            color:
                                pathname === "/zibnews" ? "#0d00e6" : "#595959",
                        }}
                    />
                }
            />
            <BottomNavigationAction
                label="Zibunity"
                value="/zibunity"
                icon={
                    <GroupIcon
                        sx={{
                            color:
                                pathname === "/zibunity"
                                    ? "#0d00e6"
                                    : "#595959",
                        }}
                    />
                }
            />
            <BottomNavigationAction
                label="À propos"
                value="/qui-sommes-nous"
                icon={
                    <InfoIcon
                        sx={{
                            color:
                                pathname === "/qui-sommes-nous"
                                    ? "#0d00e6"
                                    : "#595959",
                        }}
                    />
                }
            />
        </BottomNavigation>
    );
}
