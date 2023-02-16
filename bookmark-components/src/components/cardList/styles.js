import styled from "@emotion/styled";
import styledMap from "styled-map";
import { Card } from "antd";

export const CustomCardList = styled(Card)`
  font-family: 'Open Sans', sans-serif;
  border-radius: ${styledMap("radius", {
    borderRadius0: "0",
    borderRadius1: "4px",
    borderRadius2: "8px",
    borderRadius3: "16px",
  })};
  .ant-list{
    .ant-list-item{
      border-block-end: none;
      padding: 8px 12px;
    }
  }
`;

export const ListHeader = styled('div')`
  padding: 12px 12px;
  h3{
    font-weight: 500;
    margin: 0;
  }
  h4{
    font-weight: 300;
    margin: 0;
  }
`

export const ListFooter = styled('div')`
  padding: 16px 12px;
  a{
    color: #000;
    font-weight: 600;
    line-height: 1.5;
    .anticon{
      position: relative;
      top: 2px;
      margin-left: 5px;
    }
  }
`

export const CustomCardListBody = {
  padding: "0",
};
