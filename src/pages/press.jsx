import { Title } from "@/components/common/title";
import { Press } from "@/components/press/press";
import { useContext } from "react";
import { LocaleContext } from "../contexts/locale";

export default function LatestNews() {
  const { _t } = useContext(LocaleContext);
  return (
    <>
      <Title>{_t("press:title")}</Title>
      <Press />
    </>
  );
}
