import {Routes, Route, Link} from "react-router-dom";

export default function NavBar() {
  return (
    <div id="navbar">
      <Link to="/register">REGISTER</Link>
      <Link to="/login">LOG IN</Link>
      <Link to="/posts">POSTS</Link>
    </div>
  );
}
