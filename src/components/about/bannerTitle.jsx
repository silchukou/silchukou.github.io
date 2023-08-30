import "./bannerTitle.css";

export default function BannerTitle({
  text,
  imageSrc,
  bgSrc,
  imagePosition = "right",
}) {
  return (
    <>
      <div className="banner-container my-8">
        <img
          src={bgSrc}
          alt="performing"
          className="w-full h-96 banner-image -z-10 rounded-2xl"
        />
        <div className="flex justify-evenly flex-col lg:flex-row items-center">
          {imagePosition === "right" && (
            <>
              <h2 className="uppercase text-5xl order-2 lg:order-1">{text}</h2>
              <img
                src={imageSrc}
                alt="performing"
                className="h-100 order-1 mb-2 lg:order-2"
              />
            </>
          )}
          {imagePosition === "left" && (
            <>
              <img
                src={imageSrc}
                alt="performing"
                className="h-100 mb-2 lg:order-1"
              />
              <h2 className="uppercase text-5xl lg:order-2">{text}</h2>
            </>
          )}
        </div>
      </div>
    </>
  );
}
