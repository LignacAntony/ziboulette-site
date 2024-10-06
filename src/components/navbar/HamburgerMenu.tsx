// components/HamburgerMenu.tsx (Client Component)
"use client";

import React, { useState } from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { IRoute } from "../../interface/IRoute";

const HamburgerMenu = ({ routes }: { routes: IRoute[] }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleMenuOpen}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        keepMounted
      >
        {routes.map((route, index) => (
          <MenuItem key={index} onClick={handleMenuClose}>
            <Link key={index} href={route.path} passHref>
              {route.name}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default HamburgerMenu;
