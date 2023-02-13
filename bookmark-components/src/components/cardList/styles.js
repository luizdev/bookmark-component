import styled from "@emotion/styled";
import styledMap from "styled-map";
import { Card } from "antd";

export const CustomCardList = styled(Card)`
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
export const ListHead = styled('div')`
  padding: 8px 12px;
  h3{

  }
`

export const CustomCardListBody = {
  padding: "0",
};
