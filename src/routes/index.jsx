import { createBrowserRouter } from 'react-router-dom';

import Portfolio from '../screens/portfolio';
import Projects from '../screens/projects';
import About from '../screens/about';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Portfolio />,
    },
    {
        path: "about",
        element: <About />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
]);
