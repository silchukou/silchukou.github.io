import { Title } from "@/components/common/title";
import TextContainer from "../components/common/textContainer";
import BannerTitle from "../components/about/bannerTitle";
import { useContext } from "react";
import { LocaleContext } from "../contexts/locale";

export default function About() {
  const { _t } = useContext(LocaleContext);
  return (
    <>
      <Title className="hidden">Get to know me</Title>
      <BannerTitle
        text={_t("about:about_me")}
        imageSrc="about/about_mug.png"
        bgSrc="about/about_bg.png"
        imagePosition="right"
      />
      <TextContainer>{_t("about:about_me_text")}</TextContainer>
      <BannerTitle
        text={_t("about:how_it_all_started")}
        imageSrc="about/how_it_all_started_mug.png"
        bgSrc="about/how_it_all_started_bg.png"
        imagePosition="left"
      />
      <TextContainer>{_t("about:how_it_all_started_text")}</TextContainer>
      <BannerTitle
        text={_t("about:how_is_it_going")}
        imageSrc="about/how_is_it_going_mug.png"
        bgSrc="about/how_is_it_going_bg.png"
        imagePosition="right"
      />
      <TextContainer>{_t("about:how_is_it_going_text")}</TextContainer>
      <BannerTitle
        text={_t("about:whats_next")}
        imageSrc="about/whats_next_mug.png"
        bgSrc="about/whats_next_bg.png"
        imagePosition="left"
      />
      <TextContainer>{_t("about:whats_next_text")}</TextContainer>
      <BannerTitle
        text={_t("about:awards")}
        imageSrc="about/awards_mug.png"
        bgSrc="about/awards_bg.png"
        imagePosition="right"
      />
      <TextContainer>{_t("about:awards_text")}</TextContainer>
    </>
  );
}
