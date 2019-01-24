import styled from "styled-components";

// ALL DASHBOARD STYLES GO HERE!

export const Dashboard = styled.div`
  flex: 1 1 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 85%;
  max-width: 1300px;
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
  width: 80%;
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

  & h2 {
    font-size: 30px;
  }

  & > span {
    padding: 10px;
    background: #0000004f;
    width: 100%;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    border-radius: inherit;
    font-size: 14px;
    margin-top: 10px;
  }

  &:nth-child(1) {
    background: linear-gradient(to right bottom, #3eeaea, #028586);
  }

  &:nth-child(2) {
    background: linear-gradient(to right bottom, #04a9f4, #011acc);
  }

  &:nth-child(3) {
    background: linear-gradient(to right bottom, #b53f9c, #263275);
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
  background: #172336;
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
