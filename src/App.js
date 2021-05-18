import Content from './components/Content/Content';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="bg-momondo grid grid-cols-content">
     <Sidebar/>
     <Content/>
    </div>
  );
}

export default App;
