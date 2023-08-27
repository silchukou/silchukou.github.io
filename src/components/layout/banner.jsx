import dynamic from "next/dynamic";
import { useContext, useMemo, useState } from "react";
import SmokeElement from "@/components/layout/smoke_bg";
import { LocaleContext } from "../../contexts/locale";

export function Banner() {
  const Player = useMemo(
    () =>
      dynamic(import("./player"), {
        ssr: false,
      }),
    []
  );

  const { locale, locales, setLocale, _t } = useContext(LocaleContext);

  const toggleLocale = () => {
    const index = locales.indexOf(locale);
    setLocale(locales[(index + 1) % locales.length]);
  };

  return (
    <section className="relative overflow-hidden">
      <img src="banner.png" alt="banner" className="bg-banner-element -z-30" />
      {/* <SmokeElement
        className="bg-banner-element -z-40"
        smokeSrc="smoke_element.png"
        smokeOpacity="0.2"
        smokeColor="eeeeee"
      /> */}
      <img src="banner_cleanup.png" className="bg-banner-element -z-50" />
      <div className="relative overflow-hidden px-6 mx-auto max-w-screen-xl text-left py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl uppercase">
          {_t("banner:title")}
        </h1>
        <h2 className="mb-8 text-xl font-normal text-gray-300 md:text-2xl lg:text-3xl uppercase">
          {_t("banner:subtitle")}
        </h2>
        <Player />

        <div className="absolute top-8 h-10 right-8 flex justify-center items-center">
          <button
            onClick={toggleLocale}
            className="text-white bg-grey bg-grey-light-hover transition rounded-lg px-3 py-2 w-24"
          >
            {locales.map((l, i) => (
              <span key={l}>
                <span
                  className={"uppercase " + (l === locale ? "font-bold" : "")}
                >
                  {l}
                </span>
                {i < locales.length - 1 && <span> / </span>}
              </span>
            ))}
          </button>
        </div>
      </div>
    </section>
  );
}
