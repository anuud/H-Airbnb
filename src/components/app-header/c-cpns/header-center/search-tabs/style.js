import styled from "styled-components";

export const TabsWrapper = styled.div`
  display: flex;
  .item {
    flex: 1;
    text-align: center;
    font-size: 14px;
    line-height: 35px;
    margin: 15px 100px;
    cursor: pointer;
  }
  .active {
    color: #000;
    border-bottom: 2px solid #000;
  }
`;
