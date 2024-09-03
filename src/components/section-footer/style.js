import styled from "styled-components";

export const FooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  .info{
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    color: ${props => props.$color};
    &:hover{
      text-decoration: underline;
    }
    .text{
      padding-right: 8px;
    }
  }
`