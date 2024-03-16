"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button} from "@nextui-org/react";
import Link from "next/link";


const Navbarmenu = () => {
const [isMenuOpen, setIsMenuOpen] = React.useState(false);

const menuItems = [
    {
        id: 1,
        name : "Dashboard",
        link : "/"
    },
    {
        id: 2,
        name : "Images",
        link : "/Images"
    },
    {
        id: 3,
        name : "Posts",
        link : "/Posts"
    },
];
return (
        <div>
            <Navbar onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu" } className="sm:hidden" />
                    <NavbarBrand>
                        <Link href={'/'} className="font-bold text-inherit">Logo</Link>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    {menuItems.map((i) => (
                        <NavbarItem key={i.id}>
                            <Link color="foreground" className="w-full" href={i.link} >
                            {i.name}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>

                <NavbarMenu>
                    {menuItems.map((i) => (
                    <NavbarMenuItem key={i.id}>
                        <Link color="foreground" className="w-full" href={i.link}>
                        {i.name}
                        </Link>
                    </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </div>
        )
    }

export default Navbarmenu