import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Layout";
import Home from "../Pages/Home/Home/Home";
import Movie from "../Pages/Movie/Movie";

const route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/movie/:id',
                loader: ({ params }) => fetch(`https://api.tvmaze.com/shows/${params.id}`),
                element: <Movie></Movie>
            },
        ]
    }
])

export default route;