import { AppDispatch } from "@/store";
import { asyncLogOut } from "@/store/slices/user-slice/requests";
import { Button, ThemeProvider } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { HeaderStyles, HeaderWrapped, MenuStyles } from "./styles";
import Link from "next/link";
import { redTheme } from "@/shared/styles/themes/red-theme";
import Image from "next/image";
import { greenTheme } from "@/shared/styles/themes/green-theme";
import { theme } from "@/shared/styles/themes";

const links = [
  { name: "Swap", link: "/" },
  { name: "Tokens", link: "/pages/tokens" },
];

const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <HeaderStyles>
      <HeaderWrapped>
        <Image src={"/images/logo.png"} alt={""} width={100} height={100} />
        <MenuStyles>
          {links.map((item, index) => (
            <Link href={item.link} key={`${item.name}_${index}`}>
              <ThemeProvider theme={theme("blue")}>
                <Button variant="outlined">{item.name}</Button>
              </ThemeProvider>
            </Link>
          ))}
          <ThemeProvider theme={greenTheme}>
            <Button variant="outlined">Connect Wallet</Button>
          </ThemeProvider>
        </MenuStyles>
        <ThemeProvider theme={redTheme}>
          <Button variant="outlined" onClick={() => dispatch(asyncLogOut())}>
            Logout
          </Button>
        </ThemeProvider>
      </HeaderWrapped>
    </HeaderStyles>
  );
};

export default Header;
