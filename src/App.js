import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './Components/Home/Home';
import Main from './layouts/Main/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element:<Home></Home>,
        },
        {
          path:"/blogs"
    
        }
  ]}
  ]);
  return (
    <div className="App container mx-auto">
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
