import styled from "styled-components";

export const Title = styled.p.attrs((props: { name: string }) => props)`
  font-size: ${(props) => (props.name === "asim" ? "10px" : "100px")};
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #373b64;
  font-weight: bold;
`;

export const CardContainer = styled.div`
  margin: 20px 150px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  column-gap: 1.5rem;
  row-gap: 1.5rem;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;