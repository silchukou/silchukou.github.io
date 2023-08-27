import { Events } from "@/components/events/events";
import { Title } from "@/components/common/title";
import { useContext } from "react";
import { LocaleContext } from "../contexts/locale";

export default function Home() {
  const { _t } = useContext(LocaleContext);

  return (
    <>
      <Title>{_t("events:title")}</Title>
      <Events />
    </>
  );
}
