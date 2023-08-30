import "@/app/globals.css";
import { Layout } from "@/components/layout/layout";
import { ConfigProvider } from "antd";

import useI18n from "../hooks/i18n";
import { LocaleContext } from "../contexts/locale";

export default function App({ Component, pageProps }) {
  const { locale, setLocale, locales, _t } = useI18n();

  return (
    <LocaleContext.Provider
      value={{
        locale: locale,
        locales: locales,
        setLocale: setLocale,
        _t: _t,
      }}
    >
      <ConfigProvider
        theme={{
          components: {
            Button: {
              colorPrimary: "#282828",
              algorithm: true, // Enable algorithm
              // colorBgElevated: "#ffffff",
              colorPrimaryBg: "#ffffff",
            },
            Notification: {
              colorText: "#ffffff",
              colorBgElevated: "#282828",
              colorBg: "#282828",
            },
          },
          token: {
            // Seed Token
            colorPrimary: "#282828",
            borderRadius: 2,
            colorPrimaryBorder: "#606060",
            colorPrimaryBorderHover: "#606060",

            // Alias Token
            colorBgContainer: "#222222",

            colorTextBase: "#ffffff",

            colorBorderBg: "#282828",

            colorBorder: "#282828",
          },
        }}
      >
        <Layout>
          <Component {...pageProps}></Component>
        </Layout>
      </ConfigProvider>
    </LocaleContext.Provider>
  );
}
