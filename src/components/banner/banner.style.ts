import styled from "styled-components";

export const Title = styled.h1`
  font-size: 70px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  font-weight: bold;

  @media (max-width: 800px) {
    font-size: 30px;
  }
`;

export const SpecialText = styled.span`
  color: blue;
`;
export const SubTitle = styled.p`
  font-size: "40px";
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: ${"#373b64"};
`;
export const Button = styled.button`
  background-color: blue;
  color: white;
  margin-top: 10px;
  padding: 10px 15px;
  border-radius: 0px;
  border: 0px;
  font-size: 17px;
  font-weight: 600;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
