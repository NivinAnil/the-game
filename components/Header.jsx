import Link from "next/link";
import React from "react";

function Header({ className }) {
  return (
    <header>
      <nav className={`${className}`}>
        <div className='div-header'>
          <div className='div-title'>
            <h1>The Game</h1>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "20%",
              margin: "100",
              justifyContent: "space-evenly",
            }}
          >
            <Link href='/' className='div-title '>
              <a className='link'>Home</a>
            </Link>
            <Link href='/about' className='div-title'>
              <a className='link'>About</a>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
