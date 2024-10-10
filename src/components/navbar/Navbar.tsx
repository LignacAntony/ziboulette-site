import Link from "next/link";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import HamburgerMenu from "./HamburgerMenu";
import { IRoute } from "../../interface/IRoute";

const Routes: IRoute[] = [
  { name: "Accueil", path: "/" },
  { name: "Zibnews", path: "/zibnews" },
  { name: "Zibunity", path: "/zibunity" },
  { name: "À propos", path: "pages/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" passHref>
            Ziboulette
          </Link>
        </Typography>

        {/* Links for large screens */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          {Routes.map((route, index) => (
            <Link key={index} href={route.path}>
              {route.name}
            </Link>
          ))}
        </Box>

        {/* Hamburger menu for small screens */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <HamburgerMenu routes={Routes} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
