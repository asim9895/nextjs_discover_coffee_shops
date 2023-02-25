import styled from "styled-components";

export const Title = styled.p.attrs((props: { name: string }) => props)`
  font-size: ${(props) => (props.name === "asim" ? "10px" : "100px")};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #373b64;
  font-weight: bold;
`;
