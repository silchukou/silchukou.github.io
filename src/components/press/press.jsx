import { useContext } from "react";
import "./press.css";
import { LocaleContext } from "../../contexts/locale";

export function Press() {
  const { _t } = useContext(LocaleContext);

  const press = [
    {
      id: 1,
      title: "MD Theatre Guide",
      url: "https://mdtheatreguide.com/2023/08/opera-news-opera-lafayette-announces-2023-24-season/",
      description: "Opera Lafayette Announces 2023-24 Season",
      date: "August 22, 2023",
      image:
        "https://mdtheatreguide.com/wp-content/uploads/2023/08/Opera-Lafayette-2023-24-season-1536x626.jpg",
    },
    {
      id: 2,
      title: "Forbes",
      url: "https://www.forbes.com/sites/emilywashburn/2023/08/24/2023-media-layoffs-texas-tribune-cuts-11-employees/",
      description: "2023 Media Layoffs: Texas Tribune Cuts 11 Employees",
      date: "August 24, 2023",
      image:
        "https://imageio.forbes.com/specials-images/imageserve/642459c04ffe8bd19edc04de/News-organizations-have-been-decreasing-the-amount-of-newspapers-in-print-/0x0.jpg?format=jpg&crop=2217,1246,x783,y422,safe&width=960",
    },
    {
      id: 3,
      title: "AP",
      url: "https://apnews.com/article/opera-news-shutdown-metropolitan-opera-guild-11a2f328e49f03f5e93a56a11dca5d9e",
      description: "2023 Media Layoffs: Texas Tribune Cuts 11 Employees",
      date: "August 24, 2023",
      image:
        "https://dims.apnews.com/dims4/default/f7ec9bc/2147483647/strip/true/crop/5210x3472+0+1/resize/980x653!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F35%2F8c%2F63aceb775db43a477d165876654c%2F5eedf9cd16fa4766b8f798af12d235e2",
    },
    {
      id: 4,
      title: "The New York Times",
      url: "https://www.nytimes.com/2023/08/15/arts/music/metropolitan-opera-guild-opera-news.html",
      description:
        "The Metropolitan Opera Guild Will Wind Down Amid Financial Woes The Metropolitan Opera Guild Will Wind Down Amid Financial Woes",
      date: "August 15, 2023",
      image:
        "https://static01.nyt.com/images/2023/08/15/multimedia/15metguild-fvmg/15metguild-fvmg-superJumbo.jpg?quality=75&auto=webp",
    },
    {
      id: 5,
      title: "Forbes",
      url: "https://www.forbes.com/sites/emilywashburn/2023/08/24/2023-media-layoffs-texas-tribune-cuts-11-employees/",
      description: "2023 Media Layoffs: Texas Tribune Cuts 11 Employees",
      date: "August 24, 2023",
      image:
        "https://imageio.forbes.com/specials-images/imageserve/642459c04ffe8bd19edc04de/News-organizations-have-been-decreasing-the-amount-of-newspapers-in-print-/0x0.jpg?format=jpg&crop=2217,1246,x783,y422,safe&width=960",
    },
    {
      id: 6,
      title: "AP",
      url: "https://apnews.com/article/opera-news-shutdown-metropolitan-opera-guild-11a2f328e49f03f5e93a56a11dca5d9e",
      description: "2023 Media Layoffs: Texas Tribune Cuts 11 Employees",
      date: "August 24, 2023",
      image:
        "https://dims.apnews.com/dims4/default/f7ec9bc/2147483647/strip/true/crop/5210x3472+0+1/resize/980x653!/format/webp/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F35%2F8c%2F63aceb775db43a477d165876654c%2F5eedf9cd16fa4766b8f798af12d235e2",
    },
  ];
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center items-stretch justify-center flex-wrap overflow-hidden text-ellipsis">
        {press.map((item) => (
          <div className="lg:w-4/12" key={item.id}>
            <div className="m-4 bg-grey card transition-all  rounded-lg">
              <a
                href="https://mdtheatreguide.com/2023/08/opera-news-opera-lafayette-announces-2023-24-season/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="overflow-auto">
                  <div className="h-44 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.description}
                      className="h-full w-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="flex flex-col m-4">
                    <div className="mb-3">
                      <div className="text-xl">{item.title}</div>
                    </div>
                    <div>
                      <div
                        className="overflow-hidden overflow-ellipsis line-clamp-3"
                        style={{ height: "4.5rem" }}
                      >
                        {item.description}
                      </div>
                    </div>

                    <div className="flex flex-row justify-between text-gray-400 mt-3">
                      <div className="text-sm font-light">{item.date}</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center">
        <button className="bg-grey bg-grey-light-hover transition rounded-lg p-4 m-3">
          {_t("press:load_more")}
        </button>
      </div>
    </>
  );
}
