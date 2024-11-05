import {
	Button,
	Kbd,
	Link,
	Input,
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,Modal, ModalContent, ModalHeader, ModalBody, ModalFooter,  useDisclosure, Checkbox, Dropdown,DropdownTrigger,
	Avatar,DropdownMenu ,DropdownItem ,User
} from "@nextui-org/react";
import { siteConfig } from "@/config/site";

 export function MenuItems() {


    return (<>
{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={ "foreground"}
								href={item.href}
								size="lg"
								className="text-justify text-center group transition-all duration-300 ease-in-out"
							>
							

						
  <p className="bg-left-bottom bg-gradient-to-r from-green-500 to-orange-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
  {item.label}
  </p>


							
								
							</Link>
							
						</NavbarMenuItem>
					))}
					
    
    </>)

}

