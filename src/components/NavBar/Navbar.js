import { useState } from "react";
const NavBar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    return (
      <nav className="navbar bg-[#FFFBDA] p-6 flex justify-center">
        <ul className="nav-items flex flex-row gap-20 space-x-4 text-[#ffc477] font-medium text-xl ">
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <a href="/">Category</a>
            {isDropdownOpen && (
              <ul className="dropdown list p-6 bg-[##eff4c3] rounded-xl px-10">
                <li className="dropdown-item group/item p-2 w-16 first:pt-0 last:pb-0 rounded-xl  hover:text-[#FFA62F]"><a href="/category/dogs">Dogs</a></li>
                <li className="dropdown-item group/item p-2 first:pt-0 last:pb-0 rounded-xl hover:text-[#FFA62F]"><a href="/category/cats">Cat</a></li>
                <li className="dropdown-item group/item p-2 first:pt-0 last:pb-0 rounded-xl hover:text-[#FFA62F]"><a href="/category/birds">Birds</a></li>
              </ul>
            )}
          </li>
          <li className="nav-item"><a href="/contact">Contact</a></li>
          <li className="nav-item"><a href="/about">About Us</a></li>
        </ul>
      </nav>
    );
  };
export default NavBar;
