import { useContext } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaSpotify } from "react-icons/fa";
import { LocaleContext } from "../../contexts/locale";

export function Footer() {
  const { _t } = useContext(LocaleContext);

  return (
    <footer className="bg-black overflow-auto mt-8">
      <div className="mx-auto max-w-screen-xl flex flex-col lg:flex-row items-center text-center justify-between mt-4 mb-4 px-6">
        <div className="flex flex-row lg:justify-start justify-center m-2 lg:w-5/12">
          <p>
            ©2023 {_t("footer:ilya_silchukou")}.{" "}
            {_t("footer:made_with_love") + " "}
            <a
              className="hover:text-blue-200"
              href="https://jedzer.com"
              target="_blank"
              rel="noreferrer"
            >
              Jedzer
            </a>
          </p>
        </div>
        <div className="m-2 lg:w-2/12">
          <p>
            <a
              className="hover:text-blue-200"
              href="privacy-policy"
              target="_blank"
              rel="noreferrer"
            >
              {_t("footer:privacy_policy")}
            </a>
          </p>
        </div>
        <div className="flex flex-row justify-center lg:justify-end text-2xl m-2 lg:w-5/12">
          <a
            href="https://www.instagram.com/ilyasilchukou_official/"
            target="_blank"
            rel="noreferrer"
            className="ml-4 hover:text-pink-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/Silchukov.Ilya"
            target="_blank"
            rel="noreferrer"
            className="ml-4 hover:text-blue-500"
          >
            <FaFacebook />
          </a>
          <a
            href="https://open.spotify.com/artist/3xTV6P8Gz4Qts9cRDkkmWI"
            target="_blank"
            rel="noreferrer"
            className="ml-4 hover:text-green-500"
          >
            <FaSpotify />
          </a>
          <a
            href="https://www.linkedin.com/in/ilya-silchukov-5778309b"
            target="_blank"
            rel="noreferrer"
            className="ml-4 hover:text-blue-300"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
