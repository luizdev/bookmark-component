
import React from "react";
import { css } from '@emotion/react'
import PropTypes from "prop-types";
import { Avatar, List } from 'antd';
import { CustomCard, CustomCardBody } from "./styles";

const borderRadius = {
  borderRadius0: "0",
  borderRadius1: "4px",
  borderRadius2: "8px",
  borderRadius3: "16px",
};

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const CardComponent = ({ radius, color }) => (
  <CustomCard
    className='panelcard'
    hoverable
    radius={radius}
    bodyStyle={CustomCardBody}
  >
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar size={40}  />}
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      )}
    />

  </CustomCard>
);

CardComponent.defaultProps = {
  radius: borderRadius["borderRadius1"],
};

CardComponent.propTypes = {
  radius: PropTypes.string,
};

export default CardComponent;
