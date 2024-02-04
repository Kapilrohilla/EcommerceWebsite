import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Badge,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  BookOpenIcon,
  UserCircleIcon,
  GlobeAsiaAustraliaIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const navListMenuItems = [
  {
    title: "Electronics",
    description: "Buy Home appliances, other products",
    icon: CpuChipIcon,
  },
  {
    title: "Mobiles",
    description: "Buy the latest, and Branded mobiles",
    icon: DevicePhoneMobileIcon,
  },
  {
    title: "Computers",
    icon: ComputerDesktopIcon,
    description: "Buy lowly/ highly specs laptop or desktop.",
  },
  {
    title: "Books",
    description: "Find each popular books for your need.",
    icon: BookOpenIcon,
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const renderItems = navListMenuItems.map(
    ({ icon, title, description }, key) => (
      <a href="#" key={key}>
        <MenuItem className="flex items-center gap-3 rounded-lg">
          <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
            {" "}
            {React.createElement(icon, {
              strokeWidth: 2,
              className: "h-6 text-gray-900 w-6",
            })}
          </div>
          <div>
            <Typography
              variant="h6"
              color="blue-gray"
              className="flex items-center text-sm font-bold"
            >
              {title}
            </Typography>
            <Typography
              variant="paragraph"
              className="text-xs !font-medium text-blue-gray-500"
            >
              {description}
            </Typography>
          </div>
        </MenuItem>
      </a>
    )
  );

  return (
    <React.Fragment>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              Shop
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`hidden h-3 w-3 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`block h-3 w-3 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </React.Fragment>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>
      <NavListMenu />
      <Typography
        as="a"
        href="#"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          Contact Us
        </ListItem>
      </Typography>
    </List>
  );
}

export function Topbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navigation = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  // const cartLength = store.getState().cart.length;
  const cartLength = useSelector((state: any) => state?.cart).length;

  return (
    <Navbar
      placeholder={"something"}
      className="fixed z-50 w-full px-4 py-2 max-w-full"
    >
      <div className="flex items-center justify-between text-blue-gray-900">
        <img
          src="/images/logo.png"
          className="h-10 w-20 object-contain"
          onClick={() => {
            navigation("/");
          }}
        />
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div>
          <IconButton variant="text">
            <MagnifyingGlassIcon className="h-6" />
          </IconButton>
          <IconButton variant="text">
            <HeartIcon className="h-6" />
          </IconButton>
          <Badge content={cartLength}>
            <IconButton variant="text">
              <ShoppingBagIcon className="h-6" />
            </IconButton>
          </Badge>
          <Button className=" hidden lg:inline-block" onClick={handleLogout}>
            Logout
          </Button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        {/* <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0  lg:flex-row lg:p-1 hidden lg:flex justify-end"> */}
        <div className="flex flex-row gap-5">
          <Button onClick={handleLogout}>Logout</Button>
        </div>
        {/* </List> */}
      </Collapse>
    </Navbar>
  );
}
