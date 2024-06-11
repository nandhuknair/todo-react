import './index.css';
import TodoWrapper from './components/TodoWrapper'
// import { Toaster } from 'react-hot-toast';
import { Toaster } from 'sonner';


function App() {
  return (
    <div className="App">
       <Toaster />
      <TodoWrapper/>
    </div>   
  );
}

export default App;
