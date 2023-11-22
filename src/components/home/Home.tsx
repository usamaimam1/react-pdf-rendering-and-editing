import { Link } from "react-router-dom";
import { routes } from "../../utils/routes";

const Home = function () {
  return (
    <div className="flex items-center justify-center">
      <ul>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            PDF Editor Application
          </span>{" "}
        </h1>

        {routes.map((route) => (
          <Link
            to={route.name}
            className="my-4 block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {route.title}
            </h5>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Home;
