import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Sticky from "react-stickynode";
import MenuWrapper, { Menu, MenuItem, MenuLink } from "./SideMenu.styled";

const menuItems = [
  {
    id: 1,
    label: "Setting",
    path: "/tipping",
  },
  {
    id: 2,
    label: "Donatur",
    path: "/tipping/donatur",
  },
];

type MenuProps = {
  className?: string;
  onClick?: () => void;
};

const TippingMenu = ({ className = "", onClick }: MenuProps) => {
  const { pathname } = useRouter();
  const newpathname = pathname.split("/").slice(2, 3);
  const mainpath = `/${newpathname[0]}`;

  return (
    <Sticky top=".navbar" innerZ="1">
      <MenuWrapper className="side-menu-wrapper">
        <Menu className={`side-menu ${className}`}>
          {menuItems.map((item) => {
            const menupathname = item.path.split("/").slice(2, 3);
            const menupath = `/${menupathname[0]}`;

            return (
              <MenuItem key={`side-menu--key${item.id}`} onClick={onClick}>
                <Link href={item.path}>
                  <MenuLink className={mainpath === menupath ? "active" : ""}>
                    {item.label}
                  </MenuLink>
                </Link>
              </MenuItem>
            );
          })}
        </Menu>
      </MenuWrapper>
    </Sticky>
  );
};

export default TippingMenu;
