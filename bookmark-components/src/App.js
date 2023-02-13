import "antd/dist/reset.css";
import "./App.css";
import { Layout, Col, Row } from "antd";
import CardListComponent from "./components/cardList/index";
import CardComponent from "./components/card/index";
const {  Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <div
            className="site-layout-content"
          >
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={16}>
                <CardComponent radius="borderRadius2"></CardComponent>
              </Col>
              <Col span={8}>
                <CardListComponent radius="borderRadius2"></CardListComponent>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
