import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './Components/Home/Home';
import Main from './layouts/Main/Main';
import Blog from './Components/Blog/Blog';
import ProjectDetail from './Components/ProjectDetail/ProjectDetail';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element:<Home></Home>,
          loader: () => fetch('projectDetail.json'),
        },
       
  ]},
  {
    path:"/blog",
    element:<Blog></Blog>
  },
  {
    path:'/project/:id',
    element:<ProjectDetail></ProjectDetail>
  }
  ]);
  return (
    <div className="App container mx-auto">
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
