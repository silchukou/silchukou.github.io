import { Title } from "@/components/common/title";
import { SectionHeader } from "@/components/common/sectionHeader";
import SpotifyEmbed from "@/components/social/spotifyEmbed";
import YoutubeEmbed from "@/components/social/youtubeEmbed";
import InstagramFeed from "@/components/social/instagramFeed/instagramFeed";
import Image from "next/image";
import { useContext } from "react";
import { LocaleContext } from "../contexts/locale";

export default function SightsAndSounds() {
  const { _t } = useContext(LocaleContext);
  return (
    <>
      <Title className="hidden">Enjoy the performance</Title>
      <SectionHeader>
        {_t("sights_and_sounds:watch_me_on_youtube")}
      </SectionHeader>
      <div className="flex justify-center">
        <YoutubeEmbed embedId="apxAkPgElHw" />
      </div>
      <Image
        src="/stage.png"
        alt="performing"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto opacity-40"
      />
      <SectionHeader>
        {_t("sights_and_sounds:listen_to_me_on_spotify")}
      </SectionHeader>
      <SpotifyEmbed artistId="3xTV6P8Gz4Qts9cRDkkmWI" />
      <SectionHeader>
        {_t("sights_and_sounds:follow_me_on_instagram")}
      </SectionHeader>
      <div className="flex justify-center">
        <InstagramFeed />
      </div>
    </>
  );
}
