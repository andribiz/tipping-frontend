import React from "react";
import ActiveLink from "../../../UiElements/NavLink/NavLink";
import Menu, { MenuItem, MenuLink } from "./MainMenu.styled";

const menuItems = [
  {
    id: 1,
    label: "Overview",
    path: "/",
  },
  {
    id: 2,
    label: "Tipping",
    path: "/tipping",
  },
  {
    id: 3,
    label: "Sponsor",
    path: "/sponsor",
  },
  {
    id: 10,
    label: "Settings",
    path: "/settings",
  },
];

type MenuProps = {
  className?: string;
  onClick?: () => void;
}

const MainMenu = ({ className, onClick }: MenuProps) => {
  return (
    <Menu className={className}>
      {menuItems.map((item) => (
        <MenuItem key={`top-menu--item${item.id}`} onClick={onClick}>
          <ActiveLink activeClassName="active" href={item.path}>
            <MenuLink>{item.label}</MenuLink>
          </ActiveLink>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default MainMenu;
