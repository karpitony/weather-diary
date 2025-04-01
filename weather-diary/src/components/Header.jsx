import React from "react";
import { Link } from "react-router";

function Header() {
  return (
    <header className="flex justify-between p-4 w-full">
      <Link to="/">홈</Link>
      <Link to="/write">일기 작성</Link>
    </header>
  );
}

export default Header;
