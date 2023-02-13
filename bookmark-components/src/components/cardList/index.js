
import React from "react";
import PropTypes from "prop-types";
import { Avatar, List } from 'antd';
import { CustomCardList, CustomCardListBody, ListHead } from "./styles";

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

const CardListComponent = ({ radius, color }) => (
  <CustomCardList
    className='panelcard'
    hoverable
    radius={radius}
    bodyStyle={CustomCardListBody}
  >
    <ListHead>
      <h3>Title</h3>
      <h4>Subtitle</h4>
    </ListHead>
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

  </CustomCardList>
);

CardListComponent.defaultProps = {
  radius: borderRadius["borderRadius1"],
};

CardListComponent.propTypes = {
  radius: PropTypes.string,
};

export default CardListComponent;
