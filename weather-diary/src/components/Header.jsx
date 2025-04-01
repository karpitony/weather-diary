import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <header className="flex items-center justify-center p-4 w-full">
      <nav className="flex max-w-3xl w-full justify-between">
        <Link to="/" className="text-xl font-semibold">홈</Link>
        <Link to="/write" className="text-xl font-semibold">일기 작성</Link>
      </nav>
    </header>
  );
}

export default Header;
