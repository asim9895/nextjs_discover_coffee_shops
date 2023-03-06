import styled from "styled-components";

export const Container = styled.div`
  padding: 0px;

  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: saturate(180%) blur(10px);

  &:hover {
    background: rgba(0, 0, 0, 0);
    backdrop-filter: saturate(360%) blur(20px);
  }
`;

export const ShopName = styled.h1`
  font-size: 20px;
  font-family: sans-serif;
  color: black;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: -20px;
`;
