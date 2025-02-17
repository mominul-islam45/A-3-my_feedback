import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import Button from './common/Button'
import { Link } from "react-router";
import Search_Field from './Search_Field'

const NavbarArea = ({onClickField, onTypeName, onTypePlace, onClickSearch}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="2xl" shouldHideOnScroll className=" pt-5 pb-2 border-b border-b-black/20">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <NavbarBrand                 >
          <Link to='/'><img src="logo.png" alt="Logo"/></Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent>
        <Search_Field onClickField={onClickField} onTypeName={onTypeName} onTypePlace={onTypePlace} onClickSearch={onClickSearch}/>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="end">
        <NavbarItem>
          <img src="icons/world.svg" alt="icon" className=" cursor-pointer hover:scale-110 transition-all"/>
        </NavbarItem>
        <NavbarItem>
          <Button className='bg-black active:bg-black/85 text-[15px]'>MyFeedback for business</Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Device */}
      <NavbarMenu className=" space-y-4 pt-10">
        <NavbarMenuItem>
          <img src="icons/world.svg" alt="icon" className=" cursor-pointer hover:scale-110 transition-all"/>
        </NavbarMenuItem>
        <NavbarMenuItem>
        <Button className='bg-black active:bg-black/85 text-[15px]'>MyFeedback for business</Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarArea;
