import { useContext, useEffect, useState } from "react";
import "./press.css";
import { LocaleContext } from "../../contexts/locale";
import { getNews, getNewsCount } from "../../services/sanity";
import { Spin } from "antd";
import { ImSpinner2 } from "react-icons/im";

export function Press() {
  const { _t, locale } = useContext(LocaleContext);

  const [press, setPress] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setLoading(true);
    getNews(press.length, press.length + 6)
      .then((data) => {
        setPress(data);
        setLoading(false);
      })
      .then((err) => {
        console.log(err);
      });

    getNewsCount().then((data) => {
      setTotal(data);
    });
  }, []);

  const loadMore = () => {
    setLoading(true);
    getNews(press.length, press.length + 6)
      .then((data) => {
        setPress([...press, ...data]);
        setTotal(data.length);
        setLoading(false);
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row lg:items-center items-stretch flex-wrap overflow-hidden text-ellipsis">
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
                      src={item.image_url}
                      alt={item[locale + "_description"]}
                      className="h-full w-full object-cover rounded-t-lg"
                    />
                  </div>
                  <div className="flex flex-col m-4">
                    <div className="mb-3">
                      <div className="text-xl">{item[locale + "_title"]}</div>
                    </div>
                    <div>
                      <div
                        className="overflow-hidden overflow-ellipsis line-clamp-3"
                        style={{ height: "4.5rem" }}
                      >
                        {item[locale + "_description"]}
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
      {total > press.length && (
        <div className="flex flex-col items-center justify-center">
          <button className="button" disabled={loading} onClick={loadMore}>
            {(loading && (
              <Spin
                indicator={<ImSpinner2 className="animate-spin text-white" />}
              />
            )) ||
              _t("press:load_more")}
          </button>
        </div>
      )}
    </>
  );
}
