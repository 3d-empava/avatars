import './App.css';
import Cube from './Cube';
import Dashboard from './Dashboard';
import Layout from './Layout';

function App() {
  return (
    <div className="">
        <Layout>
          <Dashboard />
          <Cube />
        </Layout>
    </div>
  );
}

export default App;
