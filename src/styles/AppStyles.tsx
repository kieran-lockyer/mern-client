import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Gallery from "react-grid-gallery";

export const AppContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  background: #eee;
`;

export const AppWrapper = styled.div`
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

export const NavItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 1s ease-in;
`;

export const NavItem = styled(NavLink)`
  width: 100%;
  min-height: 4rem;
  display: flex;
  justify-content: center;
  flex: 0 0 2rem;
  align-items: center;
  transition: all 0.2s ease;
  color: #fff;

  & svg {
    color: #fff;
  }

  &:hover,
  &:active {
    background: #48c0b9;
    outline: none;

    & svg {
      color: #fff;
    }
  }

  &.${props => props.activeClassName} {
    background: #48c0b9;
  }
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

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background: #172336;
`;

export const ImageCollection = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const GridGallery = styled(Gallery)`
  display: flex;
  flex-wrap: wrap;
  .tile {
    flex: 1;
  }
  .tile-viewport {
    display: flex;
    flex: 1;
  }
`;

export const tagStyles = {
  background: "#1d928b",
  color: "#fff",
  padding: " 2px 5px",
  fontSize: "12px",
  borderRadius: "5px",
  marginRight: "3px"
};

export const Container = styled.div`
  flex: 1 1 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 85%;
  background: #fff;
  max-width: 1300px;
`;

export const DashboardWrapper = styled.div`
  width: 85%;
  padding: 2rem;
  max-width: 1300px;
`;

export const Header = styled.div`
  display: flex;
  height: 5rem;
  align-items: center;
  justify-content: space-between;
  background: #172336;
  padding: 1rem 2rem;
`;

export const SearchForm = styled.div`
  flex: 1 1;
  margin-right: 1rem;
`;

export const Filter = styled.div`
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

export const Date = styled.div`
  margin-right: auto;
  margin-left: 1rem;
  color: gray;
`;

export const Client = styled.div`
  margin: 0 1rem;
  display: flex;
  align-items: center;
  width: 25%;
  justify-content: space-around;
`;

export const TagRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #eee;
  padding: 1rem 1.5rem;
  h3 {
    margin-right: auto;
  }
  &:not(:last-child) {
    margin: 10px 0;
  }
`;

export const Dashboard = styled.div`
  flex: 1 1 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Featured = styled.section`
  border-radius: 15px;
  margin-bottom: 3rem;
  display: flex;
`;

export const Graph = styled.div`
  background: #18263d;
  border-radius: 1rem;
  box-shadow: 0 0 14px 12px #e8e8e8;
  padding: 20px;
  box-sizing: border-box;
  width: 75%;
  margin-right: auto;
`;

export const Stats = styled.div`
  flex-grow: 1;
  margin-left: 2rem;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;

export const StatsItem = styled.div`
  padding: 2rem;
  background: #fff;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 10px;
  flex-direction: column;
  color: #fff;
  background: linear-gradient(to right bottom, #223f67, #192b44);
  & h2 {
    font-size: 30px;
  }

  & > span {
    padding: 10px;
    width: 100%;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    border-radius: inherit;
    font-size: 14px;
    margin-top: 10px;
    justify-content: center;
    display: flex;
    color: #51c7c1;
    &:last-child {
      background: #0000004f;
    }
  }

  &:not(:last-child) {
    margin-bottom: 0.9rem;
  }
`;

export const DashboardAnalytics = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background: #fff;
  flex: 1 1 calc(100% / 6 * 2);
  margin: 10px 10px 30px 0;
  border-radius: 15px;
  align-self: start;
  box-shadow: 0 0 5px 2px #dedede;
  &:nth-child(2n),
  &:last-child {
    margin-right: 0;
  }
`;

export const CardHeading = styled.div`
  color: #fff;
  background: linear-gradient(to bottom, #223f67, #192b44);
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  border-bottom: 1px solid #eee;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
`;

export const CardItem = styled.div`
  display: flex;
  align-items: center;
  min-height: 5rem;
  padding: 0 1rem;

  &:last-child {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
  }

  &:hover {
    background: #f9f9f9;
  }
`;

export const CardLeft = styled.div`
  margin-right: 1rem;
`;

export const CardRight = styled.div`
  cursor: pointer;
  transition: all 0.5s ease-out;
  color: #d4dee3;

  &:hover,
  &:active,
  &:focus svg {
    color: #48c0b9;
  }
`;

export const CardDetails = styled.div`
  margin-right: auto;
`;

export const CardTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const CardCount = styled.p`
  font-size: 0.875rem;
  color: #ccc;
`;
