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

        {imagePosition === "right" && (
          <div className="flex justify-evenly items-center">
            <h2 className="uppercase text-5xl">{text}</h2>
            <img src={imageSrc} alt="performing" className="h-100" />
          </div>
        )}
        {imagePosition === "left" && (
          <div className="flex justify-evenly items-center">
            <img src={imageSrc} alt="performing" className="h-100" />
            <h2 className="uppercase text-5xl">{text}</h2>
          </div>
        )}
      </div>
    </>
  );
}
