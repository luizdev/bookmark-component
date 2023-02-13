import styled from "@emotion/styled";
import styledMap from "styled-map";
import { Card } from "antd";

export const CustomCard = styled(Card)`
  border-radius: ${styledMap("radius", {
    borderRadius0: "0",
    borderRadius1: "4px",
    borderRadius2: "8px",
    borderRadius3: "16px",
  })};
`;

export const CustomCardBody = {
  padding: "0",
};
