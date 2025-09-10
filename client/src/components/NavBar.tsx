import { NavLink, useNavigate } from "react-router";

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <nav>
      <NavLink to="/newpost" end>
        new Post
      </NavLink>
    </nav>
  );
}
