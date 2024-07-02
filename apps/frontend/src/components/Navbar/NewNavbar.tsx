import { Navbar } from "flowbite-react";

import { NAVBAR_MENUS } from './constants'
import Image from './unnamed.jpg'

const NewNavbar: React.FC = () => {
    return (
        <Navbar fluid rounded>
          <Navbar.Brand href="#">
            <img src={Image} className="mr-3 h-6 sm:h-9" alt="Bruh" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Disease Detector</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="#" active>
              Home
            </Navbar.Link>
            {NAVBAR_MENUS.map((menu)=>(
                <Navbar.Link href={menu.path}>{menu.text}</Navbar.Link>

            ))}
          </Navbar.Collapse>
        </Navbar>
      );

}

export default NewNavbar