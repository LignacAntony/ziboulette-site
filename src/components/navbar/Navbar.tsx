import Link from "next/link";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import HamburgerMenu from "./HamburgerMenu";
import { IRoute } from "../../interface/IRoute";

const Routes: IRoute[] = [
  { name: "Accueil", path: "/" },
  { name: "Zibnews", path: "/zibnews" },
  { name: "Zibunity", path: "/zibunity" },
  { name: "À propos", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: { xs: "flex" } }}>
        <Box sx={{ display: { xs: "flex", md: "none" }, flex: { xs: 1 } }}>
          <HamburgerMenu routes={Routes} />
        </Box>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, flex: { xs: 1 }, textAlign: { xs: "center" } }}
        >
          <Link href="/" passHref>
            Ziboulette
          </Link>
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          {Routes.map((route, index) => (
            <Link key={index} href={route.path}>
              {route.name}
            </Link>
          ))}
        </Box>

        <Box
          sx={{ display: { xs: "flex", md: "none" }, flex: { xs: 1 } }}
        ></Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
