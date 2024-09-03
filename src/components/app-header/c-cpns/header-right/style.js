import { styled } from "styled-components";


export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color:${props => props.theme.textColor.primaryColor};
  font-size: 14px;
  font-weight: 600;
  .btns{
    display: flex;
    .btn{
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;
      &:hover{
        background-color: #f5f5f5;
      }
    }
  }
  .profile{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 77px;
    height: 42px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    cursor: pointer;
    margin-right: 24px;
    color:#999;
    ${props => props.theme.mixin.boxShadow}

    .panpl{
      position: absolute;
      top: 54px;
      right: 0;
      width: 240px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 0 4px rgba(0,0,0,.18);
      color: #666;
      .top,.bottom{
         padding: 10px 0;
         .item{
          height: 40px;
          line-height: 40px;
          padding: 0 16px;
          &:hover{
            background-color: #f5f5f5;
          }
         }
      }
      .top{
        border-bottom: 1px solid #ddd;
      }
    }
  }
`