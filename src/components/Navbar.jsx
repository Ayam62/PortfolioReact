import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = () => {
  return (
    <div className="navContainer mt-5 fixed flex justify-between items-center bg-[#151C27] w-full   text-white rounded-full p-1">
      <div className="logo p-5 bg-transparent">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="25" viewBox="0 0 41.298 31.248">
  <path d="M19.656 0h12.96l1.439 2.16h-2.736c-1.8 0-2.159.504-1.367 1.872l10.512 18.432c1.512 2.593 1.439 8.784-4.248 8.784H20.304L18.72 28.44H0l5.472-9.433h15.624L27 29.232h3.24c1.151 0 .863-1.152.071-2.592L17.496 4.752C16.056 2.16 17.928 0 19.656 0zm-.072 16.272H7.056l6.192-10.8 6.336 10.8z" fill="white" fill-rule="evenodd" clip-rule="evenodd"/>
</svg>
      </div>
      <div className="contents" >
        <ul className="flex gap-8 m-5 font-bold bg-transparent">
            <li>Home</li>
            <li>Service</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>About</li>
        </ul>
      </div>
      <div className="drop-down p-5 mx-5  bg-[#55E6A5] rounded-full cursor-pointer"><GiHamburgerMenu color="black" style={{ background: 'transparent' }}  size={20}  /></div>
    </div>
  );
};

export default Navbar;
