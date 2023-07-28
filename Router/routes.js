
import MainLayout from "../src/components/MainLayout/MainLayout.jsx";
import Final from "../src/pages/Final.jsx";
import Home from "../src/pages/Home.jsx";
import Q1 from "../src/pages/Q1.jsx";
import Q2 from "../src/pages/Q2.jsx";
import Q3 from "../src/pages/Q3.jsx";
import Q4 from "../src/pages/Q4.jsx";
import Q5 from "../src/pages/Q5.jsx";

const routes = [
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/q1",
        Component: Q1,
      },
      {
        path: "/q2",
        Component: Q2,
      },
      {
        path: "/q3",
        Component: Q3,
      },
      {
        path: "/q4",
        Component: Q4,
      },
      {
        path: "/q5",
        Component: Q5,
      },
      {
        path: "/resumen",
        Component: Final,
      },
    ],
  },
];

export default routes;
