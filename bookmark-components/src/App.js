
import { Button } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import { CardComponent } from './components/card/Card';

function App() {
  return (
    <div className="App">
      <CardComponent>

      </CardComponent>
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
