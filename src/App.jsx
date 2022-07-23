
import './App.css';
import Feed from './components/Feed/Feed';
import Sidebar from './components/Sidebar/Sidebar';
import Widegets from './components/widegets/Widgets';

function App() {
  return (
    <div className="app">
      {/**sidebar */}
      <Sidebar/>
      {/**feed */}
      <Feed/>
      {/**widegets */}
      <Widegets/>
    </div>
  );
}

export default App;
