import styled from "@emotion/styled";

const Section = styled.section`
  grid-column: ${props => props.gridCol};
  padding: 20px;
  border-radius: 5px;
  background-color: #E2E2E2;
  border: 1px solid darkgray;
  box-shadow: 1px 1px 5px gray;
  margin-left: 180px;
  
  h2 {
    padding: 5px 0;
    text-align: center;
    background-color: ${props => props.headingBackground};
    color: ${props => props.headingColor};
  }
  i {
    color: #383838;
  }
  
  &:hover {
    box-shadow: 3px 3px 5px #181818;
  }
  @media(max-width: 900px) {
    grid-column: 1;
  }
`;

const Table = styled.table`
  width: 100%;
  th, td {
    &:first-of-type {
      text-align: left;
      font-size: 110%;
    }
    &:nth-of-type(2) {
      text-align: right;
      font-style: italic;
    }
    color: black;
  }
  th {
    &:first-of-type {
      font-size: 110%;
    }
    &:nth-of-type(2) {
      text-align: right;
    }
  }
  tr {
    &:nth-of-type(2) {
      th {
        font-weight: normal;
        font-variant: small-caps;
      }
    }
  }
`;


export { Section, Table };