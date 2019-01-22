import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  background: #eee;
`;

export const Wrapper = styled.div`
  flex: 1 1 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Navbar = styled.div`
  display: flex;
  flex: 1 0 100%;
  flex-direction: column;
  align-items: center;
  max-width: 5rem;
  background: #172336;
  margin-right: auto;
`;

export const NavbarBrand = styled.div`
  margin: 3rem auto;
  & img {
    border-radius: 50%;
    width: 100%;
    height: auto;
    padding: 0.7rem;
  }
`;

export const NavbarNav = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  flex-basis: 100%;
`;

export const NavbarNavItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 1s ease-in;
`;

export const NavbarNavLink = styled.a`
  width: 100%;
  min-height: 4rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 2rem;
  flex: 0 0 2rem;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-transition: all 2s ease-in;
  transition: all 2s ease-in;
`;
