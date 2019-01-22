import styled from "styled-components";

export const Container = styled.div`
  flex: 1 1 100%;
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 85%;
  padding: 1rem 2rem 3rem;
  background: #fff;
  max-width: 1300px;
`;

export const Header = styled.div`
  display: flex;
  height: 5rem;
  align-items: center;
  justify-content: space-between;
`;

export const SearchForm = styled.div`
  flex: 1 1;
  margin: 0 5rem;
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
  margin: 10px 0;
  border-bottom: 2px solid #eee;
  padding: 1rem 1.5rem;
`;
