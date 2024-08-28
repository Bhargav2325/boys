import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxDash } from "react-icons/rx";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { IoMdClose } from "react-icons/io";
import { BsDash } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import "../../index.css";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isManu, setIsMenu] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };
  const toggleOpen = () => {
    setIsMenu((prevState) => !prevState);
  };

  return (
    <>
      <div className="">
        <div className="w-full text-white fixed bg-black top-0 z-50 uppercase">
          <div className="max-w-[1500px] mx-auto py-6 flex justify-between items-center xxl:px-4">
            <a href="/">
              <img
                src="/images/BoysClub_01-1 1.png"
                alt="BoysClub_01"
                className="cursor-pointer md:w-1/2"
              />
            </a>

            <div className="flex items-center lg:hidden gap-10 ml-auto text-[25px]">
              <a href="/" className="cursor-pointer">
                Home
              </a>
              <a href="/contact" className="cursor-pointer">
                Contact
              </a>
              <div className="text-right lg:gap-2 uppercase">
                <Menu>
                  <MenuButton className="inline-flex uppercase items-center gap-2 rounded-md py-1.5 px-0 text-[25px] overflow-y-hidden font-semibold text-white focus:outline-none data-[focus]:outline-white">
                    Boys
                    <RiArrowDropDownLine className="size-6 fill-white/60" />
                  </MenuButton>

                  <MenuItems
                    transition
                    anchor="bottom end"
                    className="w-60 z-[60] origin-top-right uppercase rounded-xl mt-2 border border-gray-700 backdrop-blur-md bg-white/20 p-1 text-[24px] text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                  >
                    <MenuItem>
                      <a
                        href="/boys/andy"
                        className="group uppercase flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                      >
                        <RxDash />
                        andy
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="/boys/brett"
                        className="group uppercase flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                      >
                        <RxDash />
                        brett
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="/boys/pepe"
                        className="group uppercase flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                      >
                        <RxDash />
                        pepe
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="/boys/landwolf"
                        className="group uppercase flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                      >
                        <RxDash />
                        landwolf
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="/boys/bdog"
                        className="group uppercase flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                      >
                        <RxDash />
                        bdog
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
              <div className="text-right uppercase">
                <Menu>
                  <MenuButton className="inline-flex uppercase items-center gap-2 rounded-md py-1.5 px-0 text-[25px] overflow-y-hidden font-semibold text-white focus:outline-none data-[focus]:outline-white">
                    Chains
                    <RiArrowDropDownLine className="size-6 fill-white/60" />
                  </MenuButton>

                  <MenuItems
                    transition
                    anchor="bottom end"
                    className="w-60 z-[60] origin-top-right uppercase rounded-xl mt-2 border border-gray-700 backdrop-blur-md bg-white/20 p-1 text-[24px] text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                  >
                    <MenuItem>
                      <a
                        href="/chains/pulsechain"
                        className="group uppercase flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                      >
                        <RxDash />
                        pulsechain
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="/chains/base"
                        className="group uppercase flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                      >
                        <RxDash />
                        base
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
              <div className="text-right uppercase">
                <Menu>
                  <MenuButton className="inline-flex uppercase items-center gap-2 rounded-md py-1.5 px-0 text-[25px] overflow-y-hidden font-semibold text-white focus:outline-none data-[focus]:outline-white">
                    Bridge
                    <RiArrowDropDownLine className="size-6 fill-white/60" />
                  </MenuButton>

                  <MenuItems
                    transition
                    anchor="bottom end"
                    className="w-60 z-[60] origin-top-right uppercase rounded-xl mt-2 border border-gray-700 backdrop-blur-md bg-white/20 p-1 text-[24px] text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
                  >
                    <MenuItem>
                      <a
                        href="/bridge/pulsechains"
                        className="group uppercase flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                      >
                        <RxDash />
                        pulsechain
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="/bridge/base"
                        className="group uppercase flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
                      >
                        <RxDash />
                        base
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            </div>
            <div className="hidden lg:flex ml-auto xxxs:pl-5 ">
              <button onClick={toggleDrawer} className="lg:block px-3">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  fontSize={25}
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z" />
                </svg>
              </button>
              <Drawer
                open={isDrawerOpen}
                onClose={toggleDrawer}
                direction="left"
                className=""
                style={{ backgroundColor: "black", width: "250px" }}
              >
                <IoMdClose
                  className="w-[450px] text-[30px] text-white"
                  onClick={toggleDrawer}
                />
                <div className="px-5 py-10 text-lg space-y-10 mt-5 b">
                  <div className="flex flex-col space-y-5 text-white">
                    <a href="/contact" className="cursor-pointer">
                      Contact
                    </a>

                    <div
                      onClick={toggleMenu}
                      className="text-white uppercase cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex justify-between items-center">
                        Boys
                      </div>
                      {isMenuOpen ? (
                        <BsDash className="text-white mx-4" size={20} />
                      ) : (
                        <GoPlus className="text-white mx-4" size={20} />
                      )}
                    </div>
                    {isMenuOpen && (
                      <ul className="flex flex-col list-disc list-inside space-y-5 indent-4">
                        <li>
                          <a href="/boys/andy">andy</a>
                        </li>
                        <li>
                          <a href="/boys/brett">brett</a>
                        </li>
                        <li>
                          <a href="/boys/pepe">pepe</a>
                        </li>
                        <li>
                          <a href="/boys/landwolf">landwolf</a>
                        </li>
                        <li>
                          <a href="/boys/bdog">bdog</a>
                        </li>
                      </ul>
                    )}

                    <div
                      onClick={toggle}
                      className="text-white uppercase cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex justify-between items-center">
                        Chains
                      </div>
                      {isOpen ? (
                        <BsDash className="text-white mx-4" size={20} />
                      ) : (
                        <GoPlus className="text-white mx-4" size={20} />
                      )}
                    </div>
                    {isOpen && (
                      <ul className="flex flex-col list-disc list-inside space-y-5 indent-4">
                        <li>
                          <a href="/chains/pulsechain">pulsechains</a>
                        </li>
                        <li>
                          <a href="/chains/base">base</a>
                        </li>
                      </ul>
                    )}
                    <div
                      onClick={toggleOpen}
                      className="text-white uppercase cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex justify-between items-center">
                        Bridge
                      </div>
                      {isManu ? (
                        <BsDash className="text-white mx-4" size={20} />
                      ) : (
                        <GoPlus className="text-white mx-4" size={20} />
                      )}
                    </div>
                    {isManu && (
                      <ul className="flex flex-col list-disc list-inside space-y-5 indent-4">
                        <li>
                          <a href="/bridge/pulsechains">pulsechains</a>
                        </li>
                        <li>
                          <a href="/bridge/base">base</a>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
