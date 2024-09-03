import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  .info{
    display: flex;
    flex-direction: column;
    align-items: center;
    .ant-pagination-item{
      &:hover{
        border-radius: 50%;
        text-decoration: underline;
      }
    }
    .ant-pagination-item-active{
      border: 1px solid #222;
      background-color: #222;
      border-radius: 50%;
    }
    .ant-pagination .ant-pagination-item-active a{
      color: #fff;
    }
    .desc{
      margin-top: 16px;
    }
  }
`