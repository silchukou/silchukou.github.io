import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { LocaleContext } from "../../contexts/locale";

export function NavBar() {
  const router = useRouter();
  const [isExpanded, toggleExpansion] = useState(false);
  const { _t } = useContext(LocaleContext);

  const menuItems = [
    {
      name: "nav:upcoming_events",
      path: "/",
    },
    {
      name: "nav:my_story",
      path: "/my-story",
    },
    {
      name: "nav:sights_and_sounds",
      path: "/sights-and-sounds",
    },
    {
      name: "nav:press",
      path: "/press",
    },
    {
      name: "nav:get_in_touch",
      path: "/get-in-touch",
    },
  ];
  return (
    <nav className={"bg-black " + (isExpanded && " rounded-b-2xl")}>
      <div className="flex  mx-auto items-center max-w-screen-xl justify-between flex-wrap p-6">
        <div></div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded border-white hover:text-white hover:border-white"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={
            "w-full block flex-grow lg:flex justify-evenly lg:items-center lg:w-auto text-xl tracking-wide font-thin tabular-nums " +
            (!isExpanded && "hidden")
          }
        >
          {menuItems.map((item) => (
            <Link
              className={
                "uppercase block mt-4 lg:inline-block lg:mt-0 hover:underline mr-4 " +
                (router.pathname === item.path && "font-bold")
              }
              href={item.path}
              key={item.path}
              onClick={() => toggleExpansion(false)}
            >
              {_t(item.name)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
