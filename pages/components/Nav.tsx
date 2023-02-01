import { Navigation, NavTitle, SLink } from "../../styles/Nav.styles";

const Nav = () => {
  return (
    <Navigation>
      <NavTitle>News is news</NavTitle>
      <div>
        {" "}
        <SLink href="/">Home</SLink>
        <SLink href="/about">About</SLink>
      </div>
    </Navigation>
  );
};

export default Nav;
